import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page404 from './components/Page404'
import languages from './assets/lang'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				{/* Routers by languages detector with language in language */}
				{languages.map((lang) => (
					<Route
						key={lang.code}
						path={`/${lang.code}`}
						element={<Home lang={lang.code} />}
					/>
				))}
				{/* Route anther page => page 404 */}
				<Route path='*' element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
