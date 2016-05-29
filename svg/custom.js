var svg = d3.select('.container').append('svg');

var	w = 500;
var h = 60;
	
svg.attr('width', w)
.attr('height', h);
 	
var dataset = [5, 10, 15, 20, 25, 20, 15, 10, 5];

var circles = svg.selectAll('circle')
.data(dataset)
.enter()
.append('circle');

circles.attr('cx', function(d, i) {
	return (i * 50) + 50;
})
.attr('cy', h/2)
.attr('r', function(d) {
	return d;
});