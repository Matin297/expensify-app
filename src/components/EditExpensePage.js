import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

function EditExpensePage(props) {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.match.params.id, expense));
                    props.history.push('/');
                }}
            />

            <button
                onClick={() => {
                    props.dispatch(removeExpense(props.expense.id));
                    props.history.push('/')
                }}
            >
                Remove The Expense
            </button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)