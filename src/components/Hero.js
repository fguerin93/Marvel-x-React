import React, { Component } from 'react'

import '../style/hero.scss'

import DataList from './DataList'

import logoMarvel from '../assets/logo_marvel.svg'

class Hero extends Component {

    constructor(props) {
        super(props)
        this.state = {
            heroData: [],
            heroChoosedId: 0,
            isLoaded: false
        }
    }

    getHeroData = () => {
        const data = this.props.location.data
        
        if (data) {
            const results = data[0]
            const heroChoosedId = data[1]
            let heroData = []

            //Select hero choosed data from all the API datas
            results.forEach((hero, index) => {
                if (hero.id === heroChoosedId) {
                    heroData = results[index]
                }
            });

            this.setState({
                heroData,
                heroChoosedId,
                isLoaded: true
            })

            // Put hero choosed data in Local Storage
            localStorage.setItem('heroData', JSON.stringify(heroData))
        }
        else {

            // Get hero choosed data from Local Storage in case users refreshed the page
            const heroData = JSON.parse(localStorage.getItem('heroData'))
            const heroChoosedId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

            this.setState({
                heroData,
                heroChoosedId,
                isLoaded: true
            })
        }
    }

    componentDidMount() {
        this.getHeroData()
    }

    render() {

        let { heroData, isLoaded } = this.state

        if (!isLoaded) {
            return (
                <div className="logo-container">
                    <img src={logoMarvel} alt="logo marvel" className="logo-loading"/>
                </div>
            )
        }
        if (isLoaded) {
            return (
                <div className="hero-container">
                    <div className="top-container">
                        <div className="name-description">
                            <h1 className="name">{heroData.name}</h1>
                            <p className="description">{heroData.description}</p>
                        </div>
                        <img className="image" src={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`} alt=""/>
                    </div>
                    <div className="list-container">
                        <div className="title">Comics List</div>
                        <DataList data={heroData.comics.items}></DataList>
                    </div>
                    <div className="list-container">
                        <div className="title">Series List</div>
                        <DataList data={heroData.series.items}></DataList>
                    </div>
                    <div className="list-container">
                        <div className="title">Events List</div>
                        <DataList data={heroData.events.items}></DataList>
                    </div>
                </div>
            )
        }
    }
}

export default Hero