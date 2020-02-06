import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import './SearchInput.css';

class SearchInput extends Component {
    

    filterCity = () => {
        this.props.citySearchFunc(this._inputFilter.value.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}).trim())
    }


    render() {

        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl ref={ (data) => {this._inputFilter = data;}}
                        placeholder="Wpisz miasto"
                        aria-label="Wpisz miasto"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button onClick={this.filterCity} variant="outline-secondary">Szukaj</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }

}
export default SearchInput;