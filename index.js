const express = require("express");
const app = express();

app.use(express.json());

const usuarios = [
  {
    id: 1,
    nombre: "Alexander",
    apellido: "Mendoza",
    cedula: "1069721279",
    direccion: "Calle 12 No. 1-32",
    telefono: "8721122",
    email: "alexamp1987@gmail.com",
    usuario: "alexandermp",
    contrasena: "123456",
    contrasena2: "12346",
  },
  {
    id: 2,
    nombre: "Pedro",
    apellido: "Pardo",
    cedula: "1069721278",
    direccion: "Calle 12 No. 1-32",
    telefono: "8721122",
    email: "alexamp1987@gmail.com",
    usuario: "pedro",
    contrasena: "923458",
    contrasena2: "12346",
  },
  {
    id: 3,
    nombre: "Pablo",
    apellido: "Diaz",
    cedula: "1069721276",
    direccion: "Calle 12 No. 1-32",
    telefono: "8721122",
    email: "alexamp1987@gmail.com",
    usuario: "pablo",
    contrasena: "1256",
    contrasena2: "12346",
  },
  {
    id: 4,
    nombre: "Carlos",
    apellido: "Perez",
    cedula: "1069721274",
    direccion: "Calle 12 No. 1-32",
    telefono: "8721122",
    email: "alexamp1987@gmail.com",
    usuario: "carlos",
    contrasena: "23456",
    contrasena2: "12346",
  },
  {
    id: 5,
    nombre: "Jaime",
    apellido: "Aguilera",
    cedula: "1069721272",
    direccion: "Calle 12 No. 1-32",
    telefono: "8721122",
    email: "alexamp1987@gmail.com",
    usuario: "jaime",
    contrasena: "12346",
    contrasena2: "12346",
  },
];

app.get("/", (req, res) => {
  res.send("Prueba de Node JS API");
});

app.get("/api/usuarios", (req, res) => {
  res.send(usuarios);
});

app.get("/api/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((c) => c.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).send("Usuario no encontrado");
  res.send(usuario);
});

app.post("/api/usuarios", (req, res) => {
  const usuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    cedula: req.body.cedula,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    email: req.body.email,
    usuario: req.body.usuario,
    contrasena: req.body.contrasena,
    contrasena2: req.body.contrasena2,
  };

  if (usuario.contrasena === usuario.contrasena2) {
    usuarios.push(usuario);
    res.send(usuario);
  } else {
    return res.status(404).send("Las contraseñas no coinciden.");
  }
});

// app.put("/api/usuarios/:id", (req, res) => {
//   const usuario = usuarios.find((c) => c.id === parseInt(req.params.id));
//   return usuario
//     .update(
//       {
//         nombre: req.body.nombre,
//         apellido: req.body.apellido,
//         cedula: req.body.cedula,
//         direccion: req.body.direccion,
//         telefono: req.body.telefono,
//         email: req.body.email,
//         usuario: req.body.usuario,
//         contrasena: req.body.contrasena,
//       },
//       {
//         where: {
//           id: usuarios.length + 1 /*like this*/,
//         },
//       }
//     )
//     .then(function (usuario) {
//       if (usuario) {
//         res.send(usuario);
//       } else {
//         res.status(400).send("Error");
//       }
//     });
// });

app.delete("/api/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((c) => c.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).send("Usuario no encontrado");

  const index = usuarios.indexOf(usuario);
  usuarios.splice(index, 1);
  res.send(usuario);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
