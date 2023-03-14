<<<<<<< HEAD
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
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./Firebase";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
>>>>>>> a40f76e2b8057304f07b0db0f7516de5d1ff4507
