import connection from '../connection'
import * as db from '../functions/translations'
import { it, describe, expect, beforeEach } from 'vitest'

// saying before each test do the migrate and seeds run.
beforeEach(async () => {
  await connection.migrate.rollback()
  await connection.migrate.latest()
  await connection.seed.run()
})

describe('deleteTranslations', () => {
  it('should delete a pair of translations', async () => {
    // saying if you deleted 1 from the seeds not just the datatabase
    await db.deleteTranslation(1)
    const translations = await db.getAllTranslations()
    // then you expect 7 left in the SEEDS
    expect(translations).toHaveLength(7)
  })
})
