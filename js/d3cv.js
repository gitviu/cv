var bth = new Date(311692116931); 
var now = new Date();

var secs = ["Education","Experience","Events"]; 

var sections = [	
				{"sec": 0, "id": "Kindergarten", "from": 400924800000, "end": 519062400000, "ord": 0.80, "title" : "Kindergarten no. 50 Brasov"},
				{"sec": 0, "id": "Elementary School", "from": 527155200000, "end": 771696000000, "ord": 0.60, "title" : "`Anatol Ghermanschi` Elementary School Brasov", "descript": "1st to 8th grade elementary school in my home town."},
				{"sec": 0, "id": "High School", "from": 779616000000, "end": 897667200000, "ord": 0.40, "title" : "`Nicolae Titulescu` High School Brasov", "descript": "Programmer, Informatics."},
				{"sec": 0, "id": "University", "from": 937418400000, "end": 1024056000000, "ord": 0.20, "title" : "`Transilvania` University Brasov", "descript": "Bachelor of Engineering (BE), Computer and Information Sciences and Support Services"},
				{"sec": 0, "id": "University", "from": 1221811200000, "end": 1339761600000, "ord": 0.20, "title" : "`Transilvania` University Brasov", "descript": "Bachelor's degree in IT, Mathematics and Computer Science"},
			 	{"sec": 1, "id": "Montero", "from": 902134800000, "end": 928170000000, "ord": 0.20, "title" : "Montero Brasov", "descript": "IT Specialist - Implementing, testing, improving the warehouse administration software."},
			 	{"sec": 1, "id": "Kenzo", "from": 941446800000, "end": 976294800000, "ord": 0.40, "title" : "Kenzo srl Brasov", "descript": "Network Administrator."},
			 	{"sec": 1, "id": "ACV & Asc.", "from": 981363600000, "end": 993834000000,"ord": 0.60, "title" : "ACV & Asociatii Brasov", "descript": "Landsurveying - AutoCAD 2D Designer"},
			 	{"sec": 1, "id": "Public Library Brasov", "from": 997084800000, "end": 1046451600000, "ord": 0.80, "title" : "`George Baritiu` Public Library Brasov", "descript": "Network administrator, database administrator, website designer/administrator."},
			 	{"sec": 1, "id": "CREDITCOOP  Bank", "from": 1046678400000, "end": 1080320400000, "ord": 0.20, "title" : "CREDITCOOP Cooperative Bank Brasov", "descript": "Network administrator, database administrator, IT support, implementing the new banking software."},
			 	{"sec": 1, "id": "RACE", "from": 1125568800000, "end": 1159808400000, "ord": 0.40, "title" : "RACE srl Brasov", "descript": "Computer networks planning and design; IT and office equipment service; Web designing."},
			 	{"sec": 1, "id": "Ipsos", "from": 1162198800000, "end": 1220634000000, "ord": 0.60, "title" : "Ipsos Interactive Services Brasov", "descript": "Network Administrator ; Network Planning and Designing; IT Support"},
			 	{"sec": 1, "id": "Siemens", "from": 1220864400000, "end": 1229515200000, "ord": 0.80, "title" : "Siemens Enterprise Communications Brasov", "descript": "IT and VoIP Support for HiPath 8000 customers; Networking, VoIP and Linux trainings;"},
			 	{"sec": 1, "id": "Kronospan", "from": 1232355600000, "end": 1335811258000, "ord": 0.20, "title" : "Kronospan Brasov", "descript": "Network Administrator, VoIP, IT Support"},
			 	{"sec": 1, "id": "Sinoptix", "from": 1335949200000, "end": 1388768400000, "ord": 0.40, "title" : "Sinoptix Brasov", "descript": "Web developer:  PHP (Laravel), JavaScript, jQuery, Perl Dancer, SQL (MySQL, Oracle), NoSQL (MongoDB)"},
				{"sec": 1, "id": "Codern Venture", "from":  1388998800000 , "end":  1413910800000 , "ord": 0.60, "title" : "Codern Venture Brasov", "descript": "Web developer:  PHP (Laravel), JavaScript, jQuery, MySQL"},
			 	{"sec": 1, "id": "ShoCoCash", "from":  1414400400000 , "end":  1441807200000 , "ord": 0.80, "title" : "ShoCoCash Birmingham, UK", "descript": "Web developer:  PHP (Laravel, Symfony), JavaScript, jQuery, MySQL"},
			 	{"sec": 1, "id": "ClosedQuestions", "from":  1442037600000 , "end":  now , "ord": 0.20, "title" : "ClosedQuestions Ltd Birmingham, UK", "descript": "Web developer:  PHP (Laravel), JavaScript, jQuery, MySQL, Socket.io"},
			 	{"sec": 2, "id": "", "from": 311693116931, "end": 311693116931},
			];
