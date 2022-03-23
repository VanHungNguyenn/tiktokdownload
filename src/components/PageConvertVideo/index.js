import React from 'react'
import './PageConvertVideo.css'
import { FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PageConvertVideo = () => {
	return (
		<div className='page-convert-video'>
			<div className='page-convert-video__wrapper'>
				<h1 className='page-convert-video__title'>
					Tải video Youtube, chuyển nhạc Youtube sang MP3
				</h1>
				<p className='page-convert-video__subtitle'>
					Download & convert videos from Youtube, facebook & 500 sites
				</p>
				<div className='page-convert-video__group'>
					<input
						type='text'
						className='page-convert-video__input'
						placeholder='Nhập link video cần tải'
					/>
					<button className='page-convert-video__button'>
						<FaDownload /> Lấy link video
					</button>
				</div>
				<p className='page-convert-video__text'>
					Sử dụng dịch vụ này là bạn đồng ý với{' '}
					<Link to='#' className='page-convert-video__text-span'>
						Điều khoản Dịch vụ
					</Link>
				</p>
			</div>
		</div>
	)
}

export default PageConvertVideo
