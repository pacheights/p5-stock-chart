function Graph(data) {
    this.textSize = innerHeight / 48;
    this.textColor = 230;
    this.font = "verdana";
    this.grid;
    this.labels;
    this.candles;

    this.display = function() {
        // Text Parameters
        textFont(this.font);
        textSize(this.textSize);

        // Display on startup
        if (data === undefined) {
            this.grid();
        }
        // Display after user enters a ticker
        else {
            this.grid();
            this.labels();
            this.candles();
        }
    }

    this.grid = function() {
        // Vertical lines
        stroke(80);
        for (var i = 0.1; i < 0.8; i += 0.1) {
            line(floor(innerWidth * i), floor(innerHeight * 0.1),
                 floor(innerWidth * i), floor(innerHeight * 0.8));
        }
        stroke(this.textColor);
        line(floor(innerWidth * 0.1), floor(innerHeight * 0.8),
             floor(innerWidth * 0.1), floor(innerHeight * 0.9));
        line(floor(innerWidth * 0.9), floor(innerHeight * 0.1),
             floor(innerWidth * 0.9), floor(innerHeight * 0.9));

        // Horizonatal Lines
        stroke(80);
        for (var i = 0.1; i < 0.8; i += 0.1) {
            line(floor(innerWidth * 0.1), floor(innerHeight * i),
                 floor(innerWidth * 0.9), floor(innerHeight * i));
        }
        stroke(this.textColor);
        line(floor(innerWidth * 0.1), floor(innerHeight * 0.8),
             floor(innerWidth * 0.9), floor(innerHeight * 0.8));
        line(floor(innerWidth * 0.1), floor(innerHeight * 0.9),
             floor(innerWidth * 0.9), floor(innerHeight * 0.9));
    }

    this.labels = function() {
        // X-axis text
        noStroke();
        fill(this.textColor);

        // Counting down the days
        count = 13;
        for (var i = 0.18; i < 0.8; i += 0.1) {
            text(data.dateLabels[count], floor(innerWidth * i),
                 floor(innerHeight * 0.93));
            count -= 2;
        }

        // Y-axis text
        count = 0;
        for (var i = 0.208; i < 0.8; i += 0.1) {
            text(data.priceLabels[count],
                floor(innerWidth * 0.91),
                floor(innerHeight * i));
            count++;
        }
    }

    this.candles = function() {
        var count = 14;
        strokeWeight(1);
        strokeCap(PROJECT);

        for (var i = 0.15; i < 0.9; i += 0.05) {
            // Price parameters
            var high = dataJSON[data.timeSeries][data.dateKeys[count]]["2. high"];
            var low = dataJSON[data.timeSeries][data.dateKeys[count]]["3. low"];
            var open = dataJSON[data.timeSeries][data.dateKeys[count]]["1. open"];
            var close = dataJSON[data.timeSeries][data.dateKeys[count]]["4. close"];

            // Date coordinate
            var x_coor = innerWidth * i;
            var direction = close - open;

            // Mapping price to pixels
            low = map(low,data.priceRange[0], data.priceRange[1],
                         innerHeight * 0.8, innerHeight * 0.1);
            high = map(high,data.priceRange[0], data.priceRange[1],
                         innerHeight * 0.8, innerHeight * 0.1);
            open = map(open,data.priceRange[0], data.priceRange[1],
                         innerHeight * 0.8, innerHeight * 0.1);
            close = map(close,data.priceRange[0], data.priceRange[1],
                         innerHeight * 0.8, innerHeight * 0.1);

            // Drawing high/low vertical line
            stroke(130);
            line(floor(x_coor), low, floor(x_coor), high);

            // Drawing open/close vertical line
            if (direction > 0) {
                // Vertical candle open and close line
                stroke("#2dc40b");
                line(floor(x_coor), open,
                     floor(x_coor), close);

                // Horizonatal candle open and close lines
                line(floor(x_coor + (innerWidth * 0.02)), close,
                     floor(x_coor), close);
                line(floor(x_coor), open,
                     floor(x_coor - (innerWidth * 0.02)), open);
            }
            else {
                // Vertical candle open and close line
                stroke("#890e05");
                line(floor(x_coor), open,
                     floor(x_coor), close);

                // Horizonatal candle open and close lines
                line(floor(x_coor - (innerWidth * 0.024)), open,
                     floor(x_coor), open);
                line(floor(x_coor), close,
                     floor(x_coor + (innerWidth * 0.024)), close);
            }
            count--;
        }
    }
}
