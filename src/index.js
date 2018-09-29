import React from "react"
import ReactDOM from "react-dom"

import AppView from "./App"

import "./styles.css"

function App() {
	return (
		<div className="App">
			<AppView />
		</div>
	)
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
