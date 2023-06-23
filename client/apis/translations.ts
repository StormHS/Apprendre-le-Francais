import request from 'superagent'
import { Translation, TranslationData } from '../../models/translation'

const rootUrl = '/api/v1'

// get /api/v1/translations
export function getTranslations(): Promise<Translation[]> {
  return request.get(rootUrl + '/translations').then((res) => {
    return res.body
  })
}

// // GET /api/v1/translations/:translationId
// export async function getTranslationById(
//   TranslationId: string
// ): Promise<Translation> {
//   await sleep(1000)
//   const response = await request.get(`/api/v1/fruit/${TranslationId}`)
//   return response.body
// }

// POST /api/v1/translation
export async function addTranslation(
  newTranslation: TranslationData
): Promise<void> {
  await request.post('/api/v1/translations').send(newTranslation)
}
