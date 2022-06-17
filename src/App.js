import { Outlet, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { languages } from './i18n'
import { listNews } from './news'
import banner from './assets/images/banner.png'
import logo from './assets/images/icon.png'
import news from './assets/images/workplace.png'
import './App.css'
import './styles.css'

export default function App() {
  let newsList = listNews()
  let lngs = languages()
  const { t, i18n } = useTranslation()

  return (
    <div>
      <div className="body">
        <div className="header">
          <img className="logo" src={logo} alt="logo"></img>
          <div className="language">
            <div
              id="th"
              style={{
                fontWeight: i18n.language === 'th' ? 'bold' : 'normal',
              }}
              onClick={() => i18n.changeLanguage('th')}
            >
              {lngs['th'].nativeName}
            </div>
            <div style={{ padding: '0 5px' }}> | </div>
            <div
              id="en"
              style={{
                fontWeight: i18n.language === 'en' ? 'bold' : 'normal',
              }}
              onClick={() => i18n.changeLanguage('en')}
            >
              {lngs['en'].nativeName}
            </div>
          </div>
        </div>
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
              <Link to={`/news/${elem.id}`} key={i}>
                <div className="container">
                  <img id="news1" src={news} alt="news"></img>
                  <div className="bottom-left">
                    {i18n.language === 'en' ? elem.title.en : elem.title.th}
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <Outlet />
      </div>
      <div className="clear"></div>
      <div className="footer">
        <p>© {t('copyright')}</p>
      </div>
    </div>
  )
}
