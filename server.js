const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.get("/api/quote", async (req, res) => {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await response.json();

    res.json({
      quote: data.quote,
      author: data.author,
    });
  } catch (error) {
    res.status(500).json({
      message: "Could not get a quote.",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});