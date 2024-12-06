const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const DB_URI = 'mongodb://localhost:27017/Proyecto';

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("DB CONECTADA"))
    .catch(err => console.log(err));

//Schema para usuarios
const usuariosSchema = mongoose.Schema({
    nombre: String,
    apellidos: String,
    telefono: Number,
    direccion: String,
    correo: String,
    contraseña: String,
    id: Number,
    estado: { type: String, default: 'activo' }
    
}, {versionKey: false});

const Usuario = mongoose.model('usuarios', usuariosSchema);

// Crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).send(usuario);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.send(usuarios);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener un usuario por su ID
app.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).send();
        }
        res.send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un usuario por su ID
app.patch('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuario) {
            return res.status(404).send();
        }
        res.send(usuario);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un usuario por su ID
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).send();
        }
        res.send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
});



//Schema para vendedores
const vendedoresSchema = mongoose.Schema({
    nombre: String,
    apellidos: String,
    telefono: Number,
    direccion: String,
    correo: String,
    contraseña: String,
    id: Number,
    estado: { type: String, default: 'inactivo' }
}, { versionKey: false });

const Vendedor = mongoose.model('vendedores', vendedoresSchema);

// Crear un nuevo vendedor
app.post('/vendedores', async (req, res) => {
    try {
        const vendedor = new Vendedor(req.body);
        await vendedor.save();
        res.status(201).send(vendedor);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los vendedores
app.get('/vendedores', async (req, res) => {
    try {
        const vendedores = await Vendedor.find();
        res.send(vendedores);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener un vendedor por su ID
app.get('/vendedores/:id', async (req, res) => {
    try {
        const vendedor = await Vendedor.findById(req.params.id);
        if (!vendedor) {
            return res.status(404).send();
        }
        res.send(vendedor);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un vendedor por su ID
app.patch('/vendedores/:id', async (req, res) => {
    try {
        const vendedor = await Vendedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!vendedor) {
            return res.status(404).send();
        }
        res.send(vendedor);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un vendedor por su ID
app.delete('/vendedores/:id', async (req, res) => {
    try {
        const vendedor = await Vendedor.findByIdAndDelete(req.params.id);
        if (!vendedor) {
            return res.status(404).send();
        }
        res.send(vendedor);
    } catch (error) {
        res.status(500).send(error);
    }
});
