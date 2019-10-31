# Data Visualization
- "Data Visualization is a display of data designed to enable analysis, exploration, and discovery" - Alberto Cairo (the truthful art)
  - not just intended to communicate the meaning of their creator (infographic)
  - can include charts, maps

<!-- - Cairo claims effective visualizations are
  - truthful
  - functional
  - beautiful
  - insightful
  - enlightening  -->

## "Leonardo da Vinci of Data"
- Edward Tufte: "Leonardo da Vinci of data" - New York Times
- The Visual Display of Quantitative Information
  
  Graphical Integrity
  1. The representation of numbers, as physically measured on the surface of the graph itself, should be directly proportional to the numerical quantities represented
  2. Clear, detailed and thorough labeling should be used to defeat graphical distortion and ambiguity. Write out explanations of the data on the graph itself. Label important events in the data.
  3. Show data variation, not design variation.
  4. In time-series displays of money, deflated and standardized units of monetary measurement are nearly always better than nominal units.
  5. The number of information carrying (variable) dimensions depicted should not exceed the number of dimensions in the data. Graphics must not quote data out of context.

    ![lie factor](/images/lie_factor.jpg "Lie Factor Example")


  Data Ink
  - Good visualizations maximize data to ink ration and minimize the amount of non-data ink as possible.

    ![alt text](/images/data_ink_bad.png "Title")
    
    ![alt text](/images/data_ink_good.png "Title")



- Napoleon's March poster by Charles Joseph Minard


## D3
- Allows for binding arbitrary data to DOM (Document Object Model)
  - Apply data driven transformations to the document
- efficient manipulation of documents based on data
  - html svg and css

## Selections
- Declarative
- predicates include: containment, attribute values, class and ID
```js
d3.selectAll("p").style("color", "blue)
```

## Dynamic Properties
styles, attributes, and other properties can be functions of data

Randomly color paragraphs:

```js
  d3.selectAll("p").style("color", function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)"
  })
```

alternate between shades of gray:

```js
  d3.selectAll("p").style("color", function(d, i) {
    return i % 2 ? "#fff" : "#eee"
  })
```
### Computed Properties

Computed properties refer to an array of values (bound data)
  - each value is passed to the selection function as the first argument

```js
d3.selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(d) { return d + "px" })
```

- only have to bind the data once

## Enter and Exit

When a new piece of data is added use the  `enter` selection to add new nodes. If you want to remove nodes when they are no longer needed use the `exit` selection. 

```js
d3.selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .enter().append("p") // for every datum that doesn't have a node append one!
      .text(function(d) { return `New Node number: ${d}`})
```

A common pattern is to handle the binding, enter, and exit separately. 

```js
let p = d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .text(function(d) { return d;})

p.enter().append("p")
  .text(function(d) { return d})

p.exit().remove()
```

D3 lets you transform documents based on data
- creating and destroying elements
- change existing document from user interaction

## Not a Visual Representation

Unlike Processing or Protovis the graphics are from html, svg, and css
- easy to debug

## Transitions
Gradually interpolate styles and attributes over time. 
- can use various easing functions (elastic, cubic-in-out, linear)

```js
d3.select("body").transition()
  .style("background-color", "black")
```

```js
d3.selectAll("circle").transition()
  .duration(750)
  .delay(function(d, i) { return i * 10 })
  .attr("r", function(d) { return Math.sqrt(d * scale) })
```

You can still use CSS transitions if you want!



## Cool visualizations
- https://informationisbeautiful.net/visualizations/trillions-what-is-a-trillion-dollars/
