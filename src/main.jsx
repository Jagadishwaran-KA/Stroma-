import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import DonorForm from './components/DonorForm.jsx'
import ReceiverForm from "./components/ReceiverForm.jsx"
import Content from './components/Content.jsx'


const router = createBrowserRouter(
 
  createRoutesFromElements(

    <Route path='/' element = {<Layout />}>
        <Route path='' element = {<Content />} />
        <Route path='donor' element = {<DonorForm />} />
        <Route path='receiver' element = {<ReceiverForm />} />
    </Route>


  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
