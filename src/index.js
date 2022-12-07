import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Newsstate from './Newsstate/Newsstate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Newsstate>
    <App />
    </Newsstate>
 
);

