import PrizeForm from './PrizeForm'
import { useUpdatePrize } from '../../../../hooks/usePrize'

const UpdatePrize = ({ data }) => {
  const { mutate } = useUpdatePrize(data.id_prize)

  return (
    <>
      <PrizeForm edit={true} data={data} mutate={mutate} />
    </>
  )
}

export default UpdatePrize
