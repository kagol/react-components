import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, Link } from 'react-router';
import './index.css';
import App from './App';
import PageAdDetail from './views/adDetail'
import PageDatePicker from './views/demoPage/page-date-picker';
import PageImageFilter from './views/demoPage/page-image-filter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={PageAdDetail} />
        <Route path="date-picker" component={PageDatePicker} />
        <Route path="image-filter" component={PageImageFilter} />
    </Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
