import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { listCategories } from '../category'
import { createNews } from '../news'
import { languages } from '../i18n'
import logo from '../assets/images/icon.png'

export default function EditNews() {
  let categories = listCategories()
  let navigate = useNavigate()
  let lngs = languages()
  const [inputs, setInputs] = useState({})
  const { t, i18n } = useTranslation()

  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    if (name === 'thtitle') {
      name = 'title'
      value = { th: value }
    }

    if (name === 'entitle') {
      name = 'title'
      value = { ...inputs[name], en: value }
    }

    if (name === 'category_id') {
      value = parseInt(value)
    }
    setInputs((values) => ({ ...values, [name]: value }))
  }

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
              <li style={{ fontWeight: 'bold' }}>{t('create.add')}</li>
            </ol>
          </nav>
        </div>
        <div className="grid-create">
          <div className="information">
            <label htmlFor="thtile">
              {t('title')} ({t('thai')})
            </label>
            <textarea id="th-title" name="thtitle" onChange={handleChange} />
            <label htmlFor="entitle">
              {t('title')} ({t('english')})
            </label>
            <textarea id="en-title" name="entitle" onChange={handleChange} />
            <label htmlFor="category">{t('category')}</label>
            <select
              name="category_id"
              id="categories"
              defaultValue={''}
              onChange={handleChange}
            >
              <option value="" disabled>
                {t('all')}
              </option>
              {categories.map((elem, i) => (
                <option value={i + 1} key={i}>
                  {i18n.language === 'en' ? elem.name.en : elem.name.th}
                </option>
              ))}
            </select>
            <label htmlFor="publish_at">{t('publishAt')}</label>
            <input
              type="date"
              id="publish"
              name="publish_at"
              onChange={handleChange}
            />
            <nav className="buttons">
              <button
                id="cancel"
                onClick={() => {
                  navigate('/news')
                }}
              >
                {t('cancel')}
              </button>
              <button
                id="submit"
                onClick={() => {
                  createNews(inputs)
                  navigate('/news')
                }}
              >
                {t('save')}
              </button>
            </nav>
          </div>
          <div id="avatar-div">
            <br />
            <br />
            <br />
            <br />
            <br />
            <input
              type="file"
              id="avatar"
              name="image"
              accept="image/png, image/jpeg"
            />
            <label htmlFor="avatar">+</label>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="footer">
        <p>© {t('copyright')}</p>
      </div>
    </div>
  )
}
