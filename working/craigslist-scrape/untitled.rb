require 'open-uri'
require 'Nokogiri'

doc = Nokogiri::HTML(open("http://mumbai.craigslist.co.in/search/ppa"))

# puts doc.css("p.result-info a")[0]['href']

add = doc.css("p.result-info a")[0]['href']

path = "http://mumbai.craigslist.co.in/#{add}"

item = Nokogiri::HTML(open("#{path}"))

# puts path

description = item.css("section#postingbody").text

puts description

# price = item.css("span.payBlkBig").text

#puts title
#puts price

# fname = "description.txt"
# file = File.open(fname, "w")
# file.puts title
# file.puts price
# file.close

title = []
price = []
description = []

doc.css("p.result-info").each do |link|
	title << link.css("a.result-title hdrlnk").text
	puts link.css("span.result-price").text
end
