const express = require('express');

const server = express();

server.use(express.json());

let id = 0;
const notas = [];

server.get('/', (req,res)=>{
    return res.json({
        result: 'Desafio Bloco de notas back-end por Rodrigo Lopes.'
    })
})

server.get('/notes',(req, res) =>{
    return res.json({notas});
});

server.post('/postnote',(req, res)=>{
    const {titulo, date, hour, text} = req.body;

    const nota = {
        id,
        titulo,
        date,
        hour,
        text
    };

    id ++;

    notas.push(nota);

    return res.json(nota);
});

server.put('/noteedit/:id', (req, res)=>{
    const {titulo, date, hour, text} = req.body;
    const {id} = req.params;

    const nota = {
        titulo,
        date,
        hour,
        text
    };

    notas[id] = nota;

    return res.json({
        result: 'Dados atualizados com sucesso.',
        nota: nota
    });
});

server.get('/notes/:id',(req,res)=>{
    const {id} = req.params;

    const note = notas.filter((note) => note.id == id);

    return res.json({
        result: 'usuario encontrado',
        nota: notas[id]
    });
});

server.delete('/notes/:id', (req,res)=>{
    const {id} = req.params;

    const note = notas.splice(note.id, 1);
});

server.listen(3000);