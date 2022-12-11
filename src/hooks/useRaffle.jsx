import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
  GetAll,
  GetById,
  Create,
  Update,
  DeleteElement
} from '../services/raffle'

const key = 'raffle'

export const useGetAllRaffle = (enabled = true) =>
  useQuery(key, GetAll, {
    enabled
  })

export const useGetByIdRaffle = (idRaffle, enabled = true) =>
  useQuery(key, GetById(idRaffle), {
    enabled
  })

export const useCreateRaffle = () => {
  const queryClient = useQueryClient()

  return useMutation(Create, {
    onSuccess: () => queryClient.invalidateQueries(key)
  })
}

export const useUpdateRaffle = idRaffle => {
  const queryClient = useQueryClient()

  return useMutation(body => Update(idRaffle, body), {
    onSuccess: () => queryClient.invalidateQueries(key)
  })
}

export const useDeleteRaffle = idRaffle => {
  const queryClient = useQueryClient()

  return useMutation(() => DeleteElement(idRaffle), {
    onSuccess: () => queryClient.invalidateQueries(key)
  })
}
