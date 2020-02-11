import React, { Component } from 'react';
import axios from 'axios'
import { Accordion, Card } from 'react-bootstrap'
import './Weather.css';
import SearchInput from './components/searchInput/SearchInput'
import SearchResult from './components/searchResult/SearchResult'
import WeatherView from './components/watcherView/WeatherView'
import NowView from './components/nowView/NowView'


class Weather extends Component {

    constructor(props) {
        super(props)
        let today = new Date();

        this.state = {
            dzis: today,
            dd: "05",
           // dd: String(today.getDate()).padStart(2, '0'),
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
    createObjectWeather = (temperatura, odczuwalna, cisnienie, wilgotnosc, idek, opis, chmury, wiatr) => {

        let wynik = {temp: temperatura ,
            temp_feel: odczuwalna,
            press: cisnienie,
            humidity: wilgotnosc,
            id: idek,
            description: opis.replace(/\w\S*/g, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}).trim(),
            cloud: chmury,
            wind: wiatr
         }
        
        return wynik

    }
    getBitWeatherData = () => {
        //let link = 'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=61cc394ed2a41ce5335ec0ffb1e171ac'
        let link = 'test.json'
        axios.get(link)
            .then(res => {
                // DATY
                let listLen = res.data.list.length
                let dzisData = this.state.yyyy + '-' + this.state.mm + '-' + this.state.dd
                let jutroData = this.state.yyyy + '-' + this.state.mm + '-' + String(parseInt(this.state.dd) + 1).padStart(2, '0')
                let pojutrzeData = this.state.yyyy + '-' + this.state.mm + '-' + String(parseInt(this.state.dd) + 2).padStart(2, '0')
                let za3dniData = this.state.yyyy + '-' + this.state.mm + '-' + String(parseInt(this.state.dd) + 3).padStart(2, '0')
                let za4dniData = this.state.yyyy + '-' + this.state.mm + '-' + String(parseInt(this.state.dd) + 4).padStart(2, '0')
                // PUSTE WEJŚCIOWE TABLICE
                let dzisArrr = ["", "", "", "", "", "", ""]
                let jutroArrr = ["", "", "", "", "", "", ""]
                let pojutrzeArrr = ["", "", "", "", "", "", ""]
                let dni3Arrr = ["", "", "", "", "", "", ""]
                let dni4Arrr = ["", "", "", "", "", "", ""]
                // WYPELNIONE TABLICE PUSTYMI OBIEKTAMI
                dzisArrr = dzisArrr.map(() => {
                    return this.createObjectWeather("--", "--", "--", "--%","00000","--","--", "--")
                })
                jutroArrr = jutroArrr.map(() => {
                    return this.createObjectWeather("--", "--", "--", "--%","00000","--","--", "--")
                })
                pojutrzeArrr = pojutrzeArrr.map(() => {
                    return this.createObjectWeather("--", "--", "--", "--%","00000","--","--", "--")
                })
                dni3Arrr = dni3Arrr.map(() => {
                    return this.createObjectWeather("--", "--", "--", "--%","00000","--","--", "--")
                })
                dni4Arrr = dni4Arrr.map(() => {
                    return this.createObjectWeather("--", "--", "--", "--%","00000","--","--", "--")
                })
                




                for (let i = 0; i < listLen; i++) {
                    //POMOCNICZE ZMIENNE
                    let temp_now = res.data.list[i].main.temp - 273.15
                    let temp_f_now = res.data.list[i].main.feels_like - 273.15
                    let wilgotn = res.data.list[i].main.humidity + '%'
                    let cisnien = res.data.list[i].main.pressure
                    let ident = res.data.list[i].weather[0].id
                    let opis_pogody = res.data.list[i].weather[0].description
                    let chmurki = res.data.list[i].clouds.all
                    let wiater = (res.data.list[i].wind.speed)*3.6



                    let hour = res.data.list[i].dt_txt.substring(11, 13)
                    let element = this.whichElement(hour)

                    switch (res.data.list[i].dt_txt.substring(0, 10)) {
                        case dzisData:
                            dzisArrr[element] = this.createObjectWeather(temp_now, temp_f_now, cisnien, wilgotn, ident, opis_pogody,chmurki, wiater)
                            break;
                        case jutroData:
                            jutroArrr[element] = this.createObjectWeather(temp_now, temp_f_now, cisnien, wilgotn, ident, opis_pogody,chmurki, wiater)
                            break;
                        case pojutrzeData:
                            pojutrzeArrr[element] = this.createObjectWeather(temp_now, temp_f_now, cisnien, wilgotn, ident, opis_pogody,chmurki, wiater)
                            break;
                        case za3dniData:
                            dni3Arrr[element] = this.createObjectWeather(temp_now, temp_f_now, cisnien, wilgotn, ident, opis_pogody,chmurki, wiater)
                            break;
                        case za4dniData:
                            dni4Arrr[element] = this.createObjectWeather(temp_now, temp_f_now, cisnien, wilgotn, ident, opis_pogody,chmurki, wiater)
                            break;
                        default:
                    }
                }

                //USTAW STATE

                this.setState({
                    dzisArr: dzisArrr,
                    jutroArr: jutroArrr,
                    pojutrzeArr: pojutrzeArrr,
                    dni3Arr: dni3Arrr,
                    dni4Arr: dni4Arrr,
                })
               
            })
    }

    // ON COMPONENENT LOAD START FUNCTION
    componentDidMount = () => {
        this.getBitWeatherData()
        //this.getAllCities() 

    }


    render() {

        return (
            <div>
                <br></br>
                <SearchInput citySearchFunc={this.filterCities} />
                <br></br>
                <SearchResult cityGetFuncProps={this.getCity} cityListProps={this.state.filteredCities2} />
                <br></br>
                <NowView/>
                <br></br>

                <Accordion className='width75' defaultActiveKey="0">
                    <Card className='width75'>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h2 className='black'>Today</h2>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="ceneter"><WeatherView weatherDataProps={this.state.dzisArr} /></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className='width75'>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <h2 className='black'>Tommorrow</h2>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="ceneter"><WeatherView weatherDataProps={this.state.jutroArr} /></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className='width75'>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <h2 className='black'>In 2 days</h2>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="ceneter"><WeatherView weatherDataProps={this.state.pojutrzeArr}  /></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className='width75'>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <h2 className='black'>In 3 days</h2>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="ceneter"><WeatherView weatherDataProps={this.state.dni3Arr} /></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className='width75'>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            <h2 className='black'>In 4 days</h2>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className="ceneter"><WeatherView weatherDataProps={this.state.dni4Arr} /></Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>




            </div>
        )
    }

}
export default Weather;