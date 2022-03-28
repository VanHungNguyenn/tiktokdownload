import React, { useState } from 'react'
import './PageConvertVideo.css'
import { FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Tabs, Modal, Progress } from 'antd'
import { useTranslation } from 'react-i18next'

const { TabPane } = Tabs

const PageConvertVideo = () => {
	const [visibleModal, setVisibleModal] = useState(false)
	const [visibleBlockDownload, setVisibleBlockDownload] = useState(false)

	const { t } = useTranslation()

	const showModal = () => {
		setVisibleModal(true)
	}

	const handleCancel = () => {
		setVisibleModal(false)
	}

	const handleShowBlockDownload = () => {
		setVisibleBlockDownload(!visibleBlockDownload)
	}

	return (
		<>
			<Modal
				title='Outfit cực Fashion khiến các em gái mê #cris
									#crisphan #crisdevilgamer'
				visible={visibleModal}
				onCancel={handleCancel}
				footer={null}
			>
				<div className='modal__body'>
					<Progress percent={75} />
					<div className='modal__button list-file-video__item-button'>
						<FaDownload /> Download
					</div>
				</div>
			</Modal>
			<div className='page-convert-video'>
				<div className='page-convert-video__wrapper'>
					{/* <h1 className='page-convert-video__title'>
						Tải video Youtube, chuyển nhạc Youtube sang MP3
					</h1>
					<p className='page-convert-video__subtitle'>
						Download & convert videos from Youtube, facebook & 500
						sites
					</p>
					<div className='page-convert-video__group'>
						<input
							type='text'
							className='page-convert-video__input'
							placeholder='Nhập link video cần tải'
						/>
						<button
							className='page-convert-video__button'
							onClick={handleShowBlockDownload}
						>
							<FaDownload /> Lấy link video
						</button>
					</div>
					<p className='page-convert-video__text'>
						Sử dụng dịch vụ này là bạn đồng ý với{' '}
						<Link to='#' className='page-convert-video__text-span'>
							Điều khoản Dịch vụ
						</Link>
					</p> */}

					<h1 className='page-convert-video__title'>
						{t('page-convert-video__title')}
					</h1>
					<p className='page-convert-video__subtitle'>
						{t('page-convert-video__subtitle')}
					</p>
					<div className='page-convert-video__group'>
						<input
							type='text'
							className='page-convert-video__input'
							placeholder={t('page-convert-video__input')}
						/>
						<button
							className='page-convert-video__button'
							onClick={handleShowBlockDownload}
						>
							<FaDownload /> {t('page-convert-video__button')}
						</button>
					</div>
					<p className='page-convert-video__text'>
						{t('page-convert-video__text')}
						<Link to='#' className='page-convert-video__text-span'>
							{t('page-convert-video__text-span')}
						</Link>
					</p>

					{visibleBlockDownload && (
						<div className='page-download-video'>
							<div className='page-download-video__title'>
								Outfit cực Fashion khiến các em gái mê #cris
								#crisphan #crisdevilgamer
							</div>
							<div className='page-download-video__group'>
								<div className='page-download-video__group-left'>
									<div className='page-download-video__group-image'>
										<img
											src='https://images.unsplash.com/photo-1646285105441-7f57244c4a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
											alt='video download'
										/>
									</div>
									<div className='page-download-video__group-smalltitle'>
										Outfit cực Fashion khiến các em gái mê
										#cris #crisphan #crisdevilgamer
									</div>
								</div>
								<div className='page-download-video__group-right'>
									<Tabs defaultActiveKey='MP4' size='large'>
										<TabPane tab='MP4' key='MP4'>
											<div className='list-file-video'>
												<div className='list-file-video__item'>
													<div className='list-file-video__item-title'>
														Watermark
													</div>
													<button
														className='list-file-video__item-button'
														onClick={showModal}
													>
														<FaDownload />
														Tải về
													</button>
												</div>
												<div className='list-file-video__item'>
													<div className='list-file-video__item-title'>
														Without Watermark
													</div>
													<button
														className='list-file-video__item-button'
														onClick={showModal}
													>
														<FaDownload />
														Tải về
													</button>
												</div>
											</div>
										</TabPane>
										<TabPane tab='MP3' key='MP3'>
											<div className='list-file-video'>
												<div className='list-file-video__item'>
													<div className='list-file-video__item-title'>
														192 kbps
													</div>
													<button
														className='list-file-video__item-button'
														onClick={showModal}
													>
														<FaDownload />
														Tải về
													</button>
												</div>
											</div>
										</TabPane>
									</Tabs>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default PageConvertVideo
