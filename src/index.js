import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import "react-multi-carousel/lib/styles.css";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
 

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}

.wrapper {
    max-width: 1220px;
    margin: 0 auto;
	padding: 0 40px;
}
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
