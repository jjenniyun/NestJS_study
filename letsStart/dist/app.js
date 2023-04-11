"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get("/test", function (req, res) {
    console.log(req);
    res.send({ name: "hwang min hyun", age: 29, friends: ["ss", "yy", "us"] });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map