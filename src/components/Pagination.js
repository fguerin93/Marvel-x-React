import React, { Component } from 'react'

import '../style/pagination.scss'

class Pagination extends Component {

    render() {
        const pageNumbers = []

        for(let i = 1; i <= Math.ceil(this.props.totalHeros/this.props.herosPerPage); i++) {
            pageNumbers.push(i)
        }

        return (
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <p data-number={number} onClick={this.props.updatePage} className="page-link">{number}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Pagination