import React from 'react'
import './Tutorial.css'
import { BiCopy } from 'react-icons/bi'
import { GiClick } from 'react-icons/gi'
import { AiOutlineCloudDownload } from 'react-icons/ai'

const Tutorial = () => {
	return (
		<div className='tutorial wrapper'>
			<div className='tutorial__title'>
				Cách tải Video YouTube Trực Tuyến
			</div>
			<div className='tutorial__subtitle'>
				Dễ dàng tải video trên Youtube hoặc chuyển video YouTube sang
				MP3 với ba bước đơn giản
			</div>
			<div className='tutorial__steps'>
				<div className='tutorial__step'>
					<div className='tutorial__step-icon'>
						<BiCopy />
					</div>
					<div className='tutorial__step-title'>
						BƯỚC 1: SAO CHÉP URL
					</div>
					<div className='tutorial__desc'>
						Mở liên kết Youtube và sao chép đường dẫn video bạn muốn
						tải về thiết bị
					</div>
				</div>
				<div className='tutorial__step'>
					<div className='tutorial__step-icon'>
						<GiClick />
					</div>
					<div className='tutorial__step-title'>
						BƯỚC 2: CHỌN CHẤT LƯỢNG
					</div>
					<div className='tutorial__desc'>
						Dán URL video Youtube và nhấn "Lấy link video", chọn
						chất lượng hoặc định dạng file tương ứng
					</div>
				</div>
				<div className='tutorial__step'>
					<div className='tutorial__step-icon'>
						<AiOutlineCloudDownload />
					</div>
					<div className='tutorial__step-title'>
						BƯỚC 3: TẢI VIDEO TỪ YOUTUBE HOẶC YOUTUBE TO MP3
					</div>
					<div className='tutorial__desc'>
						Nhấn "Tải file MP3" hoặc "Tải xuống video HD/4K" để lưu
						file trên thiết bị của bạn
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tutorial
