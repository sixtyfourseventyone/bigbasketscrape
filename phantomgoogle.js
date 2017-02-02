var fs = require('fs');
// var steps=[];
// var testindex = 0;
// var loadInProgress = false;//This is set to true when a page is still loading
 
/*********SETTINGS*********************/
var webPage = require('webpage');

// page.onConsoleMessage = function(msg) {
//   console.log(msg);
// }
// page.settings.userAgent = 'Chrome/56.0.2924';
// page.settings.javascriptEnabled = true;
// page.settings.loadImages = false;//Script is much faster with this field set to false
// phantom.cookiesEnabled = true;
// phantom.javascriptEnabled = true;



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

//const productLinks = [ 'pd/10000159/fresho-potato-1-kg/'];

//var links = [];
var page = webPage.create();

var test = [];

page.open('https://www.bigbasket.com/cl/fruits-vegetables/?nc=nb', function () {
    //if(status === "success") {
                    console.log('success')
                    //page.render('bb.png');

                    links = page.evaluate(function() {
                        var a = document.querySelectorAll('div.uiv2-list-box-img-block a'),
                        result = [];

                        for (var i = 0; i < a.length; i++) {    
                            result.push(a[i].href);
                        }

                        return result;
                    });
                    // for (var i = 0; i < links.length; i++) {
                    //     console.log(links[i]);
                    // }
                    console.log(links.length);

                    for (var i = 0; i < links.length; i++) {
                        var entry = links[i]+','+'\r\n';
                        fs.write('links.csv', entry, 'a');
                        console.log(i+'entry added');
                    }
                   //return links; 
                //}
                //page.render('bb1.png');
});



// alllinks.forEach(function(value){
//         page1.open(value, function() {
//             console.log('Trying to connect to '+value);
//             console.log(status);
//             var status = "success";
//             page1.render('bb2.png');
            
//             if(status === "success") {
//                 //console.log("Status: " + status);
//                   //page.render('bb.png');

//                   var productName = page.evaluate(function() {
//                     return document.querySelector('div.uiv2-product-Q-tabs h2').textContent;
//                   });

//                   var productVariant = page.evaluate(function() {
//                     var divs = document.querySelectorAll('div.uiv2-size-variants'),
//                     result = [];
//                     temp = result;
                    
//                     for (var i = 0; i < divs.length; i++) {
//                         result.push(divs[i].textContent);
//                         //temp.push(divs[i].outerHTML);           
//                     }

//                     return result;

//                   });

//                   for (var i = 0; i < productVariant.length; i++) {
//                     //console.log(productVariant[i]);

//                     slicedProductVariant = productVariant[i].replace(/\s/g,'');
//                       var attribute_s = slicedProductVariant.indexOf("(")+1;
//                       var attribute_e = slicedProductVariant.indexOf(")");
//                       var variant_attribute = slicedProductVariant.slice(attribute_s,attribute_e);

//                       var qty_e = slicedProductVariant.indexOf("-");
//                       var qty_s = 0;
//                       var variant_qty = slicedProductVariant.slice(qty_s,qty_e);

//                       var price_s = slicedProductVariant.indexOf("Rs");
//                       var price_e = slicedProductVariant.indexOf("This");
//                       var variant_price = slicedProductVariant.slice(price_s,price_e);
                    
//                     var entry = productName+','+variant_qty+','+variant_attribute+','+variant_price+'\r\n';
//                     console.log(i+'entry added');
//                     fs.write('test.csv', entry, 'a');
//                     //data[i] = productVariant[i];
//                     //console.log(productName);


//                   }
//               //console.log(productName);

//             }

//             else {
//                 console.log("Cannot connect");
//                 phantom.exit();
//             }

//             phantom.exit();
//         });
//     });









