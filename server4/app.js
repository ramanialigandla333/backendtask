// app.js (ES Modules)
import express from "express";

// 1) Initialize app
const app = express();

// 2) PORT setup (ENV with fallback)
const PORT = process.env.PORT || 5001;

// 3) Middleware to parse JSON bodies from the client
//    This is REQUIRED for POST/PUT/PATCH with JSON payloads
app.use(express.json());
// 4) Simple GET to verify server is running
// 5) Example GET route (visible in browser)
app.get("/", (req, res) => {
  res.status(200).send("helo server");
});

app.get("/global", (req,res) => {
    res.status(200).send("hello global server")
});

// 6) POST API: /register
//    - Reads JSON from req.body (requires express.json())
//    - Logs it to terminal
//    - Responds with created data
app.post("/register", (req, res) => {
  const userData = req.body; 
  console.log("user register successfully", userData);

});

app.post("/students/:roll", (req, res) => {
  const userData = req.body; 
  console.log("send roll number", userData);

});

app.put("/update", (req, res) => {
  const userData = req.body; 
  console.log("user update successfully", userData);

});

app.delete("/register", (req, res) => {
  const userData = req.body; 
  console.log("user deleted successfully", userData);

});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});