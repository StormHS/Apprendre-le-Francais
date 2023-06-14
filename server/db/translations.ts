import connection from './connection'
import { Translation } from '../../models/translation'

export function getAllTranslations(db = connection): Promise<Translation[]> {
  return db('translation').select()
}
