import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {Lover} from './lover.mjs';
import {Match} from './match.mjs';


const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use(cors()); // Enable CORS for all routes

app.get('/people', (req, res) => {
    //res.status(201).Lover.getAllLovers();
    //return(Lover.getAllLovers());
    res.json(Lover.getAllLovers());
    
});

app.get('/match', (req, res) => {
    //res.status(201).Lover.getAllLovers();
    //return(Lover.getAllLovers());
    res.json(Match.getAllMatches());
    
});

app.get('/people/:name', (req, res) => {
    let lover = Lover.findByName(req.params.name);
    if (!lover) {
        res.status(400).send("Bad request");
        return;
    }
    res.json(Lover.findByName(name));
    
});

app.post('/people/:name', (req, res) => {
    let lover = Lover.create(req.params.name);

    if (!lover) {
        res.status(400).send("Bad request");
        return;
    }
    res.status(201).json(lover.json());
});

app.post('/match', (req, res) => {
    let match = Match.create(req.body.name1, req.body.name2, req.body.score);

    if (!match) {
        res.status(400).send("Bad request");
        return;
    }
    res.status(201).json(match.json());
});

app.put('/people/:name', (req, res) => {
    //console.log(req.body);
    if(req.body.age){
        Lover.findByName(req.params.name).setAge(req.body.age);
    }
    if(req.body.weakness){
        Lover.findByName(req.params.name).setWeakness(req.body.weakness);
    }
    if(req.body.number){
        Lover.findByName(req.params.name).setNumber(req.body.number);
    }
    res.status(201).json(Lover.findByName(req.params.name).json());
});

app.put('/match/:name1', (req, res) => {
    //console.log(req.body);
    if(req.body.name2 && req.body.score){
        Match.findByName(req.params.name1).setName2(req.body.name2);
        Match.findByName(req.params.name1).setScore(req.body.score);
    }
    res.status(201).json(Match.findByName(req.params.name1).json());
});

app.delete('/people/:name', (req, res) => {
    let lover = Lover.findByName(req.params.name);

    if (!lover) {
        res.status(400).send("Bad request");
        return;
    }
    Lover.deleteLover(req.params.name);
    res.json(true);
})

app.delete('/match/:name1', (req, res) => {
    Match.deleteMatch(req.params.name1);
    res.json(true);
})

app.listen(port, () => {
    console.log('Running...');
  
})

