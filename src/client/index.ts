// src/client/index.ts
import express = require("express");
import {getPosts} from "./getPosts";

const app = express();

app.get("/", ({}, res) => {
    res.json({ health: "ok" });
});

app.get(
    "/get-posts",
    async (request, response) => {
        try {
            const result = await getPosts()
            response.json({ result });
        } catch (error) {
            response.status(500).json({ error });
        }
    }
    );

app.listen(9999, () =>
    console.log(`Express server listening on port ${9999}`)
);
