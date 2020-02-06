import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import './SearchInput.css';

class SearchInput extends Component {



    render() {

        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl 
                        placeholder="Wpisz miasto"
                        aria-label="Wpisz miasto"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Szukaj</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }

}
export default SearchInput;