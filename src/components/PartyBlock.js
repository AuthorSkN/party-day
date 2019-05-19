import React from 'react';
import Local from '../local.json'

class PartyBlock extends React.Component {

    render() {
        const party = this.props.party;
        const partyFreeStatus = party.isFree ? Local.IS_PUBLIC_PARTY : Local.IS_PRIVATE_PARTY;
        return (
            <div>
                <h3>{party.name}</h3>
                <p>{party.desc}</p>
                <div>
                    <span>{Local.DATE}</span>
                    <span>{party.date}</span>
                    <span>{Local.TIME}</span>
                    <span>{party.time}</span>
                </div>
                <div>
                    <span>{Local.COST}</span>
                    <span>{party.cost}</span>
                </div>
                <div>
                    {partyFreeStatus}
                </div>
                <div>
                    <span>{Local.ADDRESS}</span>
                    <span>{party.address}</span>
                </div>
                <div>{party.category}</div>
            </div>
        );
    }
}

export default PartyBlock;