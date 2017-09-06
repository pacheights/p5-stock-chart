function Graph(data) {
    this.textSize = innerHeight / 48;
    this.textColor = 230;
    this.font = "verdana";
    this.grid;
    this.labels;

    this.display = function() {
        // Text Parameters
        textFont(this.font);
        textSize(this.textSize);

        // Display on startup
        if (data === undefined) {
            this.grid();
        }
        // Display after user selects a ticker
        else {
            this.grid();
            this.labels();
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
            text(data.dates[count], floor(innerWidth * i),
                 floor(innerHeight * 0.93));
            count -= 2;
        }

        // Y-axis text
        for (var i = 0.208; i < 0.8; i += 0.1) {
            text("yes", floor(innerWidth * 0.91),
            floor(innerHeight * i));
        }
    }
}
