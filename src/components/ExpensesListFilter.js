import React from 'react'
import { connect } from 'react-redux'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'


class ExpensesListFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calenderFocus: null
        }

        this.onFocusChange = this.onFocusChange.bind(this);
        this.onDatesChange = this.onDatesChange.bind(this);
    }

    onDatesChange({ startDate, endDate }) {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange(calenderFocus) {
        this.setState(() => ({
            calenderFocus
        }))
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
                />

                <select
                    value={this.props.filters.sortBy}
                    onChange={
                        (e) => {
                            if (e.target.value === 'amount')
                                this.props.dispatch(sortByAmount());
                            else if (e.target.value === 'date')
                                this.props.dispatch(sortByDate());
                        }
                    }
                >
                    <option value="date"> Date </option>
                    <option value="amount"> Amount </option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId='startDate'
                    endDate={this.props.filters.endDate}
                    endDateId='endDate'
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocus}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpensesListFilter);