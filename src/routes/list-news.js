import { useTranslation } from 'react-i18next'
import { Outlet, Link } from 'react-router-dom'
import { getCategory, listCategories } from '../category'
import { languages } from '../i18n'
import { listNews } from '../news'
import { useState } from 'react'
import { getDateTime } from '../utils/date'
import logo from '../assets/images/icon.png'
import '../styles.css'

export default function ListNews() {
  let categories = listCategories()
  let allNews = listNews()
  let lngs = languages()
  const [news, setNews] = useState(allNews)
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState(0)
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
        <div className="breadcrumb">
          <nav>
            <ol>
              <li>
                {' '}
                <Link to="/">{t('home')}</Link>
              </li>
              <li style={{ fontWeight: 'bold' }}>{t('news')}</li>
            </ol>
          </nav>
        </div>
        <div className="grid-container">
          <p className="subject">{t('title')}</p>
          <div></div>
          <p className="subject">{t('category')}</p>
          <div></div>
          <div></div>
          <input
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value)
            }}
            type="text"
            id="title"
            name="title"
          />
          <div></div>
          <select
            name="categories"
            id="categories"
            value={category}
            onChange={(event) => {
              setCategory(parseInt(event.target.value))
            }}
          >
            <option value={0}>{t('all')}</option>
            {categories.map((elem, i) => (
              <option value={elem.id} key={i}>
                {i18n.language === 'en' ? elem.name.en : elem.name.th}
              </option>
            ))}
          </select>
          <div></div>
          <button
            id="search"
            onClick={() => {
              let newsList = allNews
              if (searchText || category) {
                if (searchText) {
                  newsList = newsList.filter((data) => {
                    let title = data.title.th
                    return title.includes(searchText)
                  })
                }
                if (category) {
                  newsList = newsList.filter((data) => {
                    return data.category_id === category
                  })
                }
              }
              setNews(newsList)
            }}
          >
            {t('list.search')}
          </button>
        </div>
        <nav id="new-news">
          <Link to={`/news/create`}>+ {t('list.create')}</Link>
        </nav>
        <table cellSpacing="0">
          <thead>
            <tr>
              <th> </th>
              <th id="column2">{t('title')}</th>
              <th id="column3">{t('category')}</th>
              <th id="column4">{t('updatedAt')}</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {news.map((elem, i) => (
              <tr key={`row${i}`}>
                <td id="column1">{elem.id}</td>
                <td>
                  {i18n.language === 'en' ? elem.title.en : elem.title.th}
                </td>
                <td>
                  {i18n.language === 'en'
                    ? getCategory(elem.category_id).name.en
                    : getCategory(elem.category_id).name.th}
                </td>
                <td>{getDateTime(elem.updated_at)}</td>
                <td id="column5">
                  <nav key={`${i}`}>
                    <Link to={`/news/${elem.id}/edit`}>
                      <div className="link">{t('edit')}</div>
                    </Link>
                    <Link to={`/news/${elem.id}`}>
                      <div className="link">{t('list.seeDetails')}</div>
                    </Link>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
          <Outlet />
        </table>
      </div>
      <div className="clear"></div>
      <div className="footer">
        <p>© {t('copyright')}</p>
      </div>
    </div>
  )
}
