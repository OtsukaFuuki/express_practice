import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// app.get() / app.post()　エンドポイントを定義する
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// listen() サーバーを起動する
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
