import {MongoClient} from 'mongodb';

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://admin:anENONgJhmCALXGM@cluster0.mdisq.mongodb.net/bikeroutes?retryWrites=true&w=majority');
    const db = client.db();

    const bikeroutesCollection = db.collection('bikeroutes');
    
    const result = await bikeroutesCollection.insertOne({data});

    console.log(result);

    client.close();

    res.status(201).json({message: 'Bikeroute inserted !'});
  }
}

export default handler;
