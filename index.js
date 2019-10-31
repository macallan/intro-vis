
const blue = "#81ecec"

// d3.selectAll("svg")
//   .style("border-style", "solid")
//   .style("border-width", "2px")
//   .attr("height", "500px")
//   .attr("width", "500px")

//Example 1

// let vis = d3.select(".example1")

// let data = [4, 8, 15, 16, 23, 42]

// let circles = vis.selectAll("circle")
//   .data(data)
//     .enter().append("circle")
//       .attr("cx", function(d, i) {
//         return 40 + 80 * i
//       })
//       .attr("cy", 30)
//       .attr("fill", blue)

// let scale = 10
// circles.transition()
//   .duration(1500)
//   .delay(function(d, i) { return i * 10 })
//   .attr("r", function(d) { return Math.sqrt(d * scale) })


let data2 = [
  { 
    rank: 1,
    song: "Shape of You",
    artist: "Ed Sheeran",
    streams: 2323,
    year: 2017
  },
  { 
    rank: 2,
    song: "One Dance",
    artist: "Drake",
    streams: 1759,
    year: 2016
  },
  { 
    rank: 3,
    song: "Rockstar",
    artist: "Post Malone",
    streams: 1718,
    year: 2017
  },
  { 
    rank: 4,
    song: "Closer",
    artist: "Chainsmokers",
    streams: 1643,
    year: 2016
  },
  { 
    rank: 5,
    song: "Thinking Out Loud",
    artist: "Ed Sheeran",
    streams: 1422,
    year: 2014
  },
  { 
    rank: 6,
    song: "God's Plan",
    artist: "Drake",
    streams: 1401,
    year: 2018
  },
  { 
    rank: 7,
    song: "Havana",
    artist: "Camila Cabello",
    streams: 1328,
    year: 2017
  },
  { 
    rank: 8,
    song: "Despacito",
    artist: "Luis Fonsi, Daddy Yankee, Justin Bieber",
    streams: 1291,
    year: 2017
  },
  { 
    rank: 9,
    song: "Love Yourself",
    artist: "Justin Bieber",
    streams: 1286,
    year: 2015
  },
  { 
    rank: 10,
    song: "Lean On",
    artist: "Major Lazer and DJ Snake",
    streams: 1286,
    year: 2015
  }
]

// Example 2

// let vis2 = d3.select(".example2")

// shuffled = data2.sort(() => Math.random() - 0.5)
// vis2.selectAll("div").data(shuffled)
//   .enter().append("div")
//     .style("width", function(d) { return d.streams / 10 + "px"})
//     .style("height", "20px")
//     .style("background-color", blue)
//     .style("margin", "10px")
//     .text(function(d) {return d.song})


// Example 3

let vis3 = d3.select(".example3")
  .style("border-style", "solid")
  .style("border-width", "2px")
  .style("height", "500px")
  .style("width", "500px")

let xScale = d3.scaleLinear()
  .domain([0, d3.max(data2.map(song => song.streams))])
  .range([0, 500])

let yScale = d3.scaleLinear()
  .domain([0, data2.length])
  .range([0, 500])


shuffled = data2.sort(() => Math.random() - 0.5)
vis3.selectAll("rect").data(shuffled)
  .enter().append("rect")
    .attr("width", function(d) { return xScale(d.streams) + "px" })
    .style("fill", blue)
    .attr("height", "20px")
    .attr("y", function(d, i) { return yScale(i)})
    .append("text")
      .text((d) => { return d.song })
