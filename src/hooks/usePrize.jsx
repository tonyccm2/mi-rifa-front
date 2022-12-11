import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
  GetAll,
  GetById,
  Create,
  Update,
  DeleteElement
} from '../services/prize'

const key = 'prize'

export const useGetAllPrize = (enabled = true) =>
  useQuery(key, GetAll, {
    enabled
  })

export const useGetByIdPrize = (idPrize, enabled = true) =>
  useQuery(key, GetById(idPrize), {
    enabled
  })

export const useCreatePrize = () => {
  const queryClient = useQueryClient()

  return useMutation(Create, {
    onSuccess: () => queryClient.invalidateQueries(key)
  })
}

export const useUpdatePrize = idPrize => {
  const queryClient = useQueryClient()

  return useMutation(body => Update(idPrize, body), {
    onSuccess: () => queryClient.invalidateQueries(key)
  })
}

export const useDeletePrize = idPrize => {
  const queryClient = useQueryClient()

  return useMutation(() => DeleteElement(idPrize), {
    onSuccess: () => queryClient.invalidateQueries(key)
  })
}
