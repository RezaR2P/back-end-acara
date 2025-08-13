import Express from "express";
import router from "./routes/api";
import bodyParser from "body-parser";

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", router);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});