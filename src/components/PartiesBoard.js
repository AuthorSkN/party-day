import React from 'react';
import PartyBlock from './PartyBlock';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import Local from '../local.json';

const PartiesMap = new Map();


const PartiesBoard = () => {
    PartiesMap.set(1, {
        name: "Top Вечеринка",
        desc: "Не которое описание и бла бла бла бла бла блабла блааааа",
        date: "1995-12-19",
        time: "17:00",
        isFree: false,
        cost: 3000,
        address: "г. Самара, ул Завдская, дом 13",
        category: "Super party"
    });
    PartiesMap.set(2, {
        name: "Top Вечеринка",
        desc: "Не которое описание и бла бла бла бла бла блабла блааааа",
        date: "1995-12-19",
        time: "17:00",
        isFree: true,
        cost: 3000,
        address: "г. Самара, ул Завдская, дом 13",
        category: "Super party"
    });
    PartiesMap.set(3, {
        name: "Top Вечеринка",
        desc: "Не которое описание и бла бла бла бла бла блабла блааааа",
        date: "1995-12-19",
        time: "17:00",
        isFree: false,
        cost: 3000,
        address: "г. Самара, ул Завдская, дом 13",
        category: "Super party"
    });
    PartiesMap.set(4, {
        name: "Top Вечеринка",
        desc: "Не которое описание и бла бла бла бла бла блабла блааааа",
        date: "1995-12-19",
        time: "17:00",
        isFree: false,
        cost: 3000,
        address: "г. Самара, ул Завдская, дом 13",
        category: "Super party"
    });

    const partyBlocks = [];
    PartiesMap.forEach((party, key) => {
        partyBlocks.push((
            <div key={key} style={{ textAlign: "center" }}><PartyBlock party={party} /></div>
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

export default PartiesBoard;
export { PartiesMap };