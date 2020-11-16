import React from 'react';
import ReactDOM from'react-dom';
import './styles.css'
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import App from './Component/App';
import {Provider} from 'react-redux';

const store=createStore(rootReducer);


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'))