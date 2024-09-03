import ReactDOM from 'react-dom/client'
import '@fontsource-variable/nunito'
import { routeTree } from './route-tree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

console.clear()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
  // <RouterProvider
  //   router={createBrowserRouter([
  //     {
  //       path: '',
  //       element: <RootLayout />,
  //       children: [
  //         {
  //           path: 'sign-in',
  //           element: <SignInPage />,
  //         },

  //         // Auth Guarded
  //         {
  //           path: '',
  //           element: <AuthGuardedLayout />,
  //           children: [
  //             {
  //               path: '',
  //               element: <HomePage />,
  //             },
  //             {
  //               path: '*',
  //               element: <NotFoundPage />,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ])}
  // />,
)
