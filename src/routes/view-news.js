import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'
import News from '../components/news'
import NotFound from '../components/not-found'
import { getNews } from '../news'
import { useParams } from 'react-router-dom'

export default function ViewNews() {
  const params = useParams()
  const news = getNews(parseInt(params.newsId, 10))

  if (news) {
    return (
      <div>
        <div className="body">
          <Header />
          <Breadcrumb isView />
          <News isView />
        </div>
        <Footer />
      </div>
    )
  }

  return <NotFound />
}
