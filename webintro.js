
// Read the Phantom webpage '.version' element text using jQuery and "includeJs"

"use strict";
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open("https://www.bigbasket.com/", function(status) {
    if (status === "success") {
        page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", function() {
            page.evaluate(function() {
                // lastest version on the web
                //console.log("$(\"span.version\").text() -> " + $("span.version").text());
            });

            var title = page.evaluate(function(){
      
              //console.log('Printed png');
              //return $('input[name="cityquery"]').value;
                return document.title;
            });

            var city = page.evaluate(function(){
                //document.getElementById('#city-select').click(); 
                //document.querySelector("div.nav-group-label");
                document.getElementById("city-select").value="Mumbai";
                //document.getElementById('#area-select').click(); 
                document.getElementById("area-select").value="400072 , Mumbai";

                //document.getElementById('button.btn btn-default ng-scope').click(); 

                return document.getElementById("city-select");
            });
            
            //document.querySelector("input[name='cityquery']").value = "Mumbai";

            console.log("Title is: " + title)
            console.log("City element is: " + city)

            page.render('bb.png');



            phantom.exit(0);
        });
    } else {
      phantom.exit(1);
    }
});