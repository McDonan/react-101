import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { React, useState } from 'react'
import { createNews, editNews, getNews } from '../news'
import { listCategories } from '../category'
import { getDate } from '../utils/date'

const News = ({ isEdit, isCreate }) => {
  let categories = listCategories()
  let navigate = useNavigate()
  let params = useParams()
  let news = getNews(parseInt(params?.newsId, 10))

  const { t, i18n } = useTranslation()
  const [enTitle, setENTitle] = useState(news?.title.en)
  const [thTitle, setTHTitle] = useState(news?.title.th)
  const [categoryID, setCategoryID] = useState(news?.category_id)
  const [publishAt, setPublishAt] = useState(news?.publish_at)
  const [newInputs, setNewInputs] = useState({})

  let inputs = {
    id: news?.id,
    category_id: categoryID,
    title: {
      en: enTitle,
      th: thTitle,
    },
    image: news?.image,
    created_at: news?.created_at,
    updated_at: news?.updated_at,
    publish_at: publishAt,
  }

  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    if (name === 'th-title') {
      name = 'title'
      value = { th: value }
    }

    if (name === 'en-title') {
      name = 'title'
      value = { ...newInputs[name], en: value }
    }

    if (name === 'category_id') {
      value = parseInt(value)
    }
    setNewInputs((values) => ({ ...values, [name]: value }))
  }

  return (
    <div className="grid">
      <div className="information">
        <label htmlFor="th-title">
          {t('title')} ({t('thai')})
        </label>
        <textarea
          id="th-title"
          name="th-title"
          value={thTitle}
          disabled={!isEdit && !isCreate}
          onChange={(e) =>
            isCreate ? handleChange : setTHTitle(e.target.value)
          }
        />
        <label htmlFor="entitle">
          {t('title')} ({t('english')})
        </label>
        <textarea
          id="en-title"
          name="entitle"
          value={enTitle}
          disabled={!isEdit && !isCreate}
          onChange={(e) =>
            isCreate ? handleChange : setENTitle(e.target.value)
          }
        />
        <label htmlFor="category_id">{t('category')}</label>
        <select
          name="category_id"
          id="category"
          value={categoryID}
          disabled={!isEdit && !isCreate}
          onChange={(e) =>
            isCreate ? handleChange : setCategoryID(parseInt(e.target.value))
          }
        >
          {categories.map((elem, i) => (
            <option value={elem.id} key={i}>
              {i18n.language === 'en' ? elem.name.en : elem.name.th}
            </option>
          ))}
        </select>
        <label htmlFor="publish_at">{t('publishAt')}</label>
        <input
          type="date"
          id="publish"
          name="publish_at"
          value={getDate(publishAt)}
          disabled={!isEdit && !isCreate}
          onChange={(e) =>
            isCreate ? handleChange : setPublishAt(e.target.value)
          }
        />
        {(isEdit || isCreate) && (
          <nav className="buttons">
            <button
              id="cancel"
              onClick={() => {
                navigate('/news')
              }}
            >
              {t('cancel')}
            </button>
            <input
              type={'submit'}
              id="submit"
              value={t('save')}
              onClick={() => {
                isCreate ? createNews(newInputs) : editNews(news.id, inputs)
                navigate('/news')
              }}
            />
          </nav>
        )}
      </div>
      {isCreate ? (
        <div id="avatar-div">
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
      ) : (
        <img id="image" alt="news" src={news?.image} />
      )}
    </div>
  )
}

export default News
