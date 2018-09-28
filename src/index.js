import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import PageDatePicker from './views/demoPage/page-date-picker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="date-picker" component={PageDatePicker} />
</Router>, document.getElementById('root'));
registerServiceWorker();
