
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise)
d3.json(url).then(function(data){
    console.log(data);
   
   
//Populate the dropdown
d3.select("#selDataset")
    .selectAll("option")
    .data(data.names)
    .enter()
    .append("option")
    .text(d=>d)
    .attr("value",d=>d);

    optionChanged(d3.select("#selDataset").property("value"));

});
// This function is used in optionChanged which feeds it the top 10 OTUs and the labels.
// From there a bar chart is created.
function CreateHBar(x,y,text) {
    var data = [{
        type: 'bar',
        x: x,
        y: y,
        text: text,
        orientation: 'h'
    }];

    var layout = {
        title: "Top 10 OTUs"
      };

    Plotly.newPlot('bar', data, layout);
}

// This function is used in optionChanged which feeds it all 10 OTUs and the labels.
// From there a bubble chart is created.
function CreateBubble(x,y,text) {
    var data = [{
        x: x,
        y: y,
        text: text,
        mode: 'markers',
        marker: {
          size: y,
          color: x.map(value=>value)
        }
    }];
    var layout = {
        title: "OTU Values",
        xaxis: {
            title: {
              text: 'OTU ID',
            }
        }
    };
    Plotly.newPlot('bubble', data, layout);
}

// This function is used in optionChanged which feeds it the number of weekly belly button washes.
// From there a gauge chart is created.
function CreateGauge(num) {
    
    var data = [
    {
        domain: { x: [0, 1], y: [0, 1] },
        value: num,
        title: "Weekly Belly Button Washing Frequency",
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [null, 10]},
            bar: { color: "#000000" },
            steps: [
                { range: [0, 1], color: "lightgreen" },
                { range: [1, 2], color: "mediumgreen" },
                { range: [2, 3], color: "mediumgreen" },
                { range: [3, 4], color: "lime" },
                { range: [4, 5], color: "forestgreen" },
                { range: [5, 6], color: "forestgreen" },
                { range: [6, 7], color: "green" },
                { range: [7, 8], color: "green" },
                { range: [8, 9], color: "darkgreen" },
                { range: [9, 10], color: "darkgreen" },
            ],
        }
    }];
    Plotly.newPlot('gauge', data);
}

// This function is used in optionChanged which feeds it the metadata.
// The existing unordered list is cleared and a new one takes the place.
function Meta(data) {
    var div = d3.select("#sample-metadata");
    div.html("")
    var list = div.append("ul");
    Object.entries(data).forEach(([key, value]) => {
        list.append("li").text(key + ": " + value);
     });
}

// This function loads in the incoming data and executes each function so all charts are populated.
function optionChanged(value) {
    const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

    const dataPromise1 = d3.json(url);
    console.log("Data Promise: ", dataPromise1)
    d3.json(url).then(function(incomingData){
    console.log(incomingData);
                 
        var metadata = incomingData.metadata.filter(data => data.id ==value);
        console.log(metadata);

        var sample = incomingData.samples.filter(data => data.id ==value);
        console.log(sample);

        CreateHBar(sample[0].sample_values.slice(0,10).reverse(),sample[0].otu_ids.slice(0,10).reverse().map(a=>"OTU "+ a),sample[0].otu_labels.slice(0,10).reverse());
        CreateBubble(sample[0].otu_ids,sample[0].sample_values,sample[0].otu_labels);
        Meta(metadata[0]);
        CreateGauge(metadata[0].wfreq);
});


}

  
