import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouters from './routes/AppRouter'
import configStore from './configStore/configStore'
import { addExpense } from './actions/expenses.js'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 200 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 10111, createdAt: -2000000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 102000, createdAt: 1000 }))

ReactDOM.render(
    <Provider store={store}>
        <AppRouters />
    </Provider>
    , document.getElementById('root')
);