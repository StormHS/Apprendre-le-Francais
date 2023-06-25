import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getTranslations } from '../apis/translations'

export function useTranslations() {
  const query = useQuery(['translations'], getTranslations)
  return {
    ...query,
    // Extra queries go here e.g. addTranslation: useAddTranslation()
  }
}

// the t before the data and variables is saying whatever is put in to the function will be worked so you dont have to have one for delete and one for edd etc.
export function useTranslationsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['translations'] })
    },
  })

  return mutation
}

// the below is a breakdown of what each hook funciton would be like if you hadnt done the above which takes in any variable.
/// const useDeleteMutation = useMutation(deleteTranslationApi, {
// onSuccess: () => {
// queryClient.invalidateQueries({ queryKey: ['translations'] })
// },
// })

/// const useAddMutation = useMutation(addTranlation, {
// onSuccess: () => {
// queryClient.invalidateQueries({ queryKey: ['translations'] })
// },
// })
