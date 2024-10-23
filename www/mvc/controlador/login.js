function login(usuario, contraseña) {
    const usuarios = [
      { nombre: "admin", contraseña: "admin123" },
      { nombre: "usuario1", contraseña: "usuario123" },
      { nombre: "usuario2", contraseña: "usuario456" },
    ];
  
    const usuarioEncontrado = usuarios.find((u) => u.nombre === usuario && u.contraseña === contraseña);
  
    if (usuarioEncontrado) {
      return { mensaje: "Login exitoso", usuario: usuarioEncontrado.nombre };
    } else {
      return { mensaje: "Usuario o contraseña incorrectos", usuario: null };
    }
  }
  
  // Ejemplo de uso
  const resultado = login("admin", "admin123");
  console.log(resultado.mensaje); // "Login exitoso"
  console.log(resultado.usuario); // "admin"
  
  const resultado2 = login("usuario1", "usuario456");
  console.log(resultado2.mensaje); // "Usuario o contraseña incorrectos"
  console.log(resultado2.usuario); // null