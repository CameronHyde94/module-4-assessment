const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createFortune, getCustomFortune, deleteFortune } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/customFortune", createFortune);

app.get("/api/getCustomFortune", getCustomFortune);

app.delete("/api/deleteFortune", deleteFortune);


app.listen(4000, () => console.log("Server running on 4000"));
