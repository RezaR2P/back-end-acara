import Express from "express";
import router from "./routes/api";

const app = Express();
const PORT = process.env.PORT || 3000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});