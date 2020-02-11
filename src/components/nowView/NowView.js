import React, { Component } from 'react';
import { Card, Image, Col } from 'react-bootstrap'
import './NowView.css';

class NowView extends Component {


    render() {

        let weather_img = {
            i200: 'thunder.svg',
            i201: 'thunder.svg',
            i202: 'thunder.svg',
            i210: 'thunder.svg',
            i211: 'thunder.svg',
            i212: 'thunder.svg',
            i221: 'thunder.svg',
            i230: 'thunder.svg',
            i231: 'thunder.svg',
            i232: 'thunder.svg',
            i300: 'rainy-2.svg',
            i301: 'rainy-2.svg',
            i302: 'rainy-3.svg',
            i310: 'rainy-2.svg',
            i311: 'rainy-2.svg',
            i312: 'rainy-3.svg',
            i313: 'rainy-2.svg',
            i314: 'rainy-3.svg',
            i321: 'rainy-2.svg',
            i500: 'rainy-4.svg',
            i501: 'rainy-4.svg',
            i502: 'rainy-5.svg',
            i503: 'rainy-6.svg',
            i504: 'rainy-7.svg',
            i511: 'rainy-7.svg',
            i520: 'rainy-5.svg',
            i521: 'rainy-6.svg',
            i522: 'rainy-7.svg',
            i531: 'rainy-7.svg',
            i600: 'snowy-4.svg',
            i601: 'snowy-1.svg',
            i602: 'snowy-6.svg',
            i611: 'snowy-5.svg',
            i612: 'snowy-4.svg',
            i613: 'snowy-2.svg',
            i615: 'snowy-2.svg',
            i616: 'snowy-2.svg',
            i620: 'snowy-2.svg',
            i621: 'snowy-1.svg',
            i622: 'snowy-3.svg',
            i701: 'mist.png',
            i711: 'fog.png',
            i721: 'haze.png',
            i731: 'sand.png',
            i741: 'fog.png',
            i751: 'sand.png',
            i761: 'sand.png',
            i762: 'volcano.png',
            i771: 'thunder.svg',
            i781: 'tornado.png',
            i800: 'day.svg',
            i801: 'cloudy-day-1.svg',
            i802: 'cloudy-day-2.svg',
            i803: 'cloudy-day-3.svg',
            i804: 'cloudy.svg',
            i00000: 'weather.svg'
        }





        return (
            <div>
                <Card className="verticall_position marginleft1"  >
                    <Col className="verticall_position width45">
                        <Card.Body className="verticall_position narginleft widthCard2"  >

                            <Card.Title className='black big_text'>{this.props.cityProps}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted medium_text">{this.props.weatherNowDataProps.desc}</Card.Subtitle>
                            <Card.Text className="small_text ">
                                <Image className="width75" src={"/img/" + weather_img["i" +this.props.weatherNowDataProps.id]} rounded />
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft padleft">

                                <Image className="height08" src="/img/wind.svg" rounded />
                                {this.props.weatherNowDataProps.wind} km/h  </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft padleft">

                                <Image className="height08" src="/img/panorama.svg" rounded />
                                {this.props.weatherNowDataProps.visibili} km</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft padleft">

                                <Image className="height08" src="/img/sunrise.svg" rounded />
                                {this.props.weatherNowDataProps.sunrise}</Card.Subtitle>
                        </Card.Body>
                    </Col >
                    <Col className="verticall_position width45">
                        <Card.Body className="verticall_position narginleft widthCard1"  >

                            <Card.Title className="black big_text1 ">{this.props.weatherNowDataProps.temp}  &deg;C</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted small_text heigh90 " ></Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft">
                                <Image className="height08" src="/img/humidity.svg" rounded />

                                {this.props.weatherNowDataProps.humidi}%</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft">

                                <Image className="height08" src="/img/meter.svg" rounded />
                                {this.props.weatherNowDataProps.press} hPa</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft">

                                <Image className="height08" src="/img/sunset.svg" rounded />
                                {this.props.weatherNowDataProps.sunset}</Card.Subtitle>
                        </Card.Body>
                    </Col>

                </Card >



            </div >
        )
    }
}

export default NowView;