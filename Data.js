function Data(ticker) {
    var apiKey = "0XUMYW2DU811JGGC";
    this.apiCall = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+ticker+"&apikey="+apiKey;
    this.dates = [];
    this.parseData;

    this.parseData = function(dataJSON) {
        var months = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar",
            "04": "Apr",
            "05": "May",
            "06": "Jun",
            "07": "Jul",
            "08": "Aug",
            "09": "Sep",
            "10": "Oct",
            "11": "Nov",
            "12": "Dec"
        };

        var dateTemp = [];
        for (var i in dataJSON) {
            for (var j in dataJSON[i]) {
                dateTemp.push(j);
            }
        }

        for (var i = 5; i < dateTemp.length; i++) {
            this.dates.push(dateTemp[i]);
        }

        //2017-01-01
        for (var i = 0; i < this.dates.length; i++) {
            this.dates[i] = months[this.dates[i].substring(5,7)] + " "
                            + this.dates[i].substring(8,10);
        }
    }
}
