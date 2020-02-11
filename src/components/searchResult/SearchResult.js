import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap'
import './SearchResult.css';

class SearchResult extends Component {

    createCities = (cities) => {
        return <ListGroup.Item onClick={()=>this.iWantThisCity({cities})} className='city_names black' >{cities}</ListGroup.Item>
    }
    iWantThisCity = (town) =>{
        this.props.cityGetFuncProps(town)
    }


    render() {

        let cities2display = []
       // console.log(this.props.cityListProps)
        if(!(this.props.cityListProps===undefined ||this.props.cityListProps===[])){
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