var events = [
				{"sec": 2, "id": "Born", "from": 311693116931, "end": 311693116931},
				
                                {"sec": 2, "id": "Got married", "from": 1319285700000, "end": 1319285700000},
				{"sec": 2, "id": "Got certified in IT Security", "from": 1324387800000, "end": 1324387800000},
				{"sec": 2, "id": "Got certified in Oracle 11g SQL Fundamentals", "from": 1384507800000, "end": 1384507800000},
				//{"sec": 2, "id": "Finished my first 5k running race", "from": 1384603020000, "end": 1384603020000},
				{"sec": 2, "id": "Got Linux+ certificate from ComptTIA", "from": 1221215400000, "end": 1221215400000},
				{"sec": 2, "id": "Got `Methodical Troubleshooting in an IP environment` certificate", "from": 1224757800000, "end": 1224757800000},
				{"sec": 2, "id": "My first child was born", "from": 1423098600000, "end": 1423098600000},
			 ];

var secLength = secs.length;

var m = [150, 15, 15, 120];
var w = 960 - m[1] - m[3];
var	h = 500 - m[0] - m[2];
var	lowerHeight = secLength * 12 + 50;
var upperHeight = h - lowerHeight - 50;

var x = d3.time.scale()
    .domain([bth, now])
    .rangeRound([0, w]);
    
var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .ticks(d3.time.years, 1)
    .tickFormat(d3.time.format('%Y'))
    .tickSize(5)
    .tickPadding(10);
    
var x1 = d3.time.scale()
    .domain([bth, now])
    .rangeRound([0, w]);

var y1 = d3.scale.linear()
		.domain([0, secLength])
		.range([0, upperHeight]);

var y2 = d3.scale.linear()
		.domain([0, secLength])
		.range([0, lowerHeight]);

var d3cv = d3.select("body")
			.append("svg")
			.attr("viewBox", "0 0 960 500" )
			.attr("preserveAspectRatio", "xMidYMin meet")
			.attr("class", "d3cv");

d3cv.append("defs").append("clipPath")
	.attr("id", "clip")
	.append("rect")
	.attr("width", w)
	.attr("height", upperHeight);
			
var myname = d3cv.append("svg:image")
    .attr("xlink:href","img/bwphoto.png")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 100)
	.attr("height", 100);

var myname = d3cv.append("svg:text")
    .attr("x", 100)
    .attr("id","myname")
    .attr("y", 15)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "400 28px Exo")
    .text("Liviu Bucuţea");

var myage = d3cv.append("svg:text")
    .attr("x", 100)
    .attr("id","myname")
    .attr("y", 40)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "400 14px Exo")
    .text("34 y.o., married");

var myemail = d3cv.append("svg:text")
    .attr("x", 100)
    .attr("id","myname")
    .attr("y", 70)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "400 14px Exo")
    .text("liviu.bucutea@gmail.com");
		    
var myloc = d3cv.append("svg:text")
    .attr("x", 100)
    .attr("id","myname")
    .attr("y", 55)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "400 14px Exo")
    .text("Brasov, ROMANIA");

var selectedi = d3cv.append("svg:text")
    .attr("x", 	710)
    .attr("id","selectedi")
    .attr("y", 5)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "300 11px Exo")
    .style("fill", "#383855")
    .text("selected interval*: ");

