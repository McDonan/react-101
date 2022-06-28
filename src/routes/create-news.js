import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'
import News from '../components/news'

export default function EditNews() {
  return (
    <div>
      <div className="body">
        <Header />
        <Breadcrumb isCreate />
        <News isCreate />
      </div>
      <Footer />
    </div>
  )
}
