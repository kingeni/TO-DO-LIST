import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import myReducers from './reducers/index';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const store = createStore(myReducers);
ReactDOM.render(<Provider store={store} >
                <App />
                </Provider>,
    document.getElementById('root'));
registerServiceWorker();
