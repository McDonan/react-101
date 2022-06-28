import './styles.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CreateNews from './routes/create-news'
import EditNews from './routes/edit-news'
import Landing from './routes/landing'
import ListNews from './routes/list-news'
import NotFound from './components/not-found'
import ViewNews from './routes/view-news'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="news" element={<ListNews />}></Route>
          <Route path="news/create" element={<CreateNews />}></Route>
          <Route path="news/:newsId" element={<ViewNews />}></Route>
          <Route path="news/:newsId/edit" element={<EditNews />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
