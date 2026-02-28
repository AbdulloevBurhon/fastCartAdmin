import { store } from '@/app/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export default function AppProviders() {
 return (
  <Provider store={store}>
   <RouterProvider router={router} />
  </Provider>
 )
}
