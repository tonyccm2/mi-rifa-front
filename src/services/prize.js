import axios from 'axios'
import { useUsuario } from '../hooks/useUsuario'

export const GetAll = async () => {
  const { full_path: fullPath } = useUsuario() || '192.168.1.1:3000'
  const { data } = await axios.get(`http://${fullPath}/prize`)

  return data
}

export const Create = async body => {
  const { full_path: fullPath } = useUsuario()
  const { data } = await axios.post(`http://${fullPath}/prize`, body)

  return data
}

export const GetById = async id => {
  const { full_path: fullPath } = useUsuario()
  const { data } = await axios.get(`http://${fullPath}/prize/${id}`)

  return data
}

export const Update = async (id, body) => {
  const { full_path: fullPath } = useUsuario()
  const { data } = await axios.put(
    `http://${fullPath}/prize/${id}`,
    body
  )

  return data
}

export const DeleteElement = async id => {
  const { full_path: fullPath } = useUsuario()
  const { data } = await axios.delete(
    `http://${fullPath}/prize/${id}`
  )

  return data
}
