import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseItem'
import expenseSelector from '../selectors/expenses'

function ExpensesList(props) {
    return (
        <div>
            <h2> Expenses List </h2>
            {
                props.expenses.map(expense => {
                    return (
                        <ExpenseItem key={expense.id} {...expense} />
                    )
                })
            }
        </div>
    )
}

export default connect((state) => {
    return {
        expenses: expenseSelector(state.expenses, state.filters)
    }
})(ExpensesList);