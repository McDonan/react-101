import { useTranslation } from 'react-i18next'
import React from 'react'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className="footer">
      <div className="clear"></div>
      <div className="copyright">© {t('copyright')}</div>
    </div>
  )
}

export default Footer
