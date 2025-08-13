import Express from "express";
import router from "./routes/api";
import bodyParser from "body-parser";
import db from "./utils/database";


async function init() {
  try {
    await db();
    const app = Express();
    const PORT = process.env.PORT || 3000;
    const dbMessage = await db();
    console.log(dbMessage);
    app.use(bodyParser.json());
    app.use("/", router);
    app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit if database connection fails
  }
}

init().catch((err) => {
  console.error("Failed to initialize application:", err);
});




