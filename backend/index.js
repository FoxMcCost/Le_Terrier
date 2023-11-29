const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json())
app.use(cors());
const nodemailer = require("nodemailer");
const port = 5000;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Guillaume:Gu1ll4um3@leterrier.utshq1n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch {
    console.log("Connexion echouée ! ");
    }
}
run().catch(console.dir);

app.get('/', (req, res)=>{
    res.send('Backend OK')
}) 


app.get("/get-utilisateurs", async (req, resp) => {
    let collection = await client.db("database_terrier").collection("utilisateurs");
    let results = await collection.find({})
      .toArray();
    resp.send(results).status(200);
});
  

app.post("/nouvelle_question", async (req) => {
    try {
        client.db("database_terrier").collection("FAQ").insertOne(req.body);
    } catch (e) {
        console.log("Fail ajout entrée FAQ")
    }
});


app.post('/mail', (req, res)=>{

    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'fox.cost@gmail.com',
            pass: 'ngjq rxbn qawg tuva'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'fox.cost@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.name}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    }) 
})

app.listen(port, ()=>{
    console.log(port)
})


