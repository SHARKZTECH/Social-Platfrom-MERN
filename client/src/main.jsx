import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./bootstrap.min.css"
import {Provider} from "react-redux"
import store from "./redux/store";
import {Routes,Route,BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <Routes>
         <Route path='*' element={<App />}/>
       </Routes>
      </BrowserRouter>  
    </Provider>
  </React.StrictMode>
)
