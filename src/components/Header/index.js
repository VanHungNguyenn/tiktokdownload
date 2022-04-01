import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
// import cookies from 'js-cookie'
import { Dropdown, Button, Menu } from 'antd'
import languages from '../../assets/lang'
import { useTranslation } from 'react-i18next'

const Header = () => {
	const { t, i18n } = useTranslation()

	// get currentLang = path
	const currentLang = window.location.pathname.split('/')[1] || 'en'

	useEffect(() => {
		document.title = t('title')
		// change lang htmlTag
		document.querySelector('html').setAttribute('lang', currentLang)
	}, [currentLang, t])

	const menu = (
		<Menu>
			{languages.map((lang) => (
				<Menu.Item
					key={lang.code}
					onClick={() => {
						i18n.changeLanguage(lang.code)
					}}
				>
					{/* Link to domain/:lang */}
					<Link to={`/${lang.code}`}>
						<span
							style={{ marginRight: '10px' }}
							className={`fi fi-${lang.country_code} mx-2`}
						></span>
						{lang.name}
					</Link>
				</Menu.Item>
			))}
		</Menu>
	)

	return (
		<div className='header'>
			<div className='wrapper header__wrapper'>
				<Link to='/' className='header__logo'>
					<img
						src='https://upgo.io/wp-content/uploads/2020/04/U-uogo-min.png.webp'
						alt='logo'
					/>
				</Link>

				<div className='header__language'>
					<Dropdown overlay={menu} placement='bottomRight'>
						<Button>
							{/* currentLang */}
							<span
								style={{ marginRight: '10px' }}
								className={`fi fi-${
									languages.find(
										(lang) => lang.code === currentLang
									).country_code
								} mx-2`}
							></span>
							{
								languages.find(
									(lang) => lang.code === currentLang
								).name
							}
						</Button>
					</Dropdown>
				</div>
			</div>
		</div>
	)
}

export default Header
