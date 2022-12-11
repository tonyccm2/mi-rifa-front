import { useCreateRaffle } from '../../../../hooks/useRaffle'
import RaffleForm from './RaffleForm'

const CreateRaffle = () => {
  const { mutate, isLoading } = useCreateRaffle()

  return (
    <>
      <RaffleForm edit={false} mutate={mutate} data={''} isLoading={isLoading} />
    </>
  )
}

export default CreateRaffle
