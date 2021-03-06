import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, Link } from 'react-router';
import './index.css';
import App from './App';
import PageAdDetail from './views/adDetail'
import PageDatePicker from './views/demoPage/page-date-picker';
import PageImageFilter from './views/demoPage/page-image-filter';
import PageAst from './views/demoPage/page-ast';
import PageDraft from './views/demoPage/page-draft';
import PageTemp from './views/demoPage/page-temp';
import PageComponents from './views/components';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={PageAdDetail} />
        <Route path="date-picker" component={PageDatePicker} />
        <Route path="image-filter" component={PageImageFilter} />
        <Route path="ast" component={PageAst} />
        <Route path="draft" component={PageDraft} />
        <Route path="temp" component={PageTemp} />
        <Route path="components" component={PageComponents} />
    </Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
