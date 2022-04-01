import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import 'flag-icons/css/flag-icons.min.css'
import './assets/css/reset.css'
import './assets/css/index.css'

import './i18n'

import Loading from './components/Loading'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<Loading />}>
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root')
)
