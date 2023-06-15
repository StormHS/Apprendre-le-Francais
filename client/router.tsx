import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Home from './components/Home'
import Phrases from './components/Phrases'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* localhost:5173 we see the <App />*/}
      <Route path="/" element={<Home />} />

      {/* localhost:5173/Français101 we see the <Phrases />*/}
      <Route path="/Francais101" element={<Phrases />} />
    </>
  )
)

export default router
