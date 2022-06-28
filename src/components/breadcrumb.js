import { Breadcrumbs, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Breadcrumb = ({ isList, isView, isCreate }) => {
  const { t } = useTranslation()
  let last = isView ? 'view.details' : isCreate ? 'create.add' : 'edit'
  let breadcrumbs = [
    <Link key="1" color="inherit" to="/">
      {t('home')}
    </Link>,
  ]

  if (isList) {
    breadcrumbs.push(
      <Typography key="2" color="text.primary">
        {t('news')}
      </Typography>
    )
  } else {
    breadcrumbs.push(
      <Link key="2" color="inherit" to="/news">
        {t('news')}
      </Link>
    )
    breadcrumbs.push(
      <Typography key="3" color="text.primary">
        {t(last)}
      </Typography>
    )
  }

  return (
    <Breadcrumbs separator={<NavigateNextIcon />} className="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  )
}

export default Breadcrumb
