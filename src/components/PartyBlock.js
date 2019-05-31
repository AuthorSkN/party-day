import React from 'react';
import Local from '../local.json'
import { Link } from 'react-router-dom';

class PartyBlock extends React.Component {

    render(props) {
        const party = this.props.party;
        const id = this.props.id;
        const partyFreeStatus = party.isFree ? Local.IS_PUBLIC_PARTY : Local.IS_PRIVATE_PARTY;
        return (
            <div className="party-block">
                <span className="partyEditButton" onClick={() => this.props.deleteCallback(id)}>{Local.DELETE}</span>
                <Link to={"/party-edit/" + id}><span className="partyEditButton">{Local.EDIT}</span></Link>
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