import React from 'react'
import ReactDOM from 'react-dom/client'
import {MyRouter} from './router'
import { BrowserRouter} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MyRouter/>
    </BrowserRouter>
  // </React.StrictMode>
)
