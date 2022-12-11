import { useCreatePrize } from '../../../../hooks/usePrize'
import PrizeForm from './PrizeForm'

const CreatePrize = () => {
  const { mutate, isLoading } = useCreatePrize()

  return (
    <>
      <PrizeForm edit={false} mutate={mutate} data={''} isLoading={isLoading} />
    </>
  )
}

export default CreatePrize
