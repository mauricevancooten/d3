'use strict'

const w = 960
const h = 500

let i = 0

const svg = d3.select('.container').append('svg')
.attr('width', w)
.attr('height', h)

svg.append('rect')
.attr('width', w)
.attr('height', h)
.on('ontouchstart' in document ? 'touchmove' : 'mousemove', particle);

function particle() {

	const m = d3.mouse(this);

	svg.insert('circle', 'rect') // Inserts circle before rectangle
	.attr('cx', m[0])
	.attr('cy', m[1])
	.attr('r', 0)
	.style('stroke', d3.rgb((i = (i + 1) % 255), 255, 255, .5))
	.style('stroke-opacity', 1)
	.transition()
    .duration(2000)
    .ease(Math.sqrt)
    .attr('r', 100)
    .style('stroke-opacity', 0)
    .remove();

	d3.event.preventDefault();

}
