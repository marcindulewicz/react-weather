import React, { Component } from 'react';
import { ListGroup, Button, ThemeProvider } from 'react-bootstrap'
import './SearchResult.css';

class SearchResult extends Component {

    createCities = (cities) => {
        return <ListGroup.Item  className='city_names black' >{cities}</ListGroup.Item>
    }


    render() {

        let cities2display = []
        console.log(this.props.cityListProps)
        if(!(this.props.cityListProps==undefined ||this.props.cityListProps==[])){
            cities2display=this.props.cityListProps.map(this.createCities)
        }


        return (
            <div>
                
                <ListGroup className="mainDIVList">
                    <br></br>
                    {cities2display}
                </ListGroup>
            </div>
        )
    }

}
export default SearchResult;