import employeesRouter from "#api/employees";
import express from "express";

const app = express();
export default app;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});
app.route("/").get((req, res) => {
  res.send("Hello employees!");
});
app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  res.status(500).send("Sorry, Something went wrong :(");
});
