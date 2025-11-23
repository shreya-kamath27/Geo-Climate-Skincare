const express = require("express")
const app = express();
const PORT = 3000;

// Single routing 
const router = express.Router();

router.get("/", (req, res) => {
    console.log("Router working")
    res.send("Single Router Working.")
})

app.use(router);
app.listen(PORT, (err) => {
    console.error("started server")
})


app.use(router0)
app.use(router1)