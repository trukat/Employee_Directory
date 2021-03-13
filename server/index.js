const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));