import React from 'react'
import './Tutorial.css'
import { BiCopy } from 'react-icons/bi'
import { GiClick } from 'react-icons/gi'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const Tutorial = () => {
	const { t } = useTranslation()

	return (
		<div className='tutorial wrapper'>
			<div className='tutorial__title'>{t('tutorial__title')}</div>
			<div className='tutorial__subtitle'>{t('tutorial__subtitle')}</div>
			<div className='tutorial__steps'>
				<div className='tutorial__step'>
					<div className='tutorial__step-icon'>
						<BiCopy />
					</div>
					<div className='tutorial__step-title'>
						{t('tutorial__steps.1.tutorial__step-title')}
					</div>
					<div className='tutorial__desc'>
						{t('tutorial__steps.1.tutorial__desc')}
					</div>
				</div>
				<div className='tutorial__step'>
					<div className='tutorial__step-icon'>
						<GiClick />
					</div>
					<div className='tutorial__step-title'>
						{t('tutorial__steps.2.tutorial__step-title')}
					</div>
					<div className='tutorial__desc'>
						{t('tutorial__steps.2.tutorial__desc')}
					</div>
				</div>
				<div className='tutorial__step'>
					<div className='tutorial__step-icon'>
						<AiOutlineCloudDownload />
					</div>
					<div className='tutorial__step-title'>
						{t('tutorial__steps.3.tutorial__step-title')}
					</div>
					<div className='tutorial__desc'>
						{t('tutorial__steps.3.tutorial__desc')}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tutorial
