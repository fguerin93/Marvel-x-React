import React from 'react'
import CryptoJS from 'crypto-js'
import moment from 'moment'
import { marvelApi as config } from '../config'

class MarvelApi extends React.Component {

    render() {
        const URI = '/v1/public/characters'
        const timeStamp = moment().unix()
        const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey).toString(CryptoJS.enc.Hex)

        let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}&limit=20`

        const url = `${config.baseUrl}${URI}${params}`

        return fetch('https://gateway.marvel.com:443/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b')
    }

}

export default MarvelApi