import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
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
						Tải Video Youtube
					</Link>
				</div>
				<div className='footer__list-item'>
					<Link to='#' className='footer__list-item-link'>
						Chuyển đổi video MP3 Youtube
					</Link>
				</div>
				<div className='footer__list-item'>
					<Link to='#' className='footer__list-item-link'>
						Chính sách riêng tư
					</Link>
				</div>
				<div className='footer__list-item'>
					<Link to='#' className='footer__list-item-link'>
						Điều khoản sử dụng
					</Link>
				</div>
				<div className='footer__list-item'>
					<Link to='#' className='footer__list-item-link'>
						Liên hệ
					</Link>
				</div>
			</div>
			{/* copyright */}
			<div className='footer__copyright'>
				Copyright © 2022 Upgo. All rights reserved.
			</div>
			{/* Design by */}
			<div className='footer__design-by'>
				Design by{' '}
				<a href='https://www.facebook.com/vanhung.dev'>VanHungNguyen</a>
			</div>
		</footer>
	)
}

export default Footer
