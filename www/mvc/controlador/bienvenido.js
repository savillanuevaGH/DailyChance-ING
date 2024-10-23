const usuarios = [
  { nombre: "admin", contraseña: "admin123" },
  { nombre: "usuario1", contraseña: "usuario123" },
  { nombre: "usuario2", contraseña: "usuario456" },
];

function toggleForms() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
}

function logIn() {
    const userEmail = document.querySelector('#user-email').value;
    const userPassword = document.querySelector('#user-psswrd').value;

    login(userEmail, userPassword);
    console.log('pedilo');
    console.log(userEmail);
    console.log(userPassword);
}

function login(usuario, contraseña) {
  const usuarios = [
    { nombre: "admin", contraseña: "admin123" },
    { nombre: "usuario1", contraseña: "usuario123" },
    { nombre: "usuario2", contraseña: "usuario456" },
  ];

  const usuarioEncontrado = usuarios.find(
    (u) => u.nombre === usuario && u.contraseña === contraseña
  );

  if (usuarioEncontrado) {
    window.location.href = "./index.html"
    return { mensaje: "Login exitoso", usuario: usuarioEncontrado.nombre };
  } else {
    return { mensaje: "Usuario o contraseña incorrectos", usuario: null };
  }
}

function register(correo, contraseña, confirmarContraseña) {
  const usuarios = [
    {
      nombre: "admin",
      apellido: "admin",
      correo: "admin@example.com",
      contraseña: "admin123",
    },
    {
      nombre: "usuario1",
      apellido: "usuario1",
      correo: "usuario1@example.com",
      contraseña: "usuario123",
    },
    {
      nombre: "usuario2",
      apellido: "usuario2",
      correo: "usuario2@example.com",
      contraseña: "usuario456",
    },
  ];

  // Validar que los campos no estén vacíos
  if (!nombre || !apellido || !correo || !contraseña || !confirmarContraseña) {
    return { mensaje: "Por favor, complete todos los campos" };
  }

  // Validar que la contraseña y la confirmación de contraseña sean iguales
  if (contraseña !== confirmarContraseña) {
    return {
      mensaje: "La contraseña y la confirmación de contraseña no coinciden",
    };
  }

  // Validar que el correo electrónico sea válido
  const correoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    correo
  );
  if (!correoValido) {
    return { mensaje: "El correo electrónico no es válido" };
  }

  // Buscar si el correo electrónico ya existe en la base de datos
  const usuarioExistente = usuarios.find((u) => u.correo === correo);
  if (usuarioExistente) {
    return { mensaje: "El correo electrónico ya existe en la base de datos" };
  }

  // Crear un nuevo usuario
  const nuevoUsuario = {
    nombre,
    apellido,
    correo,
    contraseña,
  };

  // Agregar el nuevo usuario a la base de datos
  usuarios.push(nuevoUsuario);

  return { mensaje: "Registro exitoso", usuario: nuevoUsuario };
}