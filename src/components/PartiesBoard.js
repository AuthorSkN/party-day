import React from 'react';
import {Link} from 'react-router-dom';

const PartiesList = new Map();

const PartiesBoard = () => {

    return (
        <div>
            PartiesBoard:
            
            <button><Link to="/party-edit">Create</Link></button>
        </div>
    );
}

export default PartiesBoard;
export { PartiesList };