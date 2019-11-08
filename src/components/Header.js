import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1> Expensify </h1>
            <NavLink exact to="/" activeClassName="active-link"> Home </NavLink>
            <NavLink to="/create" activeClassName="active-link"> Create Expense </NavLink>
            <NavLink to="/help" activeClassName="active-link"> Help </NavLink>
        </header>
    )
}

export default Header