import React, { useState } from 'react'
import './PageConvertVideo.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import getIdVideo from '../../utils/getIdVideo'
import axios from 'axios'
import { showErrorMsg } from '../../utils/notification'
import { FaDownload } from 'react-icons/fa'
import { Tabs, Space, Spin } from 'antd'
import { saveAs } from 'file-saver'

const { TabPane } = Tabs

const Loading = () => {
	return (
		<Space
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Spin size='large' />
			<Spin size='large' />
			<Spin size='large' />
		</Space>
	)
}

const PageConvertVideo = () => {
	const [visibleBlockDownload, setVisibleBlockDownload] = useState(false)
	const [link, setLink] = useState('')
	const [desc, setDesc] = useState('')
	const [image, setImage] = useState('')
	const [loading, setLoading] = useState(false)
	const [watermark, setWatermark] = useState('')
	const [withoutWatermark, setWithoutWatermark] = useState('')

	const { t } = useTranslation()

	console.log({ watermark })
	console.log({ withoutWatermark })

	const saveFileVideo = async (link) => {
		await axios
			.get(
				link,
				{
					responseType: 'blob',
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
				}
			)
			.then((response) => {
				const blob = new Blob([response.data], { type: 'video/mp4' })
				// filename base on the time
				const filename = `video-${new Date().getTime()}.mp4`
				saveAs(blob, filename)
			})
	}

	const fetchLink = async (id) => {
		try {
			const response = await axios.get(
				`/getLink?awemeId=${id}`,
				{
					link,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			return response
		} catch (error) {
			console.log(error)
		}
	}

	const handleShowBlockDownload = async () => {
		setVisibleBlockDownload(false)
		setLoading(true)
		setWatermark('')
		setWithoutWatermark('')

		const id = getIdVideo(link)
		let response

		if (id === null) {
			showErrorMsg('Rất tiêc, bạn chưa điền link hoặc link không hợp lệ!')
			setLoading(false)
		} else {
			response = await fetchLink(id)
			// check response
			if (response.data.aweme_detail !== null) {
				setLoading(false)
				// check desc
				if (
					response.data.aweme_detail.desc !== null &&
					response.data.aweme_detail.desc !== undefined
				) {
					setDesc(response.data.aweme_detail.desc)
				}
				// check image
				if (response.data.aweme_detail.video.origin_cover !== null) {
					setImage(
						response.data.aweme_detail.video.origin_cover
							.url_list[0]
					)
				}
				// check watermark
				if (
					response.data.aweme_detail.video.download_suffix_logo_addr
				) {
					setWatermark(
						response.data.aweme_detail.video
							.download_suffix_logo_addr.url_list[0]
					)
				}
				if (response.data.aweme_detail.video.download_addr) {
					setWatermark(
						response.data.aweme_detail.video.download_addr
							.url_list[0]
					)
				}
				// check without watermark
				if (response.data.aweme_detail.video.play_addr) {
					setWithoutWatermark(
						response.data.aweme_detail.video.play_addr.url_list[0]
					)
				}

				setVisibleBlockDownload(true)
			} else {
				showErrorMsg('Rất tiêc, đường dẫn video không hợp lệ!')
			}
		}
	}

	return (
		<>
			<div className='page-convert-video'>
				<div className='page-convert-video__wrapper'>
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
							value={link}
							onChange={(e) => setLink(e.target.value)}
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

					{loading && <Loading />}
					{visibleBlockDownload && (
						<div className='page-download-video'>
							<div className='page-download-video__title'>
								{desc}
							</div>
							<div className='page-download-video__group'>
								<div className='page-download-video__group-left'>
									<div className='page-download-video__group-image'>
										<img src={image} alt='video download' />
									</div>
									<div className='page-download-video__group-smalltitle'>
										{desc}
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
														onClick={() =>
															saveFileVideo(
																watermark
															)
														}
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
														onClick={() =>
															saveFileVideo(
																withoutWatermark
															)
														}
													>
														<FaDownload />
														Tải về
													</button>
												</div>
											</div>
										</TabPane>
										{/* <TabPane tab='MP3' key='MP3'>
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
                              </TabPane> */}
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
