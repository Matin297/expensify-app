import React from 'react'
import { Link } from 'react-router-dom'


function NotFoundPage() {
    return (
        <p>
            404! - <Link to="/"> Go Home </Link>
        </p>
    )
}

export default NotFoundPage