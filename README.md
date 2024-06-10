
the static folder has the app.js and index.html.

https://apizana.github.io/belly-button-challenge/  this is the new repository to GitHub Pages


# Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

# Instructions
Complete the following steps:

1.  Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

2.  Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    * Use sample_values as the values for the bar chart.

    * Use otu_ids as the labels for the bar chart.

    * Use otu_labels as the hovertext for the chart.
![image](https://github.com/apizana/belly-button-challenge/assets/152649998/c82cdb07-2664-463d-95f4-b1355f229261)

3.  Create a bubble chart that displays each sample.

    * Use otu_ids for the x values.

    * Use sample_values for the y values.

    * Use sample_values for the marker size.

    * Use otu_ids for the marker colors.

    * Use otu_labels for the text values.
  
  ![image](https://github.com/apizana/belly-button-challenge/assets/152649998/9696d9de-9dc6-40e2-a467-17a65eda8418)

4.  Display the sample's metadata, i.e., an individual's demographic information.

    * Loop through each key-value pair from the metadata JSON object and create a text string.

    * Append an html tag with that text to the #sample-metadata panel.
  ![image](https://github.com/apizana/belly-button-challenge/assets/152649998/a4fda0e6-363a-474b-87fc-6775122739cc)

5. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:
![image](https://github.com/apizana/belly-button-challenge/assets/152649998/0798c591-5431-47a7-834e-421f67a2ea05)

6.  Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file



