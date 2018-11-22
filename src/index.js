import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import PageDatePicker from './views/demoPage/page-date-picker';
import PageImageFilter from './views/demoPage/page-image-filter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="date-picker" component={PageDatePicker} />
    <Route path="image-filter" component={PageImageFilter} />
</Router>, document.getElementById('root'));
registerServiceWorker();
