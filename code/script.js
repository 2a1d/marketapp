let stock = {
    apiKey: "8a184a62cd81489dab7c875a7f9518f4",
    fetchStock: function (symbol) {
        fetch(
            "https://api.twelvedata.com/quote?symbol=" + 
            symbol + "&apikey=" +
            this.apiKey
        )
        .then((Response) => {
            if(!Response.ok) {
                alert("No exchange rate found.");
                throw new Error("No exchange rate found.");
            }
            return Response.json();
        })
        .then((data) => this.displayStock(data));
    },
    displayStock: function (data) {
        const {symbol} = data;
        const {name} = data;
        const {currency} = data;
        const {previous_close} = data;
        const {change} = data;
        const {percent_change} = data;
        document.querySelector(".symbol").innerText = symbol;
        document.querySelector(".name").innerText = name;
        document.querySelector(".currency").innerText = currency;
        document.querySelector(".close").innerText = "$" + previous_close;
        document.querySelector(".change").innerText = change;
        document.querySelector(".percentChange").innerText = percent_change + "%";
    },
    search: function () {
        this.fetchStock(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {stock.search();});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "13") {
            stock.search();
        }
    });

stock.fetchStock("AAPL")