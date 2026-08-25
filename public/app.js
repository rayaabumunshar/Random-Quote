const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("new-quote-btn");
const messageElement = document.getElementById("message");

async function loadQuote() {
    messageElement.textContent = "Loading...";
    button.disabled = true;

    try {
        const response = await fetch("/api/quote");

        if (!response.ok) {
            throw new Error("Failed to load quote");
        }

        const data = await response.json();

        quoteElement.textContent = `"${data.quote}"`;
        authorElement.textContent = `— ${data.author}`;
        messageElement.textContent = "";
    } catch (error) {
        messageElement.textContent = "Could not load a quote. Please try again.";
    } finally {
        button.disabled = false;
    }
}

button.addEventListener("click", loadQuote);

loadQuote();