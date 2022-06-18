import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import CreateNews from './routes/create-news'
import EditNews from './routes/edit-news'
import ListNews from './routes/list-news'
import ViewNews from './routes/view-news'
import reportWebVitals from './reportWebVitals'

// import i18n (needs to be bundled ;))
import './i18n'
import NotFound from './components/not-found'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="news" element={<ListNews />}></Route>
      <Route path="news/create" element={<CreateNews />}></Route>
      <Route path="news/:newsId" element={<ViewNews />}></Route>
      <Route path="news/:newsId/edit" element={<EditNews />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
