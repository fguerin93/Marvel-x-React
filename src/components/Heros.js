import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Heros extends Component {

    render () {
        return (
            <ul className="list-group">
                {this.props.items.map(hero => (
                    <li key={hero.id} className="list-group-item">
                        <Link
                            to={{
                                pathname:`/hero/${hero.id}`,
                                data: [
                                    this.props.items,
                                    hero.id
                                ],
                            }}
                        >
                            {hero.name}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Heros