import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
	return (
		<div className='header'>
			<div className='wrapper header__wrapper'>
				<Link to='/' className='header__logo'>
					<img
						src='https://upgo.io/wp-content/uploads/2020/04/U-uogo-min.png.webp'
						alt='logo'
					/>
				</Link>

				<div className='header__language'>{/* Language */}</div>
			</div>
		</div>
	)
}

export default Header
