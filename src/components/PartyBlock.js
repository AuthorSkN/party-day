import React from 'react';
import Local from '../local.json'

class PartyBlock extends React.Component {

    render() {
        const party = this.props.party;
        const partyFreeStatus = party.isFree ? Local.IS_PUBLIC_PARTY : Local.IS_PRIVATE_PARTY;
        return (
            <div className="party-block">
                <h3>{party.name}</h3>
                <p className="party-block-desc">{party.desc}</p>
                <div>
                    <span className="party-block-inline">{Local.DATE + ":"}</span>
                    <span className="party-block-inline" style={{marginLeft:5}}>{party.date}</span>
                    <span className="party-block-inline" style={{marginLeft:25}}>{Local.TIME + ":"}</span>
                    <span className="party-block-inline" style={{marginLeft:5}}>{party.time}</span>
                </div>
                <div>
                    <span>{Local.COST + ":"}</span>
                    <span className="party-block-inline" style={{marginLeft:5}}>{party.cost}</span>
                </div>
                <div className="party-block-free" style={party.isFree ? {backgroundColor: "green"} : {backgroundColor: "red"}}>
                    {partyFreeStatus}
                </div>
                <div>
                    <span className="party-block-inline">{Local.ADDRESS + ":"}</span>
                    <span className="party-block-inline">{party.address}</span>
                </div>
                <div className="party-block-category">{party.category}</div>
            </div>
        );
    }
}

export default PartyBlock;