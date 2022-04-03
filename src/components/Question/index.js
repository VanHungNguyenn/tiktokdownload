import React from 'react'
import './Question.css'
import { useTranslation } from 'react-i18next'

import { Collapse } from 'antd'

const { Panel } = Collapse

const domain = window.location.hostname

const Question = () => {
	const { t } = useTranslation()

	return (
		<div className='question wrapper'>
			<div className='question__title'>
				{t('question__title', {
					domain,
				})}
			</div>
			<div className='question__subtitle'>
				{t('question__subtitle', {
					domain,
				})}
			</div>
			<div className='question__list'>
				<Collapse accordion>
					{/* loop 6 */}
					{[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
						return (
							<Panel
								header={t(
									`question__list.${item}.question__item-ask`,
									{
										domain,
									}
								)}
								key={index}
							>
								<p>
									{t(
										`question__list.${item}.question__item-answer`,
										{
											domain,
										}
									)}
								</p>
							</Panel>
						)
					})}
				</Collapse>
			</div>
		</div>
	)
}

export default Question
