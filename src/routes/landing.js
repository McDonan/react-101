import '../styles.css'

import { Link, Outlet } from 'react-router-dom'

import Footer from '../components/footer'
import Header from '../components/header'
import banner from '../assets/images/banner.png'
import { getValueByLanguage } from '../i18n'
import { listNews } from '../news'
import news from '../assets/images/workplace.png'
import { useTranslation } from 'react-i18next'

export default function Landing() {
  const newsList = listNews()
  const { t, i18n } = useTranslation()

  return (
    <div>
      <div className="body">
        <Header />
        <img className="banner" src={banner} alt="banner"></img>
        <div className="news">
          <p
            style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '24px' }}
          >
            {t('news')}
          </p>
          <nav>
            <Link to="/news">
              <span className="view-all">{t('app.viewAll')}</span>
            </Link>
          </nav>
        </div>
        <div id="news">
          <nav>
            {newsList.slice(0, 4).map((elem, i) => (
              <Link to={`/news/${elem.id}`} key={elem.id}>
                <div className="container">
                  <img id="news1" src={news} alt="news"></img>
                  <div className="bottom-left">
                    {getValueByLanguage(i18n.language, elem.title)}
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
