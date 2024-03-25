import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Header from './components/Header'

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  })

  return (
    <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4">
      <Header />
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen />
        <Outlet />
      </QueryClientProvider>
    </div>
  )
}

export default App
