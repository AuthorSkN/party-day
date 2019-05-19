import React from 'react';
import { Link } from 'react-router-dom';

const PartiesMap = new Map();

const PartiesBoard = () => {
    const partyBlocks = [];
    PartiesMap.forEach((party, key) => {
        partyBlocks.push((
            <li key={key}>{party.name}</li>
        ));
    });
    return (
        <div>
            PartiesBoard
            <ol>{partyBlocks}</ol>
            <button><Link to="/party-edit">Create</Link></button>
        </div>
    );
}

export default PartiesBoard;
export { PartiesMap };