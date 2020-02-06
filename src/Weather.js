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
    getAllCities = () => {
        let link2 = 'current.city.list.json'
        let towns = []
        axios.get(link2)
            .then(res => {

                for (let j = 0; j < res.data.length; j++) {
                    towns[j] = res.data[j].name
                }
                this.setState({
                    cities: towns
                })

            })
    }
    filterCities = (data) => {
       
        let allCities = this.state.cities
        allCities = allCities.filter(miasta => {
            return (miasta.search(data) !== -1)
        })
        

        
        if (data == "") {
            this.setState({
                filteredCities2: []
            })
        }
        else {
        }
        this.setState({
            filteredCities2: allCities
        })
        
    }
    getCity = (dane) => {
      
        this.setState({
            city: dane.cities
        })
    }
    whichElement = (string) => {

        if (string === "00") {
            return 0
        }
        else if (string === "03") {
            return 1
        }
        else if (string === "06") {
            return 2
        }
        else if (string === "09") {
            return 3
        }
        else if (string === "12") {
            return 4
        }
        else if (string === "15") {
            return 5
        }
        else if (string === "18") {
            return 6
        }
        else if (string === "21") {
            return 7
        }
    }
    getBitWeatherData = () => {
        //let link = 'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=61cc394ed2a41ce5335ec0ffb1e171ac'
        let link = 'test.json'
        axios.get(link)
            .then(res => {
                let listLen = res.data.list.length
                let dzisData = this.state.yyyy + '-' + this.state.mm + '-' + this.state.dd
                let jutroData = this.state.yyyy + '-' + this.state.mm + '-' + String(parseInt(this.state.dd) + 1).padStart(2, '0')
                let pojutrzeData = this.state.yyyy + '-' + this.state.mm + '-' + String(parseInt(this.state.dd) + 2).padStart(2, '0')
                let za3dniData = this.state.yyyy + '-' + this.state.mm + '-' + String(parseInt(this.state.dd) + 3).padStart(2, '0')
                let za4dniData = this.state.yyyy + '-' + this.state.mm + '-' + String(parseInt(this.state.dd) + 4).padStart(2, '0')


                for (let i = 0; i < listLen; i++) {

                    switch (res.data.list[i].dt_txt.substring(0, 10)) {
                        case dzisData:

                            break;
                        case jutroData:

                            break;
                        case pojutrzeData:

                            break;
                        case za3dniData:

                            break;
                        case za4dniData:

                            break;
                        default:
                    }
                }
            })
    }

    // ON COMPONENENT LOAD START FUNCTION
    componentDidMount = () => {
        this.getBitWeatherData()
        //this.getAllCities() 
    
    }


render(){

    return (
        <div>
            <br></br>
            <SearchInput citySearchFunc={this.filterCities}  />
            <br></br>
            <SearchResult cityGetFuncProps={this.getCity} cityListProps={this.state.filteredCities2} />
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