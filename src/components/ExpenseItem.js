import React from 'react'
import { Link } from 'react-router-dom'

function ExpenseItem({ id, description, amount, createdAt }) {
    return (
        <div>
            <Link to={"/edit/" + id}> <h3> {description} </h3> </Link>

            <p> {amount} - {createdAt} </p>
            <br />
        </div>
    )
}

export default ExpenseItem