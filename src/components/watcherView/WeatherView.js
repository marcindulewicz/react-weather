import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap'
import './WeatherView.css';


class WeatherView extends Component {

    render() {
        //INIT VARIABLES
        //GODZINA 1
        let temp1 = ""
        let wind1 = ""
        let press1 = ""
        let description1= ""

        //GODZINA 2
        let temp2 = ""
        let wind2= ""
        let press2 = ""
        let description2= ""

        //GODZINA 3
        let temp3 = ""
        let wind3 = ""
        let press3 = ""
        let description3= ""

        //GODZINA 4
        let temp4 = ""
        let wind4 = ""
        let press4 = ""
        let description4= ""

        //GODZINA 5
        let temp5 = ""
        let wind5= ""
        let press5 = ""
        let description5= ""

        //GODZINA 6
        let temp6 = ""
        let wind6 = ""
        let press6 = ""
        let description6= ""

        //GODZINA 7
        let temp7 = ""
        let wind7 = ""
        let press7 = ""
        let description7= ""

        //GODZINA 8
        let temp8 = ""
        let wind8 = ""
        let press8 = ""
        let description8= ""




        if (!(this.props.weatherDataProps[0] === undefined)) {
            //GODZINA 1
            temp1 = typeof this.props.weatherDataProps[0].temp =="number"? Math.round(this.props.weatherDataProps[0].temp): this.props.weatherDataProps[0].temp
            wind1 = typeof this.props.weatherDataProps[0].wind =="number"? Math.round(this.props.weatherDataProps[0].wind): this.props.weatherDataProps[0].wind
            press1 = typeof this.props.weatherDataProps[0].press =="number"? Math.round(this.props.weatherDataProps[0].press): this.props.weatherDataProps[0].press
            description1 =this.props.weatherDataProps[0].description
            //GODZINA 2
            temp2 = typeof this.props.weatherDataProps[1].temp =="number"? Math.round(this.props.weatherDataProps[1].temp): this.props.weatherDataProps[1].temp
            wind2 = typeof this.props.weatherDataProps[1].wind =="number"? Math.round(this.props.weatherDataProps[1].wind): this.props.weatherDataProps[1].wind
            press2 = typeof this.props.weatherDataProps[1].press =="number"? Math.round(this.props.weatherDataProps[1].press): this.props.weatherDataProps[1].press
            description2 =this.props.weatherDataProps[1].description
            //GODZINA 3
            temp3 = typeof this.props.weatherDataProps[2].temp =="number"? Math.round(this.props.weatherDataProps[2].temp): this.props.weatherDataProps[2].temp
            wind3 = typeof this.props.weatherDataProps[2].wind =="number"? Math.round(this.props.weatherDataProps[2].wind): this.props.weatherDataProps[2].wind
            press3 = typeof this.props.weatherDataProps[2].press =="number"? Math.round(this.props.weatherDataProps[2].press): this.props.weatherDataProps[2].press
            description3 =this.props.weatherDataProps[2].description
            //GODZINA 4
            temp4 = typeof this.props.weatherDataProps[3].temp =="number"? Math.round(this.props.weatherDataProps[3].temp): this.props.weatherDataProps[3].temp
            wind4 = typeof this.props.weatherDataProps[3].wind =="number"? Math.round(this.props.weatherDataProps[3].wind): this.props.weatherDataProps[3].wind
            press4 = typeof this.props.weatherDataProps[3].press =="number"? Math.round(this.props.weatherDataProps[3].press): this.props.weatherDataProps[3].press
            description4 =this.props.weatherDataProps[3].description
            //GODZINA 5
            temp5 = typeof this.props.weatherDataProps[4].temp =="number"? Math.round(this.props.weatherDataProps[4].temp): this.props.weatherDataProps[4].temp
            wind5 = typeof this.props.weatherDataProps[4].wind =="number"? Math.round(this.props.weatherDataProps[4].wind): this.props.weatherDataProps[4].wind
            press5 = typeof this.props.weatherDataProps[4].press =="number"? Math.round(this.props.weatherDataProps[4].press): this.props.weatherDataProps[4].press
            description5 =this.props.weatherDataProps[4].description    
            //GODZINA 6
            temp6 = typeof this.props.weatherDataProps[5].temp =="number"? Math.round(this.props.weatherDataProps[5].temp): this.props.weatherDataProps[5].temp
            wind6 = typeof this.props.weatherDataProps[5].wind =="number"? Math.round(this.props.weatherDataProps[5].wind): this.props.weatherDataProps[5].wind
            press6 = typeof this.props.weatherDataProps[5].press =="number"? Math.round(this.props.weatherDataProps[5].press): this.props.weatherDataProps[5].press
            description6 =this.props.weatherDataProps[5].description  
            //GODZINA 7
            temp7 = typeof this.props.weatherDataProps[6].temp =="number"? Math.round(this.props.weatherDataProps[6].temp): this.props.weatherDataProps[6].temp
            wind7 = typeof this.props.weatherDataProps[6].wind =="number"? Math.round(this.props.weatherDataProps[6].wind): this.props.weatherDataProps[6].wind
            press7 = typeof this.props.weatherDataProps[6].press =="number"? Math.round(this.props.weatherDataProps[6].press): this.props.weatherDataProps[6].press
            description7 =this.props.weatherDataProps[6].description 
             //GODZINA 8
             temp8 = typeof this.props.weatherDataProps[7].temp =="number"? Math.round(this.props.weatherDataProps[7].temp): this.props.weatherDataProps[7].temp
             wind8 = typeof this.props.weatherDataProps[7].wind =="number"? Math.round(this.props.weatherDataProps[7].wind): this.props.weatherDataProps[7].wind
             press8 = typeof this.props.weatherDataProps[7].press =="number"? Math.round(this.props.weatherDataProps[7].press): this.props.weatherDataProps[7].press
             description8 =this.props.weatherDataProps[7].description                       
}
        return (
            <div className="verticall_position width100">

                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>00:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{description1}</Card.Subtitle>
                        <Card.Text className="small_text">
                            <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{temp1}  &deg;C</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{wind1} km/h</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{press1} hPa</Card.Subtitle>

                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard" >
                        <Card.Title className='black big_text'>03:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{description2}</Card.Subtitle>
                        <Card.Text className="small_text">
                            <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{temp2}  &deg;C</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{wind2} km/h</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{press2} hPa</Card.Subtitle>

                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>06:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{description3}</Card.Subtitle>
                        <Card.Text className="small_text">
                            <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{temp3}  &deg;C</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{wind3} km/h</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{press3} hPa</Card.Subtitle>

                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard" >
                        <Card.Title className='black big_text'>09:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{description4}</Card.Subtitle>
                        <Card.Text className="small_text">
                            <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{temp4}  &deg;C</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{wind4} km/h</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{press4} hPa</Card.Subtitle>

                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>12:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{description5}</Card.Subtitle>
                        <Card.Text className="small_text">
                            <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{temp5}  &deg;C</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{wind5} km/h</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{press5} hPa</Card.Subtitle>

                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>15:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{description6}</Card.Subtitle>
                        <Card.Text className="small_text">
                            <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{temp6}  &deg;C</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{wind6} km/h</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{press6} hPa</Card.Subtitle>
                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>18:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{description7}</Card.Subtitle>
                        <Card.Text className="small_text">
                            <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{temp7}  &deg;C</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{wind7} km/h</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{press7} hPa</Card.Subtitle>

                    </Card.Body>
                </Card >
                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>21:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{description8}</Card.Subtitle>
                        <Card.Text className="small_text">
                            <Image className="width75" src="https://f0.pngfuel.com/png/851/689/sun-illustration-png-clip-art.png" rounded />
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{temp8}  &deg;C</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{wind8} km/h</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted small_text">{press8} hPa</Card.Subtitle>

                    </Card.Body>
                </Card >
            </div>
        )
    }

}
export default WeatherView;