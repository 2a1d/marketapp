let stock = {
    apiKey: "8a184a62cd81489dab7c875a7f9518f4",
    fetchStock: function (symbol) {
        fetch(
            "https://api.twelvedata.com/quote?symbol=" +
            symbol +
            "&apikey=" +
            this.apiKey
        )
        .then((Response) => {
            if(!Response.ok) {
                alert("No exchange rate found.");
                throw new Error("No exchange rate found.");
            }
            return Response.json():
        })
        .then((data) => this.displayStock(data)):

    },
    displayStock: function (data) {
        const {symbol, name, currency, previous_close, change, percent_change} = data;
        document.querySelector(".symbol").innerHTML = symbol;
        document.querySelector(".name").innerHTML = name;
        document.querySelector(".currency").innerHTML = currency;
        document.querySelector(".close").innerHTML = previous_close;
        document.querySelector(".change").innerHTML = change;
        document.querySelector(".percentChange")
    }
}