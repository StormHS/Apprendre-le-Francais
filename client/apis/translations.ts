import request from 'superagent'
import { Translation, TranslationData } from '../../models/translation'

const rootUrl = '/api/v1'

// get /api/v1/translations
export function getTranslations(): Promise<Translation[]> {
  return request.get(rootUrl + '/translations').then((res) => {
    return res.body
  })
}

// POST /api/v1/translation
export async function addTranslation(
  newTranslation: TranslationData
): Promise<void> {
  await request.post('/api/v1/translations').send(newTranslation)
}

//DELETE /api/v1/translaion
export async function deleteTranslationApi(id: number) {
  await request.delete(`/api/v1/translations/${id}`)
}
