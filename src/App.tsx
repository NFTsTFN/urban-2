//recipe-helper/src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import BreakfastPage from './pages/DessertsPage/DessertsPage'
import SeafoodPage from './pages/SeafoodPage/SeafoodPage'
import RecipePage from './pages/RecipePage/RecipePage'
import DinnerPage from './pages/DinnerPage/DinnerPage'
import SaladsPage from './pages/SaladsPage/SaladsPage'
import BakingPage from './pages/BakingPage/BakingPage'
import LunchPage from './pages/LunchPage/LunchPage'
import ScrollPage from './pages/ScrollPage/ScrollPage'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './styles/global.css'

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/recipes' element={<RecipePage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
					<Route path='/breakfast' element={<BreakfastPage />} />
					<Route path='/lunch' element={<LunchPage />} />
					<Route path='/dinner' element={<DinnerPage />} />
					<Route path='/seafood' element={<SeafoodPage />} />
					<Route path='/salads' element={<SaladsPage />} />
					<Route path='/baking' element={<BakingPage />} />
					<Route path='/scroll' element={<ScrollPage />} />
					{/* Другие маршруты */}
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
