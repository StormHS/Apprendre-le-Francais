import { Router } from 'express'

import * as db from '../db/translations'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const translations = await db.getAllTranslations()

    res.json(translations)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
