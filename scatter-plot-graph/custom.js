var dataset = [
	[140, 80],
	[75, 69],
	[111, 55], 
	[20, 54],
	[49, 63],
	[190, 180]
];

var w = 200;
var h = 200;

var svg = d3.select('.container').append('svg')
.attr('width', w)
.attr('height', h)

svg.selectAll('circle')
.data(dataset)
.enter()
.append('circle')
.attr('cx', function(d){
	return d[0];
})
.attr('cy', function(d){
	return d[1];
})
.attr('r', 5);