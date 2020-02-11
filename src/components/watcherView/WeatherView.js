import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap'
import './WeatherView.css';


class WeatherView extends Component {

    render() {
        //INIT VARIABLES
        //IMAGES

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
        //GODZINA 1
        let temp1 = ""
        let wind1 = ""
        let press1 = ""
        let description1 = ""
        let id1 ="i00000"

        //GODZINA 2
        let temp2 = ""
        let wind2 = ""
        let press2 = ""
        let description2 = ""
        let id2 ="i00000"

        //GODZINA 3
        let temp3 = ""
        let wind3 = ""
        let press3 = ""
        let description3 = ""
        let id3 ="i00000"

        //GODZINA 4
        let temp4 = ""
        let wind4 = ""
        let press4 = ""
        let description4 = ""
        let id4 ="i00000"

        //GODZINA 5
        let temp5 = ""
        let wind5 = ""
        let press5 = ""
        let description5 = ""
        let id5 ="i00000"

        //GODZINA 6
        let temp6 = ""
        let wind6 = ""
        let press6 = ""
        let description6 = ""
        let id6 ="i00000"

        //GODZINA 7
        let temp7 = ""
        let wind7 = ""
        let press7 = ""
        let description7 = ""
        let id7 ="i00000"

        //GODZINA 8
        let temp8 = ""
        let wind8 = ""
        let press8 = ""
        let description8 = ""
        let id8 ="i00000"

console.log("IMAGE",weather_img[String({id1})])


        if (!(this.props.weatherDataProps[0] === undefined)) {
            //GODZINA 1
            temp1 = typeof this.props.weatherDataProps[0].temp == "number" ? Math.round(this.props.weatherDataProps[0].temp) : this.props.weatherDataProps[0].temp
            wind1 = typeof this.props.weatherDataProps[0].wind == "number" ? Math.round(this.props.weatherDataProps[0].wind) : this.props.weatherDataProps[0].wind
            press1 = typeof this.props.weatherDataProps[0].press == "number" ? Math.round(this.props.weatherDataProps[0].press) : this.props.weatherDataProps[0].press
            description1 = this.props.weatherDataProps[0].description
            id1 = "i" + this.props.weatherDataProps[0].id
 
            //GODZINA 2
            temp2 = typeof this.props.weatherDataProps[1].temp == "number" ? Math.round(this.props.weatherDataProps[1].temp) : this.props.weatherDataProps[1].temp
            wind2 = typeof this.props.weatherDataProps[1].wind == "number" ? Math.round(this.props.weatherDataProps[1].wind) : this.props.weatherDataProps[1].wind
            press2 = typeof this.props.weatherDataProps[1].press == "number" ? Math.round(this.props.weatherDataProps[1].press) : this.props.weatherDataProps[1].press
            description2 = this.props.weatherDataProps[1].description
            id2 = "i" + this.props.weatherDataProps[1].id
            //GODZINA 3
            temp3 = typeof this.props.weatherDataProps[2].temp == "number" ? Math.round(this.props.weatherDataProps[2].temp) : this.props.weatherDataProps[2].temp
            wind3 = typeof this.props.weatherDataProps[2].wind == "number" ? Math.round(this.props.weatherDataProps[2].wind) : this.props.weatherDataProps[2].wind
            press3 = typeof this.props.weatherDataProps[2].press == "number" ? Math.round(this.props.weatherDataProps[2].press) : this.props.weatherDataProps[2].press
            description3 = this.props.weatherDataProps[2].description
            id3 =  "i" +this.props.weatherDataProps[2].id
            //GODZINA 4
            temp4 = typeof this.props.weatherDataProps[3].temp == "number" ? Math.round(this.props.weatherDataProps[3].temp) : this.props.weatherDataProps[3].temp
            wind4 = typeof this.props.weatherDataProps[3].wind == "number" ? Math.round(this.props.weatherDataProps[3].wind) : this.props.weatherDataProps[3].wind
            press4 = typeof this.props.weatherDataProps[3].press == "number" ? Math.round(this.props.weatherDataProps[3].press) : this.props.weatherDataProps[3].press
            description4 = this.props.weatherDataProps[3].description
            id4 =  "i" +this.props.weatherDataProps[3].id
            //GODZINA 5
            temp5 = typeof this.props.weatherDataProps[4].temp == "number" ? Math.round(this.props.weatherDataProps[4].temp) : this.props.weatherDataProps[4].temp
            wind5 = typeof this.props.weatherDataProps[4].wind == "number" ? Math.round(this.props.weatherDataProps[4].wind) : this.props.weatherDataProps[4].wind
            press5 = typeof this.props.weatherDataProps[4].press == "number" ? Math.round(this.props.weatherDataProps[4].press) : this.props.weatherDataProps[4].press
            description5 = this.props.weatherDataProps[4].description
            id5 = "i" + this.props.weatherDataProps[4].id
            //GODZINA 6
            temp6 = typeof this.props.weatherDataProps[5].temp == "number" ? Math.round(this.props.weatherDataProps[5].temp) : this.props.weatherDataProps[5].temp
            wind6 = typeof this.props.weatherDataProps[5].wind == "number" ? Math.round(this.props.weatherDataProps[5].wind) : this.props.weatherDataProps[5].wind
            press6 = typeof this.props.weatherDataProps[5].press == "number" ? Math.round(this.props.weatherDataProps[5].press) : this.props.weatherDataProps[5].press
            description6 = this.props.weatherDataProps[5].description
            id6 =  "i" +this.props.weatherDataProps[5].id
            //GODZINA 7
            temp7 = typeof this.props.weatherDataProps[6].temp == "number" ? Math.round(this.props.weatherDataProps[6].temp) : this.props.weatherDataProps[6].temp
            wind7 = typeof this.props.weatherDataProps[6].wind == "number" ? Math.round(this.props.weatherDataProps[6].wind) : this.props.weatherDataProps[6].wind
            press7 = typeof this.props.weatherDataProps[6].press == "number" ? Math.round(this.props.weatherDataProps[6].press) : this.props.weatherDataProps[6].press
            description7 = this.props.weatherDataProps[6].description
            id7 = "i" + this.props.weatherDataProps[6].id
            //GODZINA 8
            temp8 = typeof this.props.weatherDataProps[7].temp == "number" ? Math.round(this.props.weatherDataProps[7].temp) : this.props.weatherDataProps[7].temp
            wind8 = typeof this.props.weatherDataProps[7].wind == "number" ? Math.round(this.props.weatherDataProps[7].wind) : this.props.weatherDataProps[7].wind
            press8 = typeof this.props.weatherDataProps[7].press == "number" ? Math.round(this.props.weatherDataProps[7].press) : this.props.weatherDataProps[7].press
            description8 = this.props.weatherDataProps[7].description
            id8 = "i" +this.props.weatherDataProps[7].id
        }
        return (
            <div className="verticall_position width100">

                <Card className="verticall_position marginleft"  >
                    <Card.Body className="verticall_position narginleft widthCard"  >
                        <Card.Title className='black big_text'>00:00 </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted medium_text">{description1}</Card.Subtitle>
                        <Card.Text className="small_text">
                            <Image className="width75" src={"/img/" + weather_img[id1]} rounded />
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
                            <Image className="width75" src={"/img/" + weather_img[id2]} rounded />
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
                            <Image className="width75" src={"/img/" + weather_img[id3]} rounded />
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
                            <Image className="width75" src={"/img/" + weather_img[id4]} rounded />
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
                            <Image className="width75" src={"/img/" + weather_img[id5]} rounded />
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
                            <Image className="width75" src={"/img/" + weather_img[id6]} rounded />
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
                            <Image className="width75" src={"/img/" + weather_img[id7]} rounded />
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
                            <Image className="width75" src={"/img/" + weather_img[id8]} rounded />
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