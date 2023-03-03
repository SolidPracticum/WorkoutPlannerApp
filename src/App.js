import React from 'react'
import { Route, Routes } from 'react-router-dom'

import FourthModal from './components/FourthModal'
import './App.scss'
function App() {
	return (
		<div className='App'>
			<Routes>
				
				<Route path='/fourth' element={<FourthModal />} />
			</Routes>
		</div>
	)
}

export default App
