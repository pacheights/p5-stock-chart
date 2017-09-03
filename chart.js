// Global Variables
var screenWidth;
var screenHeight;
var textField;
var searchButton;
var graph;
var ticker;
var timeSeries;
var data;
// Documentation: https://www.alphavantage.co/documentation/

// Setting the ticker to blank string
ticker = "";

function setup() {
    // Initializing the screen's width and height
    screenWidth = innerWidth;
    screenHeight = innerHeight;

    // Initializing the canvas and the graph
    createCanvas(screenWidth,screenHeight);
    background(25);
    graph = new Graph();
    graph.display();

    // Initializing the search bar
    textField = createInput();
    textField.value(ticker);
    textField.position(innerWidth * 0.1, innerHeight * 0.04);
    searchButton = createElement("button").id("searchButton");
    searchButton.position(innerWidth * 0.23, innerHeight * 0.04);

    // When the user enters a new stock ticker
    searchButton.mousePressed(getData)
    textField.changed(getData);
}

function draw() {
    // For when the user resizes their window
    if (screenWidth != innerWidth || screenHeight != innerHeight) {
        ticker = textField.value().toUpperCase();
        searchButton.remove();
        textField.remove();
        setup();
    }
}

function getData() {
    // Save the ticker value to prevent unneccesary API calls
    ticker = textField.value().toUpperCase();
    console.log(ticker);
    data = new Data(ticker);


}
