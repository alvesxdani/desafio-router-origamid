import React from 'react'
import GlobalStyle from './GlobalStyles'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Produtos from './routes/Produtos'
import Contato from './routes/Contato'
import Produto from './routes/Produto.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Produtos />
      },
      {
        path: '/contato',
        element: <Contato />
      },
      {
        path: '/produto/:id',
        element: <Produto />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
