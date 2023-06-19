import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Home from './components/Home'
import Phrases from './components/Phrases'
import About from './components/About'
import Diary from './components/Diary'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* localhost:5173 we see the <App />*/}
      <Route path="/" element={<Home />} />

      {/* localhost:5173/Français101 we see the <Phrases />*/}
      <Route path="/Francais101" element={<Phrases />} />

      {/* localhost:5173/A-propos we see the <Phrases />*/}
      <Route path="/Apropos" element={<About />} />

      {/* localhost:5173/A-propos we see the <Phrases />*/}
      <Route path="/JournalIntime" element={<Diary />} />
    </>
  )
)

export default router
