import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {Lover} from './lover.mjs';


const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use(cors()); // Enable CORS for all routes

app.get('/people', (req, res) => {
    //res.status(201).Lover.getAllLovers();
    //return(Lover.getAllLovers());
    res.json(Lover.getAllLovers());
    
});

app.get('/people/:name', (req, res) => {
    let lover = Lover.findByName(req.params.name);
    const depth = req.query.depth ? parseInt(req.query.depth) : null;
    res.json(Node.getNodeIds(depth));
    
});

app.post('/people/:name', (req, res) => {
    let lover = Lover.create(req.params.name);

    if (!lover) {
        res.status(400).send("Bad request");
        return;
    }
   
    
    res.status(201).json(lover.json());
});

app.put('/people/:name', (req, res) => {
    
});

app.delete('/people/:name', (req, res) => {
 

})

app.listen(port, () => {
    console.log('Running...');
  
})

