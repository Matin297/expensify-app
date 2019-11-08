import React from 'react'
import ExpensesList from './ExpensesList'
import ExpensesListFilter from './ExpensesListFilter'

function ExpenseDashboardPage() {
    return (
        <div>
            <ExpensesListFilter />
            <p> from dashboard page </p>
            <ExpensesList />
        </div>
    )
}

export default ExpenseDashboardPage