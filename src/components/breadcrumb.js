import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import React from 'react'

const Breadcrumb = ({ isList, isView, isCreate }) => {
  const { t } = useTranslation()

  let last = isView ? 'view.details' : isCreate ? 'create.add' : 'edit'

  return (
    <div className="breadcrumb">
      <nav>
        <ol>
          <li>
            {' '}
            <Link to="/">{t('home')}</Link>
          </li>
          <li>
            {' '}
            <Link to="/news" style={isList && { fontWeight: 'bold' }}>
              {t('news')}
            </Link>
          </li>
          {!isList && <li style={{ fontWeight: 'bold' }}>{t(last)}</li>}
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
