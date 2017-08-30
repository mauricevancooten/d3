'use strict'

const svg = d3.select('.container').append('svg')
const	w = 500
const h = 60

svg.attr('width', w)
.attr('height', h)

const data = [5, 10, 15, 20, 25, 20, 15, 10, 5]

const circles = svg.selectAll('circle')
.data(data)
.enter()
.append('circle')

circles.attr('cx', (d, i) => {
	return (i * 50) + 50
})
.attr('cy', h/2)
.attr('r', (d) => {
	return d
})
