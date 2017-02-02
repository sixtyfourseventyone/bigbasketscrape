var Nightmare = require('nightmare');

var google = new Nightmare()
	.useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55 Safari/537.36")
	.goto('https://www.bigbasket.com/pc/bread-dairy-eggs/bread-bakery/')
	.wait()
	.type('#city-select', 'Mumbai')
	.type('#area-select', '-400054,Mumbai')
	.click('div.btn-green button')
	.wait()
	.pdf('bb.pdf')
	.run(function(err, nightmare) {
		if(err)
			return console.log(err);
		console.log('Done');
	});