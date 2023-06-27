import server from '../../server'
import { it, describe, expect, beforeEach, vi } from 'vitest'
import request from 'supertest'

import * as db from '../../db/functions/translations'

//mock means fake these functions so you don't actually delete them
vi.mock('../../db/functions/translations')

// this is referring to the routes URL that the delete request gets sent to
describe('DELETE /api/v1.translations/:id', () => {
  it('should delete a translation', async () => {
    //below is specific to what we are mocking - here it is the deleteTranslation function
    vi.mocked(db.deleteTranslation).mockResolvedValue()
    const response = await request(server).delete('/api/v1/translations/1')
    expect(response.status).toBe(204)
  })
  it('should expect a 500 status error', async () => {
    //below is specific to what we are mocking - here it is the deleteTranslation function
    vi.mocked(db.deleteTranslation).mockRejectedValue('isError')
    //we dont want to console log while running the test, we are mocking the console.log that does nothing.
    // spyOn and mocked are similar but we can't mock console.log because its JS built not something we built
    vi.spyOn(console, 'log').mockImplementation(() => {})

    const response = await request(server).delete('/api/v1/translations/1')
    expect(response.status).toBe(500)
  })
})
