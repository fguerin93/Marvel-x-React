import React from 'react'
import { Link } from 'react-router-dom'

import '../style/not-found.scss'

const NotFound = () => (
    <div className="not-found-container">
        <h1 className="title">Sorry, you will not found your hero in this page</h1>
        <Link to={{pathname:"/"}} className="link">Go back to home</Link>
    </div>
)

export default NotFound