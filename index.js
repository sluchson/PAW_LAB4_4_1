"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
app.get("/math/circle/:r", (req, res) => {
    //TODO1
    const rAsString = req.params.r;
    const r = parseFloat(rAsString);

    if (isNaN(r) || r <= 0) {
        return res.status(400).json({
            error: "Niepoprawna wartość promienia. Oczekiwana jest liczba dodatnia.",
            input: rAsString,
        });
    }

    const area = Math.PI * r * r;
    const circumference = 2 * Math.PI * r;

    const result = {
        area: area.toFixed(2),
        circumference: circumference.toFixed(2),
    };

    res.json(result);
});

//TODO2

//TODO3

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
