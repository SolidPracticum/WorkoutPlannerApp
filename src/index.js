import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './18n'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</Suspense>
	</React.StrictMode>,
)
