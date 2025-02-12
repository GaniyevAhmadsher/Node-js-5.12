import express from "express";
import connectDB from "./config/db.js";
import ApiRoutes from "./routes/routes.js";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use("/api", ApiRoutes());
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Serverda kutilmagan xatolik yuz berdi.";
  console.error(`❌ Xatolik: ${message}`);
  res.status(status).json({ success: false, error: message });
});

const PORT = process.env.PORT || 8080;
const URL = process.env.DB_URL;

(async () => {
  try {
    await connectDB(URL);
    console.log(`DB Connected`);
    app.listen(PORT, () => console.log(`Server is running : ${PORT}`));
  } catch ({ message }) {
    console.error(message);
  }
})();
