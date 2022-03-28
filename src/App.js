import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				{/* Routers by languages detector */}
				<Route path='/:lang' element={<Home />} />
				{/* Route 404 */}
			</Routes>
		</BrowserRouter>
	)
}

export default App
