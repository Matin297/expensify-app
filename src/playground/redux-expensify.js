import { createStore, combineReducers } from 'redux'

store.subscribe(() => {
    const state = store.getState();
    const filtered = getFilteredExpenses(state.expenses, state.filters);
    console.log(filtered);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 10 }));

// store.dispatch(removeExpense(expenseOne.expense.id));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 600 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(2));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(20));

const demoState = {
    expenses: [
        {
            id: 'qwertyuikmnbvcdfg',
            description: 'january rent',
            note: 'something a little more long winded',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}