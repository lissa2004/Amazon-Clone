const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OmD6lDqA54xyzpo38qaWofHifHX4TpPJo4WpLUKGcyzKHjwlXU8IjsAgbDLXh7Zilcfd5nwTWZd02lFMkPDO4c900i3MuVlkt")

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json())

// App Routes
app.get("/",(req,res) => res.status(200).send("Hello World!"));

app.post("/payment/create", async(req,res) => {
    const total = req.query.total;

    console.log("payment request recieved", total)

    const paymentIntent = await stripe.paymentIntents.create({amount: total,
      currency: "usd",
    });
    res.status(201).sends({clientSecret: paymentIntent.client_secret})
});
// Listen command
exports.api = functions.https.onRequest(app);