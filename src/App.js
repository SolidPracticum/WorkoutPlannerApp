import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FourthModal from './components/FourthModal'
import './App.scss'
import RegisterPage from './components/RegisterPage/RegisterPage'
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/fourth' element={<FourthModal />} />
				<Route path='/register' element={<RegisterPage />} />
			</Routes>
		</div>
	)
}

export default App
