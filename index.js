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
// rectangle endpoint
app.get("/math/rectangle/:width/:height", (req, res) => {
    const widthAsString = req.params.width;
    const heightAsString = req.params.height;
    const width = parseFloat(widthAsString);
    const height = parseFloat(heightAsString);
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0)
        return res.status(400).json({
            error: "Niepoprawne wartości boków prostokąta. Oczekiwane są liczby dodatnie.",
            input: widthAsString,
            input: heightAsString,
        });

    const area = width * height;
    const parimeter = 2 * (width + height);

    const result = {
        area: area.toFixed(2),
        parimeter: parimeter.toFixed(2),
    };

    res.json(result);
});

//TODO3

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
