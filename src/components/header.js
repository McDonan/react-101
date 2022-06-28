import React from 'react'
import { languages } from '../i18n'
import logo from '../assets/images/icon.png'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const langs = languages()
  const { i18n } = useTranslation()

  return (
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
          {langs['th'].nativeName}
        </div>
        <div style={{ padding: '0 5px' }}> | </div>
        <div
          id="en"
          style={{
            fontWeight: i18n.language === 'en' ? 'bold' : 'normal',
          }}
          onClick={() => i18n.changeLanguage('en')}
        >
          {langs['en'].nativeName}
        </div>
      </div>
    </div>
  )
}

export default Header
