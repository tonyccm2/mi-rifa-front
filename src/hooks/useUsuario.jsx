export const useUsuario = () => {
  const usuario = localStorage.getItem('Usuario')
  const userComplete = JSON.parse(usuario) || { full_path: '192.168.1.1:5000', token: '' }
  return userComplete
}
