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
>>>>>>> 8d7356e53a762cd89b194294d512d6d6a66f1571
