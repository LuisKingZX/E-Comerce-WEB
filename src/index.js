const { renderFile } = require('ejs');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./BasedeDatos');

const multer = require('multer');
const router = express.Router();

// Configura multer para manejar la carga de archivos
const upload = multer({ dest: 'uploads/' });

// Ruta para manejar la carga de archivos
router.post('/subir-producto', upload.single('Media'), (req, res) => {
// El archivo se ha subido correctamente
    const archivo = req.file;

// Guardar el archivo en la base de datos
    console.log('Archivo subido:', archivo);
    res.send('Archivo subido correctamente');
});
// Ruta para cerrar sesión
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error al cerrar sesión');
}
    res.status(200).send('Sesión cerrada');
});
});

module.exports = router;


app.listen(3000, () => {
    console.log('Se conecto al puerto');
});

app.use(express.static(path.join(__dirname, 'public')));

//importar rutas

console.log(__dirname);
app.get('/AdminMain', (req, res) => {
    res.render('AdminMain.html');
})
app.get('/AdminReportes', (req, res) => {
    res.render('AdminReportes.html');
})
app.get('/Carrito', (req, res) => {
    res.render('Carrito.html');
})
app.get('/LoginRegister', (req, res) => {
    res.render('LoginRegister.html');
})
app.get('/FinanzasVendedor', (req, res) => {
    res.render('FinanzasVendedor.html');
})

app.get('/Principal', (req, res) => {
    res.render('Index.html');
});

app.get('/Login', (req, res) => {
    res.render('LoginSolo.html');
});

app.get('/AceptaroRechazar', (req, res) => {
    res.render('AceptaroRechazar.html');
})
app.get('/ATSLanding', (req, res) => {
    res.render('ATSLandingPage.html');
})
app.get('/ConfirmaCompra', (req, res) => {
    res.render('ConfirmaDeCompra.html');
})
app.get('/ListaPostulantes', (req, res) => {
    res.render('ListaPostulantesaVendedor.html');
})
app.get('/AgregarProducto', (req, res) => {
    res.render('PagAgregarProducto.html');
})
app.get('/InspeccionProducto', (req, res) => {
    res.render('PagDInspeccionDProducto.html');
})
app.get('/PerfilComprador', (req, res) => {
    res.render('PerfilComprador.html');
})
app.get('/PerfilVendedor', (req, res) => {
    res.render('PerfilVendedor.html');
})
app.get('/RegistroPago', (req, res) => {
    res.render('RegistroPago.html');
})

//Post
app.post('/addCategory',(req,res)=>{
    console.log(req.body.colorName);
    let nombre="Adrian"

    if(req.body.colorName==nombre){
        res.redirect('/Index');
    }else{
        console.log("No es igual")
        res.redirect('/Login')
    }
});
