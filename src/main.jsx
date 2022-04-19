import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { OneHundredCssChallenge } from './challenges/Day1/OneHundredCssChallenge'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
