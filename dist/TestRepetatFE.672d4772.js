// Functia asincrona
let url = "http://localhost:3000/quotes";
async function getQuotes() {
    try {
        let date_server = await fetch(url);
        let quotes = await date_server.json();
        for (let quote of quotes)createCard(quote);
    } catch (error) {
        console.error("Eroare:", error);
    }
}
let form = document.querySelector("#form");
let addButton = document.querySelector("#submit-btn");
let textarea = document.querySelector("#area-quote");
let container = document.querySelector("#quotes-container");
function createCard(quoteReceived) {
    let card = document.createElement("article");
    card.classList.add("quote");
    let title = document.createElement("p");
    title.textContent = `${quoteReceived.quote}`;
    let author = document.createElement("p");
    author.textContent = `${quoteReceived.author}`;
    card.insertAdjacentElement("beforeend", title);
    card.insertAdjacentElement("beforeend", author);
    container.appendChild(card);
}
getQuotes();
let authorInput = document.querySelector("#author");
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const newQuote = {
        quote: textarea.value,
        author: authorInput.value
    };
    try {
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newQuote)
        });
        textarea.value = "";
        authorInput.value = "";
        container.innerHTML = "";
        getQuotes();
    } catch (error) {
        console.error("Eroare la trimiterea citatului:", error);
    }
});

//# sourceMappingURL=TestRepetatFE.672d4772.js.map
