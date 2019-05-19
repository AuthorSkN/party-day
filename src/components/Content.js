import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PartiesBoard from './PartiesBoard';
import CategoriesList from './CategoriesList';
import CategoryEdit from './CategoryEdit';
import About from './About';
import PartyEdit from './PartyEdit';

const Content = () => {
    return (
        <Switch>
            <Route exact path="/" component={PartiesBoard}/>
            <Route path="/Parties" component={PartiesBoard}/>
            <Route path="/Party-edit" component={PartyEdit}/>
            <Route path="/Category-edit" component={CategoryEdit}/>
            <Route path="/Categories" component={CategoriesList}/>
            <Route path="/About" component={About}/>
        </Switch>
    );
}

export default Content;