import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import router from './router'
import { RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      {/*  the below line to establish routes and have multiple pages on your
      website */}
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
})
