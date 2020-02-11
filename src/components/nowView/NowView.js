import React, { Component } from 'react';
import { Card, Image, Col } from 'react-bootstrap'
import './NowView.css';

class NowView extends Component {


    render() {
        return (
            <div>
                <Card className="verticall_position marginleft1"  >
                    <Col className="verticall_position width45">
                        <Card.Body className="verticall_position narginleft widthCard1"  >

                            <Card.Title className='black big_text'>Warsaw</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted medium_text">Clear</Card.Subtitle>
                            <Card.Text className="small_text ">
                                <Image className="width75" src="/img/weather.svg" rounded />
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft">
                                <Image className="height08" src="/img/wind.svg" rounded />

                                7.5 km/h  </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft">
                            <Image className="height08" src="/img/panorama.svg" rounded />
                                115 km/h</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft">
                            <Image className="height08" src="/img/sunrise.svg" rounded />
                                07:00</Card.Subtitle>
                        </Card.Body>
                    </Col >
                    <Col className="verticall_position width45">
                        <Card.Body className="verticall_position narginleft widthCard1"  >

                            <Card.Title className="black big_text1 ">17  &deg;C</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted small_text heigh90 " ></Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft">
                            <Image className="height08" src="/img/humidity.svg" rounded />
                                56%</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft">
                            <Image className="height08" src="/img/meter.svg" rounded />
                                1013 hPa</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted medium_text textleft">
                            <Image className="height08" src="/img/sunset.svg" rounded />
                                19:21</Card.Subtitle>
                        </Card.Body>
                    </Col>

                </Card >



            </div >
        )
    }
}

export default NowView;