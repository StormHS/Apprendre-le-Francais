// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { renderRoute } from '../../test-utils'
import nock from 'nock'
import userEvent from '@testing-library/user-event'

describe('<Translations>', () => {
  it('should delete a translation', async () => {
    nock('http://localhost')
      .get('/api/v1/translations')
      // we've made up data for it to practise with, not from the actual seeds or database
      .reply(200, [{ id: 1, french: 'bonjour', english: 'good morning' }])
    // similar to mock, nock is saying don't actually do this, just test that it works
    const scope = nock('http://localhost')
      .delete('/api/v1/translations/1')
      .reply(204)

    renderRoute('/JournalIntime')
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i))

    // we are saying below to access a HTML button (we specify the button 'supprimer')
    const deleteButton = screen.getByRole('button', { name: 'supprimer' })
    //something is going to happen by the user
    const user = userEvent.setup()
    // the user is clicking the button
    await user.click(deleteButton)
    // after the user clicked the button then this is saying the api/v1 URL has been sent a request
    expect(scope.isDone()).toBeTruthy()
  })
  it('should show error when fails to delete', async () => {
    nock('http://localhost')
      .get('/api/v1/translations')
      // we've made up data for it to practise with, not from the actual seeds or database
      .reply(200, [{ id: 1, french: 'bonjour', english: 'good morning' }])

    // similar to mock, nock is saying don't actually do this, just test that it works
    const scope = nock('http://localhost')
      .delete('/api/v1/translations/1')
      .reply(500)

    renderRoute('/JournalIntime')
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i))

    // we are saying below to access a HTML button (we specify the button 'supprimer')
    const deleteButton = screen.getByRole('button', { name: 'supprimer' })
    //something is going to happen by the user
    const user = userEvent.setup()
    // the user is clicking the button
    await user.click(deleteButton)
    // after the user clicked the button then this is saying the api/v1 URL has been sent a request
    expect(scope.isDone()).toBeTruthy()
    await waitFor(() => {
      expect(screen.queryByText('error deleting')).toBeInTheDocument()
    })
  })
})
