let stock = {
    apiKey: "8a184a62cd81489dab7c875a7f9518f4",
    fetchStock: function (symbol) {
        fetch(
            "https://api.twelvedata.com/quote?symbol=" + 
            symbol + "&apikey=" +
            this.apiKey
        )
        //fetch("my_data.json")
        .then((response) => {
            if(!response.ok) {
                alert("No exchange rate found.");
                throw new Error("No exchange rate found.");
            }
            
             return response.json();
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
        if (event.key === "Enter") {
            stock.search();
        }
    });

stock.fetchStock("AAPL")



const btn2 = document.querySelector('#btn2');
// alert(btn2);
btn2.addEventListener('click', () => {
    const notes = document.querySelector('#notes2');
    // alert(notes.style.display);
    if (notes.style.display == 'none') {
        notes.style.display = 'block';
    }else {
        notes.style.display = 'none';
    }
} )

// Secondary text colour change if else statement '-' = red '!-' = green

// const data2 = document.querySelector('.data2');
// function textColour() {
//     if (data2.value = '-') {
//         data2.style.textColour = 'Red'
//     }else{
//         data2.style.textColour = 'Green'
//     }
// }