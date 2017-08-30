'use strict'

const data = [
	[140, 80],
	[75, 69],
	[111, 55],
	[20, 54],
	[49, 63],
	[190, 180]
]

const w = 200
const h = 200

const svg = d3.select('.container').append('svg')
.attr('width', w)
.attr('height', h)

svg.selectAll('circle')
.data(data)
.enter()
.append('circle')
.attr('cx', (d) => {
	return d[0]
})
.attr('cy', (d) => {
	return d[1]
})
.attr('r', 5)
