import '../styles.css'

import { Button, Fab, Grid, TextField } from '@mui/material'
import { InputLabel, MenuItem } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
import { getCategory, listCategories } from '../category'

import AddIcon from '@mui/icons-material/Add'
import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'
import { getDateTime } from '../utils/date'
import { getValueByLanguage } from '../i18n'
import { listNews } from '../news'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ListNews() {
  const categories = listCategories()
  const allNews = listNews()
  const [news, setNews] = useState(allNews)
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState(0)
  const { t, i18n } = useTranslation()

  return (
    <div>
      <div className="body">
        <Header />
        <Breadcrumb isList />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <InputLabel id="title-label">{t('title')}</InputLabel>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <InputLabel id="category-label">{t('category')}</InputLabel>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={3}>
            <TextField
              id="title"
              style={{ width: '100%' }}
              margin="dense"
              type="search"
              variant="outlined"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value)
              }}
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <TextField
              id="categories"
              style={{ width: '100%' }}
              select
              margin="dense"
              value={category}
              onChange={(event) => {
                setCategory(parseInt(event.target.value))
              }}
            >
              <MenuItem value={0}>{t('all')}</MenuItem>
              {categories.map((elem, i) => (
                <MenuItem value={elem.id} key={elem.id}>
                  {getValueByLanguage(i18n.language, elem.name)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              id="search"
              onClick={() => {
                let newsList = allNews
                if (searchText || category) {
                  if (searchText) {
                    newsList = newsList.filter((data) => {
                      const title = data.title.th
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
              {' '}
              {t('list.search')}
            </Button>
          </Grid>
        </Grid>
        <nav id="new-news">
          <Link to={`/news/create`}>
            <Fab size="small" aria-label="add">
              <AddIcon />
            </Fab>{' '}
            {t('list.create')}
          </Link>
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
              <tr key={elem.id}>
                <td id="column1">{elem.id}</td>
                <td>{getValueByLanguage(i18n.language, elem.title)}</td>
                <td>
                  {getValueByLanguage(
                    i18n.language,
                    getCategory(elem.category_id).name
                  )}
                </td>
                <td>{getDateTime(elem.updated_at)}</td>
                <td id="column5">
                  <nav key={elem.id}>
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
      <Footer />
    </div>
  )
}
