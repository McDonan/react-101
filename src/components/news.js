import { Button, InputLabel, MenuItem, TextField } from '@mui/material'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { React, useState } from 'react'
import { createNews, editNews, getNews } from '../news'
import { useNavigate, useParams } from 'react-router-dom'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { getValueByLanguage } from '../i18n'
import { listCategories } from '../category'
import { useTranslation } from 'react-i18next'

const News = ({ isEdit, isCreate }) => {
  const categories = listCategories()
  const navigate = useNavigate()
  const params = useParams()
  const news = getNews(parseInt(params?.newsId, 10))

  const { t, i18n } = useTranslation()
  const [enTitle, setENTitle] = useState(news?.title.en || '')
  const [thTitle, setTHTitle] = useState(news?.title.th || '')
  const [categoryID, setCategoryID] = useState(news?.category_id || 0)
  const [publishAt, setPublishAt] = useState(news?.publish_at || new Date())

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

  return (
    <div className="grid">
      <div className="information">
        <InputLabel id="th-title-label">
          {t('title')} ({t('thai')})
        </InputLabel>
        <TextField
          id="th-title"
          margin="dense"
          multiline
          rows={6}
          value={thTitle}
          disabled={!isEdit && !isCreate}
          onChange={(e) => setTHTitle(e.target.value)}
        />
        <InputLabel id="en-title-label">
          {t('title')} ({t('english')})
        </InputLabel>
        <TextField
          id="en-title"
          margin="dense"
          multiline
          rows={6}
          value={enTitle}
          disabled={!isEdit && !isCreate}
          onChange={(e) => setENTitle(e.target.value)}
        />
        <InputLabel id="category-label">{t('category')}</InputLabel>
        <TextField
          id="category"
          select
          margin="dense"
          disabled={!isEdit && !isCreate}
          value={categoryID}
          onChange={(e) => setCategoryID(parseInt(e.target.value))}
        >
          {categories.map((elem, i) => (
            <MenuItem value={elem.id} key={elem.id}>
              {getValueByLanguage(i18n.language, elem.name)}
            </MenuItem>
          ))}
        </TextField>
        <InputLabel id="publish-label">{t('publishAt')}</InputLabel>
        <LocalizationProvider dateAdapter={AdapterDateFns} id="publish">
          <DateTimePicker
            inputFormat="dd/MM/yyyy HH:mm"
            value={publishAt}
            disabled={!isEdit && !isCreate}
            onChange={(date) => setPublishAt(date)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        {(isEdit || isCreate) && (
          <nav className="buttons">
            <Button
              variant="outlined"
              id="cancel"
              onClick={() => {
                navigate('/news')
              }}
            >
              {t('cancel')}
            </Button>
            <Button
              variant="contained"
              id="submit"
              onClick={() => {
                isCreate ? createNews(inputs) : editNews(news?.id, inputs)
                navigate('/news')
              }}
            >
              {t('save')}
            </Button>
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
          <InputLabel id="avatar">+</InputLabel>
        </div>
      ) : (
        <img id="image" alt="news" src={news?.image} />
      )}
    </div>
  )
}

export default News
