var fs = require('fs');
var steps=[];
var testindex = 0;
var loadInProgress = false;//This is set to true when a page is still loading
 
/*********SETTINGS*********************/
var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = {
  width: 1418,
  height: 750
};

page.onConsoleMessage = function(msg) {
  console.log(msg);
}
page.settings.userAgent = 'Chrome/56.0.2924';
page.settings.javascriptEnabled = true;
page.settings.loadImages = false;//Script is much faster with this field set to false
phantom.cookiesEnabled = true;
phantom.javascriptEnabled = true;

phantom.addCookie({
    "domain": ".bigbasket.com",
    "expirationDate": 2116587085.791514,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_bb_cid",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "4",
    "id": 1
});
phantom.addCookie({
    "domain": ".bigbasket.com",
    "expirationDate": 1486834380,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_bb_pop",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1",
    "id": 2
});
phantom.addCookie({
    "domain": ".bigbasket.com",
    "expirationDate": 1517403085.791657,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_bb_rd",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "6",
    "id": 3
});
phantom.addCookie({
    "domain": ".bigbasket.com",
    "expirationDate": 1517160780,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_bb_rdt",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "\"MzE1MTA0ODYyNQ==.0\"",
    "id": 4
});
phantom.addCookie({
    "domain": ".bigbasket.com",
    "expirationDate": 1517160780,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_bb_tc",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "0",
    "id": 5
});
phantom.addCookie({
    "domain": ".bigbasket.com",
    "expirationDate": 2116344780,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_bb_vid",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "\"Mjk3NTExNDI5MQ==\"",
    "id": 6
});
phantom.addCookie({
    "domain": ".bigbasket.com",
    "expirationDate": 1548938820,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_ga",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "GA1.2.1044757811.1485624802",
    "id": 7
});
phantom.addCookie({
    "domain": ".bigbasket.com",
    "expirationDate": 1485867420,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_gat",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1",
    "id": 8
});
phantom.addCookie({
    "domain": ".bigbasket.com",
    "expirationDate": 1548759420,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_vz",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "viz_587e73ad450ed",
    "id": 9
});
phantom.addCookie({
    "domain": ".bigbasket.com",
    "expirationDate": 1486834380,
    "hostOnly": false,
    "httpOnly": true,
    "name": "sessionid",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "60ac0d25198d0ad320b8b6fdc04b516c",
    "id": 10
});
phantom.addCookie({
    "domain": "www.bigbasket.com",
    "expirationDate": 1517137020,
    "hostOnly": true,
    "httpOnly": false,
    "name": "csrftoken",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "eb5561f77a37962e9249ae7a61643904",
    "id": 11
});

console.log('Trying to connect');

//productLinks.forEach(function(value){
  page.open('https://www.bigbasket.com/cl/fruits-vegetables/?nc=nb', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
      page.render('b.png');


      var productLinks = page.evaluate(function() {
        var divs = document.querySelectorAll('div.uiv2-list-box-img-block a'),
        result = [];
        //temp = result;
        
        for (var i = 0; i < divs.length; i++) {
            result.push(divs[i].href);
            //temp.push(divs[i].outerHTML);           
        }

        return result;

      });

      console.log(productLinks[1]);

      for (var i = 0; i < productLinks.length; i++) {
        //console.log(productVariant[i]);
        
        var entry = productLinks[i]+',\r\n';
        console.log(i+'entry added');
        fs.write('links.csv', entry, 'a');
        //data[i] = productVariant[i];
        //console.log(productName);

      }
      console.log(productLinks.length);

    }

    else {
      console.log("Cannot connect");
      phantom.exit();
    }

    phantom.exit();
  });
//});



