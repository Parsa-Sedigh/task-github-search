import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import {App} from './pages/App'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./pages/About";
import {Layout} from "./components/Layout/Layout";
import {User} from "./pages/User";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  <Route index element={<App />} />
                  <Route path="about" element={<About />} />
                  <Route path="user/:username" element={<User />} />
              </Route>

          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
