import request from 'superagent'
import { Translation } from '../../models/translation'

const rootUrl = '/api/v1'

export function getTranslations(): Promise<Translation[]> {
  return request.get(rootUrl + '/translations').then((res) => {
    return res.body
  })
}
