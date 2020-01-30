import React, { Component } from 'react'

class DataList extends Component {

    render () {
        if (this.props.data.length === 0) {
            // in case there is no event/comic/serie data in the database
            return (
                <ul className="list-group">
                    <li className="list-group-item">There's no data in this list</li>
                </ul>
            )
        }
        else {
            return (
                <ul className="list-group">
                    {this.props.data.map((data, i) => (
                        <li key={i} className="list-group-item">
                            {data.name}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default DataList