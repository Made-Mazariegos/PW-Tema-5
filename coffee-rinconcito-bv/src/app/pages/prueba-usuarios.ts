import { UsuariosService } from '../services/usuarios.service';

const usuariosService = new UsuariosService();

async function probarUsuarios() {
  const usuarios = await usuariosService.obtenerUsuarios();

  console.log('Usuarios:', usuarios);
}

probarUsuarios();