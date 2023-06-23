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

// Query functions go here e.g. useAddTranslation
/* function useAddTranslation() {
  return useTranslationsMutation(addTranslation)
} */
