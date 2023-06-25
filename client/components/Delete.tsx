import { deleteTranslationApi } from '../apis/translations'
import { useTranslationsMutation } from '../hooks/useTranslations'

interface Props {
  id: number
}

export default function DeleteTranslation(props: Props) {
  const mutation = useTranslationsMutation(deleteTranslationApi)

  const handleDelete = () => {
    const deleteId = props.id
    mutation.mutate(deleteId)
  }
  return (
    <button className="delete-button" onClick={handleDelete}>
      supprimer
    </button>
  )
}
