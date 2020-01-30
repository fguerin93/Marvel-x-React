import React, { Component } from 'react'
// import MarvelApi from '../services/MarvelApi'

import CryptoJS from 'crypto-js'
import moment from 'moment'
import { marvelApi as config } from '../config'

import Heros from './Heros'
import Pagination from './Pagination'

import logoMarvel from '../assets/logo_marvel.svg'

import '../style/list.scss'

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
            currentPage: 1,
            herosPerPage: 10
        }
    }

    getUrl = () => {
        const URI = '/v1/public/characters'
        const timeStamp = moment().unix()
        const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey).toString(CryptoJS.enc.Hex)

        let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}&limit=86`

        const url = `${config.baseUrl}${URI}${params}`

        return url
    }

    getAllCharacters = () => {
        fetch(this.getUrl())
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            })
    }

    clickOnHero = (e) => {
        const newPage = e.target.dataset.number
        this.setState({
            currentPage: newPage
        })
    }

    componentDidMount() {
        this.getAllCharacters()
    }

    render() {

        let { isLoaded, items, currentPage, herosPerPage } = this.state

        if (!isLoaded) {
            return (
                <div className="logo-container">
                    <img src={logoMarvel} alt="logo marvel" className="logo-loading"/>
                </div>
            )
        }

        if (isLoaded) {
            
            const indexOfLastHero = currentPage * herosPerPage
            const indexOfFirstHero = indexOfLastHero - herosPerPage

            //select the hero that will be displayed on the list
            const currentHeros = items.data.results.slice(indexOfFirstHero,indexOfLastHero)
            
            return (
                <div className="hero-list-container">
                    <h1 className="title">Marvel Super Hero List</h1>
                    <div className="top-container">
                        <Heros items={currentHeros}></Heros>
                    </div>
                    <div className="bottom-container">
                        <Pagination herosPerPage={herosPerPage} totalHeros={items.data.results.length} updatePage={this.clickOnHero}></Pagination>
                    </div>
                </div>
            )
        }
    }
}

export default List