var selectednote = d3cv.append("svg:text")
    .attr("x", 	710)
    .attr("id","selectednote")
    .attr("y", 16)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "300 7.5px Exo")
    .style("fill", "#00001C")
    .text("*can be streched/shortened and moved using the slider above the timeline.");

var sinterval = d3cv.append("svg:text")
    .attr("x", 800)
    .attr("id","sinterval")
    .attr("y", 5)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "300 11px Exo")
    .style("fill", "#383855")
    .text("");
		    
var eventTitle = d3cv.append("svg:text")
    .attr("x", 350)
    .attr("id","eventTitle")
    .attr("y", 30)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "300 12px Exo")
    .text("");

var eventDate = d3cv.append("svg:text")
    .attr("x", 350)
    .attr("id","eventDate")
    .attr("y", 40)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "300 12px Exo")
    .text("");

var empName = d3cv.append("svg:text")
    .attr("x", 350)
    .attr("id","empName")
    .attr("y", 30)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "300 14px Exo")
    .text("")
    .attr("fill","#8B0000");

var empInterval = d3cv.append("svg:text")
    .attr("x", 350)
    .attr("id","empInterval")
    .attr("y", 45)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "300 12px Exo")
    .text("")
    .attr("fill","black");

var empDescript = d3cv.append("svg:text")
    .attr("x", 350)
    .attr("id","empDescript")
    .attr("y", 60)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .style("font", "300 12px Exo")
    .text("")
    .attr("fill","black");
	    
var upper = d3cv.append("g")
	.attr("transform", "translate(" + m[3] + "," + m[0] + ")")
	.attr("width", w)
	.attr("height", upperHeight)
	.attr("class", "upper");

var lower = d3cv.append("g")
	.attr("transform", "translate(" + m[3] + "," + (upperHeight + m[0]) + ")")
	.attr("width", w)
	.attr("height", lowerHeight)
	.attr("class", "lower");
		
upper.append("g").selectAll(".secLines")
		.data(sections)
		.enter().append("line")
		.attr("x1", m[1])
		.attr("y1", function(d) {return y1(d.sec);})
		.attr("x2", w)
		.attr("y2", function(d) {return y1(d.sec);})
		.attr("stroke", "lightgray");

		// upper.append("g").selectAll(".secText")
			// .data(secs)
			// .enter().append("text")
			// .text(function(d) {return d;})
			// .attr("x", -m[1])
			// .attr("y", function(d, i) {return y1(i + .5);})
			// .attr("dy", ".5ex")
			// .attr("text-anchor", "end")
			// .attr("class", "secText");
		
lower.append("g").selectAll(".secLines")
		.data(sections)
		.enter().append("line")
		.attr("x1", m[1])
		.attr("y1", function(d) {return y2(d.sec);})
		.attr("x2", w)
		.attr("y2", function(d) {return y2(d.sec);})
		.attr("stroke", "lightgray");

lower.append("g").selectAll(".secText")
		.data(secs)
		.enter().append("text")
		.text(function(d) {return d;})
		.attr("x", -m[1])
		.attr("y", function(d, i) {return y2(i + .5);})
		.attr("dy", ".5ex")
		.attr("text-anchor", "end")
		.attr("class", "secText");

var sectionRects = upper.append("g")
	.attr("clip-path", "url(#clip)");

lower.append("g").selectAll("lowerSections")
		.data(sections)
		.enter().append("rect")
		.attr("class", function(d) {return "lowerSection" + d.sec;})
		.attr("x", function(d) {return x(d.from);})
		.attr("y", function(d) {return y2(d.sec + .5) - 5;})
		.attr("width", function(d) {return x(d.end)-x(d.from);})
		.attr("height", 10)
		.attr("stroke","#708090")
		.attr("stroke-width",2);

lower.append("g").selectAll("lowerCircles")
		.data(events)
		.enter().append("circle")
		.attr("class", function(e) {return "lowerCircle" + e.sec;})
		.attr("cx", function(e) {return x(e.from);})
		.attr("cy", function(e) {return y2(e.sec + .5) ;})
		.attr("r", 5)
		.style("fill","#DC143C");

		// lower.append("g").selectAll(".lowerLabels")
			// .data(sections)
			// .enter().append("text")
			// .text(function(d) {return d.id;})
			// .attr("x", function(d) {return x(d.from);})
			// .attr("y", function(d) {return y2(d.sec + .5);})
			// .attr("dy", ".5ex");

