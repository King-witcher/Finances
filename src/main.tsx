import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './app/layout'
import SignInPage from './app/sign-in/page'
import AuthGuardedLayout from './app/(require-auth)/layout'
import HomePage from './app/(require-auth)/(home)/page'
import NotFoundPage from './app/(require-auth)/not-found'
import '@fontsource-variable/nunito'
console.clear()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider
    router={createBrowserRouter([
      {
        path: '',
        element: <RootLayout />,
        children: [
          {
            path: 'sign-in',
            element: <SignInPage />,
          },

          // Auth Guarded
          {
            path: '',
            element: <AuthGuardedLayout />,
            children: [
              {
                path: '',
                element: <HomePage />,
              },
              {
                path: '*',
                element: <NotFoundPage />,
              },
            ],
          },
        ],
      },
    ])}
  />,
)
