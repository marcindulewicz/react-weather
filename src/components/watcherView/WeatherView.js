import React, { Component } from 'react';
import {Card, Image} from 'react-bootstrap'
import './WeatherView.css';


class WeatherView extends Component {

    render() {

        return (
            <div className="verticall_position width100">

                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>00:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">Słonecznie</Card.Subtitle>
                        <Card.Text className="small_text">
                        <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted small_text">Siła wiatru:</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">Ciśnienie:</Card.Subtitle>
                
                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard" >
                        <Card.Title className='black big_text'>03:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">Słonecznie</Card.Subtitle>
                        <Card.Text className="small_text">
                        <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted small_text">Siła wiatru:</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">Ciśnienie:</Card.Subtitle>
              
                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>06:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">Słonecznie</Card.Subtitle>
                        <Card.Text className="small_text">
                        <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted small_text">Siła wiatru:</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">Ciśnienie:</Card.Subtitle>
     
                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard" >
                        <Card.Title className='black big_text'>09:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">Słonecznie</Card.Subtitle>
                        <Card.Text className="small_text">
                        <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted small_text">Siła wiatru:</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">Ciśnienie:</Card.Subtitle>
            
                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>12:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">Słonecznie</Card.Subtitle>
                        <Card.Text className="small_text">
                        <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted small_text">Siła wiatru:</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">Ciśnienie:</Card.Subtitle>

                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>15:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">Słonecznie</Card.Subtitle>
                        <Card.Text className="small_text">
                        <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted small_text">Siła wiatru:</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">Ciśnienie:</Card.Subtitle>
  
                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>18:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">Słonecznie</Card.Subtitle>
                        <Card.Text className="small_text">
                        <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted small_text">Siła wiatru:</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">Ciśnienie:</Card.Subtitle>
     
                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>21:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">Słonecznie</Card.Subtitle>
                        <Card.Text className="small_text">
                        <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted small_text">Siła wiatru:</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">Ciśnienie:</Card.Subtitle>

                    </Card.Body>
                </Card >
            </div>
        )
    }

}
export default WeatherView;