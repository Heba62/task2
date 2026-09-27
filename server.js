const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/api/expenses", (req, res) => {
  const expenses = [
    { id: 1, title: "Buying coffee", amount: 5 },
    { id: 2, title: "Internet bill", amount: 30 },
  ];
  res.json(expenses);
});

app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message:
      "Sorry, the link you are looking for is not available on this server.",
  });
});

app.listen(PORT, () => {
  console.log(
    `The server is now running successfully at the following link: http://localhost:${PORT}`,
  );
});
