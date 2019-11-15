import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouters from './routes/AppRouter'
import configStore from './configStore/configStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configStore();

console.log('from app.js');

ReactDOM.render(
    <Provider store={store}>
        <AppRouters />
    </Provider>
    , document.getElementById('root')
);