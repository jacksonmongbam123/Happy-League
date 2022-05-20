const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
require("./db/conn");
const Register = require("./models/registers");
const async = require('hbs/lib/async');
const { urlencoded } = require('express');
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(urlencoded({extended:false}));
app.use(express.static(static_path));


app.get("", (req, res) =>  {
    res.render('index')
})

app.get("/events", (req, res) =>  {
    res.render('events')
})

app.get("/schedule", (req, res) =>  {
    res.render("Welcome to SChedule Page")
})

app.get("/gallery", (req, res) =>  {
    res.render("Welcome to Gallery Page")
})

app.get("/video", (req, res) =>  {
    res.render("Welcome to Video Page")
})

app.get("/blog", (req, res) =>  {
    res.render("Welcome to News Page")
})

app.get("/contact", (req, res) =>  {
    res.render("Welcome to Contact Page")
})

app.get("/register", (req, res) =>  {
    res.render('register')
})

app.post("/register", async (req, res) =>  {
    try {
        const registerUser = new Register({
            squadname : req.body.squadname,
            squadleader : req.body.squadleader,
            playerone : req.body.playerone,
            oneid : req.body.oneid,
            playertwo : req.body.playertwo,
            twoid : req.body.twoid,
            playerthree : req.body.playerthree,
            threeid : req.body.threeid,
            playerfour : req.body.playerfour,
            fourid : req.body.fourid,
            playerfive : req.body.playerfive,
            fiveid : req.body.fiveid,
            playersix : req.body.playersix,
            sixid : req.body.sixid,
            email : req.body.email,
            phone : req.body.phone,
        })
        const registered = await registerUser.save();
        res.status(201).render('index')
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get("/about", (req, res) =>  {
    res.render("Welcome to About Page")
})

app.get("*", (req, res) =>  {
    res.render('404error')
})

app.listen(port , ()    =>  {
    console.log(`Listening to port at ${port}`)
})