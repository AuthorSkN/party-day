import React from 'react';
import PartyBlock from './PartyBlock';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import Local from '../local.json';


const sampleParty = {
    name: "Top Вечеринка",
    desc: "Некоторое описание и бла бла бла бла бла блабла блааааа",
    date: "2019-12-19",
    time: "17:00",
    isFree: false,
    cost: 3000,
    address: "г. Самара, ул Завдская, дом 13",
    category: "Super party"
}

const PartiesMap = new Map();
PartiesMap.set(1, sampleParty);
PartiesMap.set(2, sampleParty);
PartiesMap.set(3, sampleParty);
PartiesMap.set(4, sampleParty);



class PartiesBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parties: PartiesMap
        };
    }
    
    deleteParty(id) {
        if (window.confirm(Local.DELETE_PARTY_QUATION)) {
            PartiesMap.delete(id);
            this.setState({parties: PartiesMap});
        }
    }

    render() {
        const partyBlocks = [];
        PartiesMap.forEach((party, key) => {
            partyBlocks.push((
                <div key={key} style={{ textAlign: "center" }}><PartyBlock party={party} id={key} deleteCallback={(id) => this.deleteParty(id)}/></div>
            ));
        });
        return (
            <CSSTransitionGroup
                transitionName="partiesBoardTransition"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
            >
                <div className="content">
                    <div className="title-row">
                        <Link to="/party-edit"><div className="add-button"></div></Link>
                        <h2 className="title">{Local.EVENT_PANEL}</h2>
                    </div>
                    <div className="partiesContainer">
                        {partyBlocks}
                    </div>

                </div>
            </CSSTransitionGroup>
        );
    }
}

export default PartiesBoard;
export { PartiesMap };