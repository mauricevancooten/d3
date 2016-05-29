var dataset = [140, 80, 75, 69, 111, 55];

d3.select('.container').selectAll('div')
.data(dataset)
.enter()
.append('div')
.attr('class', 'bar')
.style('height', function(d) {
	return d + 'px';
});