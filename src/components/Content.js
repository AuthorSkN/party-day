import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PartiesBoard from './PartiesBoard';
import Categories from './Categories';
import About from './About';
import PartyEdit from './PartyEdit';

const Content = () => {
    return (
        <Switch>
            <Route exact path="/" component={PartiesBoard}/>
            <Route path="/Parties" component={PartiesBoard}/>
            <Route path="/Party-edit" component={PartyEdit}/>
            <Route path="/Categories" component={Categories}/>
            <Route path="/About" component={About}/>
        </Switch>
    );
}

export default Content;