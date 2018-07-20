import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main/Main';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
<Router>
<Main />
</Router>, document.getElementById('root')
);
registerServiceWorker();
