import { beforeEach, expect, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import matchers, {
  TestingLibraryMatchers,
} from '@testing-library/jest-dom/matchers'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { routes } from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

beforeEach(cleanup)
expect.extend(matchers)

vi.mock('@react-three/drei')
vi.mock('@react-three/fiber')
vi.mock('@react-three/postprocessing')

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/ban-types
    interface Matchers<R = void, T = {}>
      extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
  }
}

export function renderRoute(location: string) {
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  })

  render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
