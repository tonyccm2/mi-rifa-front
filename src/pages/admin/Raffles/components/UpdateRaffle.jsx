import RaffleForm from './RaffleForm'
import { useUpdateRaffle } from '../../../../hooks/useRaffle'

const UpdateRaffle = ({ data }) => {
  const { mutate } = useUpdateRaffle(data.id_raffle)

  return (
    <>
      <RaffleForm edit={true} data={data} mutate={mutate} />
    </>
  )
}

export default UpdateRaffle
