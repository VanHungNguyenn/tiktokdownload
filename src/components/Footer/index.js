import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MessengerCustomerChat from 'react-messenger-customer-chat'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className='footer'>
			<Link to='/' className='footer__logo'>
				<img
					src='https://upgo.io/wp-content/uploads/2020/04/U-uogo-min.png.webp'
					alt='logo'
				/>
			</Link>
			<div className='footer__list'>
				<div className='footer__list-item'>
					<Link to='#' className='footer__list-item-link'>
						{t('footer__list.1')}
					</Link>
				</div>
				<div className='footer__list-item'>
					<Link to='#' className='footer__list-item-link'>
						{t('footer__list.2')}
					</Link>
				</div>
				<div className='footer__list-item'>
					<Link to='#' className='footer__list-item-link'>
						{t('footer__list.3')}
					</Link>
				</div>
			</div>
			{/* copyright */}
			<div className='footer__copyright'>
				Copyright © 2022 Upgo. All rights reserved.
			</div>
			<MessengerCustomerChat
				pageId='103014442260353'
				appId='323695346239067'
			/>
		</footer>
	)
}

export default Footer
