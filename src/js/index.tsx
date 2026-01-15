import React from "react";
import ReactDOM from "react-dom/client";
import '../css/index.css';

function App() {
  return (
    <div>
    <div>
        <h1>This project uses react + typescript</h1>
        <h2>It also uses this packages</h2>
        <ol>
            <li>@babel/core : for transpiling ecmascript to browser Compatible javascript.</li>
            <li>@babel/preset-env : option for setting up environment.</li>
            <li>@babel/preset-react : option for setting up react environment.</li>
            <li>babel-loader : loader for continous transpiling changes.</li>
            <li>@types/react : typescript for react.</li>
            <li>@types/react-dom : typescript for react-dom.</li>
            <li>ts-loader : typescript loader.</li>
            <li>typescript : typescript package.</li>
            <li>html-loader: for loading html files.</li>
            <li>css-loader : loader for css files.</li>
            <li>style-loader : loader for css changes.</li>
            <li>html-webpack-plugin : for loading html file.</li>
            <li>mini-css-extract-plugin : for creating external stylesheet for all css file.</li>
            <li>webpack : for bundling all loader and files.</li>
            <li>webpack-cli : for using command line options</li>
            <li>webpack-dev-server: for running webpack server</li>
        </ol>
    </div>
      <h1>Hello, World</h1>
    </div>
  );
}
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}

