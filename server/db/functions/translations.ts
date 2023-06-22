import connection from '../connection'
import { Translation, TranslationData } from '../../../models/translation'

export function getAllTranslations(db = connection): Promise<Translation[]> {
  return db('translation').select()
}

// this adds to our database using this object
export async function addTranslations(
  newTranslationInput: TranslationData,
  db = connection
): Promise<void> {
  await db('translation').insert(newTranslationInput)
}
