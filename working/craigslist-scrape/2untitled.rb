require 'open-uri'
require 'Nokogiri'
require 'csv'

doc = Nokogiri::HTML(open("http://mumbai.craigslist.co.in/search/ppa"))

title = []
price = []
description = []
paths = []
url = []

# puts doc.css("p.result-info a")[0]['href']

doc.css("p.result-info").each do |link|
	paths << link.css("a")[0]['href']
end

# puts paths

for path in paths do
	i = 0
	if path.include? "http://"
		item_path = path
	else
		item_path = "http://mumbai.craigslist.co.in#{path}"
	end

	item_page = Nokogiri::HTML(open("#{item_path}"))

	i+=1

	puts "Found #{links_num} links"
	title << item_page.css("span#titletextonly").text
	price << item_page.css("span.price").text
	description << item_page.css("section#postingbody").text
	url << item_path
end

CSV.open("testlist.csv", "w") do |csv|
	puts "Writing to csv..."
	csv << title
	csv << price
	csv << url
	csv << description
	puts "Success"
end