var brush = d3.svg.brush()
					.x(x)
					.extent([new Date(now-55555000000), now])
					.on("brush", display);

lower.append("g")
		.attr("class", "x brush")
		.call(brush)
		.selectAll("rect")
		.attr("y", 1)
		.attr("height", lowerHeight - 1);
	
lower.append("g")
		.attr("transform", "translate(" + 0 + "," + lowerHeight + ")")
		.attr("class", "axis")
		.call(xAxis)
		.selectAll("text")
  		.attr("dx", "-1.2em")
        .attr("dy", ".85em")
        .attr("transform", function(d) {
			return "rotate(-65)";
        });

display();

		
function display() {

			var rects, labels, circles;
			var	minExtent = brush.extent()[0];
			var	maxExtent = brush.extent()[1];
			var	visSections = sections.filter(function(d) {return d.from < maxExtent && d.end > minExtent;});
			var	visEvents = events.filter(function(d) {return d.from < maxExtent && d.end > minExtent;});

			lower.select(".brush")
				.call(brush.extent([minExtent, maxExtent]));

			x1.domain([minExtent, maxExtent]);

			rects = sectionRects.selectAll("rect")
			        .data(visSections, function(d) { return d.id; })
					.attr("x", function(d) {return x1(d.from);})
					.attr("width", function(d) {return x1(d.end) - x1(d.from);});
			
			rects.enter().append("rect")
				.attr("class", function(d) {return "lowerSection" + d.sec;})
				.attr("x", function(d) {return x1(d.from);})
				.attr("y", function(d) {return y1(d.sec) + 10;})
				.attr("width", function(d) {return x1(d.end) - x1(d.from);})
				.attr("height", function(d) {return .8 * y1(1);})
				.on("mouseover", function(d,i) { 
					d3cv.selectAll("#empName").text(d.title);
					d3cv.selectAll("#empInterval").text('from: '+d3.time.format("%d/%m/%Y")(new Date(d.from))+" to:"+d3.time.format("%d/%m/%Y")(new Date(d.end)));
					d3cv.selectAll("#empDescript").text(d.descript);
				})
				.on("mouseout", function(d,i) { 
					d3cv.selectAll("#empName").text('');
					d3cv.selectAll("#empInterval").text('');
					d3cv.selectAll("#empDescript").text('');
				});

			rects.exit().remove();
			
			
			circles = sectionRects.selectAll("circle")
				   .data(visEvents, function(d) { return d.id; })
				.attr("cx", function(d) {return x1(d.from);})
				.attr("r", 20);

			circles.enter().append("circle")
				.attr("class", function(d) {return "lowerSection" + d.sec;})
				.attr("cx", function(d) {return x(d.from);})
				.attr("cy", function(d) {return y1(d.sec) + 30;})
				.attr("r", 20)
				.on("mouseover", function(d,i) { 
					d3cv.selectAll("#eventTitle").text(d.id);
					d3cv.selectAll("#eventDate").text('on:'+d3.time.format("%d/%m/%Y")(new Date(d.from)));
					 })
				.on("mouseout", function(d,i) { 
					d3cv.selectAll("#eventTitle").text('');
					d3cv.selectAll("#eventDate").text('');
					
					 });

			circles.exit().remove();

			labels = sectionRects.selectAll("text")
				.data(visSections, function (d) { return d.id; })
				.attr("x", function(d) {return x1(Math.max(d.from, minExtent) + 2);});

			labels.enter().append("text")
				.text(function(d) {return d.id;})
				.attr("x", function(d) {return x1(Math.max(d.from, minExtent));})
				.attr("y", function(d) {return y1(d.sec + 0.1 + d.ord);})
				.attr("text-anchor", "from")
				;

			labels.exit().remove();
			d3cv.selectAll("#sinterval").text(d3.time.format("%d/%m/%Y")(minExtent)+" - "+d3.time.format("%d/%m/%Y")(maxExtent));
			
		}