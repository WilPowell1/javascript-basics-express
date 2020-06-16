const express = require('express');

const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');

const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');
const { multiply } = require('./lib/numbers');
const { divide } = require('./lib/numbers');
const { remainder } = require('./lib/numbers');

const app = express();

// strings//

app.get('/strings/hello/:string', (req, res) => {
    res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
    res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
    res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
    if (req.query.length === undefined) {
        res.json({ result: firstCharacter(req.params.string) });
    } else {
        res.json({
            result: firstCharacters(req.params.string, parseInt(req.query.length, 10)),
        });
    }
});

// Numbers//

app.get('/numbers/add/:a/and/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    if (a || b === !NaN) {
        res.status(200).json({ result: add(a, b) });
    } else {
        res.status(400).json({ error: 'Parameters must be valid numbers.' });
    }
});

app.get('/numbers/subtract/:b/from/:a', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    if (a || b === !NaN) {
        res.status(200).json({ result: subtract(a, b) });
    } else {
        res.status(400).json({ error: 'Parameters must be valid numbers.' });
    }
});

app.post('/numbers/multiply', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    if (req.body.a || req.body.b === undefined) {
        res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    } else if (Number.isNaN(a) || Number.isNaN(b)) {
        res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    } else {
        res.status(200).json({ result: multiply(a, b) });
    }
});

app.post('/numbers/divide', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    if (req.body.a || req.body.b === undefined) {
        res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    } else if (Number.isNaN(a) || Number.isNaN(b)) {
        res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    } else {
        res.status(200).json({ result: divide(a, b) });
    }
});

module.exports = app;