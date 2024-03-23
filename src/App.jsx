import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
