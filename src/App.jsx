import { Routes, Route } from 'react-router-dom'
import SyntheticHTLP1 from './pages/SyntheticHTLP1'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SyntheticHTLP1 />} />
    </Routes>
  )
}

export default App
