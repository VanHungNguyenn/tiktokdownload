import React from 'react'
import './Intro.css'
import { BsFilm, BsClockFill, BsShieldFillCheck } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const Intro = () => {
	const { t } = useTranslation()

	return (
		<div className='intro wrapper'>
			<h2 className='intro__title'>{t('intro__title')}</h2>
			<p className='intro__description'>{t('intro__description')}</p>
			<div className='intro__list'>
				<div className='intro__item'>
					<div className='intro__item-icon'>
						<BsClockFill />
					</div>
					<div className='intro__item-title'>
						{t('intro__item.1.intro__item-title')}
					</div>
					<div className='intro__item-desc'>
						{t('intro__item.1.intro__item-desc')}
					</div>
				</div>
				<div className='intro__item'>
					<div className='intro__item-icon'>
						<BsFilm />
					</div>
					<div className='intro__item-title'>
						{t('intro__item.2.intro__item-title')}
					</div>
					<div className='intro__item-desc'>
						{t('intro__item.2.intro__item-desc')}
					</div>
				</div>
				<div className='intro__item'>
					<div className='intro__item-icon'>
						<BsShieldFillCheck />
					</div>
					<div className='intro__item-title'>
						{t('intro__item.3.intro__item-title')}
					</div>
					<div className='intro__item-desc'>
						{t('intro__item.3.intro__item-desc')}
					</div>
				</div>
			</div>

			{/* <h2 className='intro__title'>
				Ytop1.com - Công cụ hỗ trợ tải Video YouTube, Downloader YouTube
				MP3 Trực Tuyến Miễn Phí
			</h2>
			<p className='intro__description'>
				Với Ytop1 bạn có thể tải tất cả các video trên Youtube hoặc
				chuyển đổi video Youtube sang MP3 để làm nhạc chuông điện thoại
				nhanh chóng. Đơn giản bạn chỉ cần dán đường dẫn video Youtube
				vào vùng chuyển đổi, lựa chọn định dạng (mp4, webm, mp3, m4a
				...) và chất lượng (240p, 360p, 480p, 710p, 1080p, FullHD ...)
				mong muốn. Ytop1 có thể làm tất cả mọi thứ để bạn sở hữu những
				video hay nhất.
			</p>
			<div className='intro__list'>
				<div className='intro__item'>
					<div className='intro__item-icon'>
						<BsClockFill />
					</div>
					<div className='intro__item-title'>
						Công cụ hỗ trợ tải video trên YouTube nhiều định dạng
					</div>
					<div className='intro__item-desc'>
						Ytop1 là một trình tải video Youtube hoàn hảo. Nó giúp
						bạn tải video từ Youtube dưới dạng MP3, MP4 ... bao gồm
						cả chất lượng FullHD. Công cụ tải xuống video Youtube
						miễn phí sẽ hiển thị cho bạn kích thước file trước khi
						lưu.
					</div>
				</div>
				<div className='intro__item'>
					<div className='intro__item-icon'>
						<BsFilm />
					</div>
					<div className='intro__item-title'>
						Tải Youtube MP3, tách nhạc MP3 từ Youtube
					</div>
					<div className='intro__item-desc'>
						Trong trường hợp có một số bản nhạc tuyệt vời trên
						Youtube, bạn có thể sử dụng Ytop1 Youtube to MP3 để
						trích xuất MP3 (tách nhạc) từ video Youtube, tải về
						thiết bị và nghe khi không có mạng.
					</div>
				</div>
				<div className='intro__item'>
					<div className='intro__item-icon'>
						<BsShieldFillCheck />
					</div>
					<div className='intro__item-title'>
						Cập nhật và Nâng cấp hệ thống thường xuyên
					</div>
					<div className='intro__item-desc'>
						Ytop1 luôn hoạt động trong khi các phần mềm miễn phí
						trực tuyến khác không hoạt động, mọi vấn đề mới sẽ được
						khắc phục thường xuyên trong vòng 24h, để mang lại cho
						người dùng những gì tốt đẹp nhất
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default Intro
