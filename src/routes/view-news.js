import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCategory } from '../category'
import { languages } from '../i18n'
import { getNews } from '../news'
import { getDate } from '../utils/date'
import logo from '../assets/images/icon.png'

export default function ViewNews() {
  let params = useParams()
  let lngs = languages()
  let news = getNews(parseInt(params.newsId, 10))
  const { t, i18n } = useTranslation()

  if (news) {
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
          <div className="breadcrumb">
            <nav>
              <ol>
                <li>
                  {' '}
                  <Link to="/">{t('home')}</Link>
                </li>
                <li>
                  {' '}
                  <Link to="/news">{t('news')}</Link>
                </li>
                <li style={{ fontWeight: 'bold' }}>{t('view.details')}</li>
              </ol>
            </nav>
          </div>
          <div className="grid-create">
            <div className="information">
              <label htmlFor="th-tile">
                {t('title')} ({t('thai')})
              </label>
              <textarea
                id="th-title"
                name="th-title"
                value={news.title.th}
                disabled
              />
              <label htmlFor="en-title">
                {t('title')} ({t('english')})
              </label>
              <textarea
                id="en-title"
                name="en-title"
                value={news.title.en}
                disabled
              />
              <label htmlFor="category">{t('category')}</label>
              <input
                type="text"
                name="category"
                id="category"
                value={
                  i18n.language === 'en'
                    ? getCategory(news.category_id).name.en
                    : getCategory(news.category_id).name.th
                }
                disabled
              />
              <label htmlFor="publish">{t('publishAt')}</label>
              <input
                type="date"
                id="publish"
                name="publish"
                value={getDate(news.updated_at)}
                disabled
              />
            </div>
            <img id="image" alt="news" src={news.image} />
          </div>
        </div>
        <div className="clear"></div>
        <div className="footer">
          <p>© {t('copyright')}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <nav>
        <main style={{ padding: '1rem' }}>
          <h2>404 News Not Found</h2>
        </main>
      </nav>
    </div>
  )
}
