import moment from 'moment'
// get filtered data

const getFilteredExpenses = (expenses, { endDate, startDate, text, sortBy }) => {
    return expenses.filter(expense => {
        const createdAt = moment(expense.createdAt);
        const matchEndDate = endDate ? endDate.isSameOrAfter(createdAt) : true;
        const matchStartDate = startDate ? startDate.isSameOrBefore(createdAt) : true;
        const matchText = expense.description.toLowerCase().includes(text.toLowerCase());

        return matchEndDate && matchStartDate && matchText;
    }).sort((a, b) => {
        if (sortBy == 'date')
            return a.createdAt < b.createdAt ? 1 : -1;

        if (sortBy == 'amount')
            return a.amount < b.amount ? 1 : -1;
    })
}

export default getFilteredExpenses;