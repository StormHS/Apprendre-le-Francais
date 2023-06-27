import { Router } from 'express'

import * as db from '../db/functions/translations'
import { TranslationData } from '../../models/translation'

const router = Router()

// this is going to GET /api/v1/translations
router.get('/', async (req, res) => {
  try {
    const translations = await db.getAllTranslations()
    res.json(translations)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// this is going to POST /api/v1/translations
router.post('/', async (req, res) => {
  try {
    const newTranslationInput = req.body as TranslationData
    if (!newTranslationInput) {
      res.send(400)
      return
    }
    await db.addTranslations(newTranslationInput)
    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// trying to figure out how to add a delete button to my database
router.delete('/:id', async (req, res) => {
  try {
    const translationId = Number(req.params.id)
    await db.deleteTranslation(translationId)
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

export default router
