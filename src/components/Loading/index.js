import React from 'react'
import { Space, Spin } from 'antd'

const Loading = () => {
	return (
		<div>
			{/* Loading fallback */}
			<Space
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Spin size='large' />
				<Spin size='large' />
				<Spin size='large' />
			</Space>
		</div>
	)
}

export default Loading
