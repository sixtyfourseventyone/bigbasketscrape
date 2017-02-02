var Horseman = require('node-horseman');

var mumcookie = [{
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
},
{
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
},
{
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
},
{
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
},
{
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
},
{
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
},
{
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
},
{
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
},
{
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
},
{
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
},
{
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
}
];

const productLinks = [ 'pd/10000159/fresho-potato-1-kg/'];

productLinks.forEach(function(value){
  const horseman = new Horseman();

  horseman
    .userAgent('Chrome/56.0.2924')
    .cookies(mumcookie)
    .viewport(1280,1024)
    .open('https://www.bigbasket.com/'+value)
    //.screenshot('1locationentry.png')
    .count('div.uiv2-size-variants')
    //.value('div.uiv2-size-variants')
    .text('div.uiv2-size-variants')
    //.log()
    .close()

});

console.log('horseman');



// horseman
  
//   .open('https://www.bigbasket.com')
//   .viewport(1280,1024)
//   //.zoom(2)
//   .wait(5000)
//   .screenshot('1locationentry.png')

//   // .click('[name="continue"]')
//   // .screenshot('2home.png')
//   //.click('[name="btnK"]')
//   //.keyboardEvent('keypress', 16777221)
//   //.waitForSelector('div.g')
//   //.count('div.g')
  //.log() // prints out the number of results
  // .close();