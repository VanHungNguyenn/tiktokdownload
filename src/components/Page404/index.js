import React from 'react'
import { Result, Button } from 'antd'

const Page404 = () => {
	return (
		<Result
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
			status='404'
			title='404'
			subTitle='Sorry, the page you visited does not exist.'
			extra={
				<Button
					type='primary'
					onClick={() => {
						window.location.href = '/'
					}}
				>
					Back Home
				</Button>
			}
		/>
	)
}

export default Page404
