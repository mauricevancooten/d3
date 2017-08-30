'use strict'

const data = [140, 80, 75, 69, 111, 55]

d3.select('.container').selectAll('div')
.data(data)
.enter()
.append('div')
.attr('class', 'bar')
.style('height', (d) => {
	return `${d}px`
})
