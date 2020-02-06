import React, { Component } from 'react';
import axios from 'axios'
import { Accordion, Card } from 'react-bootstrap'
import './Weather.css';
import SearchInput from './components/searchInput/SearchInput'
import SearchResult from './components/searchResult/SearchResult'
import WeatherView from './components/watcherView/WeatherView'


class Weather extends Component {

    constructor(props) {
        super(props)
        let today = new Date();

        this.state = {
            dzis: today,
            dd: String(today.getDate()).padStart(2, '0'),
            mm: String(today.getMonth() + 1).padStart(2, '0'),
            yyyy: today.getFullYear(),
            city: 'Warsaw',
            dzisArr: [],
            jutroArr: [],
            pojutrzeArr: [],
            dni3Arr: [],
            dni4Arr: [],
            cities: ['Warszawa', 'Lublin', 'San Diego', 'Pruszkow'],
            filteredCities2: []
        }
    }

   


render(){

    return (
        <div>
            <br></br>
            <SearchInput />
            <br></br>
            <SearchResult  />
            <br></br>

            <Accordion className='width75' defaultActiveKey="0">
                <Card className='width75'>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <h2 className='black'>Dzisiaj</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="ceneter"><WeatherView /></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='width75'>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <h2 className='black'>Jutro</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="ceneter"><WeatherView /></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='width75'>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <h2 className='black'>Pojutrze</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="ceneter"><WeatherView /></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='width75'>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        <h2 className='black'>Za 3dni</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="ceneter"><WeatherView /></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='width75'>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        <h2 className='black'>Za 4dni</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className="ceneter"><WeatherView /></Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>




        </div>
    )
}

}
export default Weather;