import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/))
            this.setState(() => ({ amount }));
    }


    onDateChangeHandler = (createdAt) => {
        this.setState(() => ({
            createdAt
        }))
    }

    onFocusChangeHandler = ({ focused }) => {
        this.setState(() => ({
            calenderFocused: focused
        }))
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount)
            this.setState(() => ({
                error: 'Please fill in the required blanks'
            }))
        else
            this.setState(() => ({
                error: ''
            }))
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        })
    }

    render() {
        return (
            <div>
                <h2> Expense Form </h2>
                {this.state.error && <p> {this.state.error} </p>}
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />

                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChangeHandler}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChangeHandler}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />

                    <textarea
                        placeholder="Add a note for your expense (Optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >

                    </textarea>

                    <button> Add Expense </button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm