import { useParams } from 'react-router-dom'
import { getNews } from '../news'
import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'
import News from '../components/news'
import NotFound from '../components/not-found'

export default function EditNews() {
  let params = useParams()
  let news = getNews(parseInt(params.newsId, 10))

  if (news) {
    return (
      <div>
        <div className="body">
          <Header />
          <Breadcrumb />
          <News isEdit={true} />
        </div>
        <Footer />
      </div>
    )
  }

  return <NotFound />
}
