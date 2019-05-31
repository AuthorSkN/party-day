import React from 'react';
import Local from '../local.json'
import { PartiesMap } from './PartiesBoard';
import { Link } from 'react-router-dom';
import { CategoriesMap } from './CategoriesList';
import { generateRandomID } from '../Tools';
import { CSSTransitionGroup } from 'react-transition-group';


class PartyEdit extends React.Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        if (this.id) {
            console.log(PartiesMap);
            const party = PartiesMap.get(Number(this.id));
            this.state = {
                name: party.name,
                desc: party.desc,
                date: party.date,
                time: party.time,
                isFree: party.isFree,
                cost: party.cost,
                address: party.address,
                category: party.category
            };
        } else {
            this.state = { };
        }
    }

    onSaveParty() {
        const id = (this.id)? Number(this.id) : generateRandomID();
        const party = {
            name: this.nameInput.value,
            desc: this.descInput.value,
            date: this.dateInput.value,
            time: this.timeInput.value,
            isFree: this.isFreeInput.checked,
            cost: this.costInput.value,
            address: this.addressInput.value,
            category: this.categoryInput.value
        };

        PartiesMap.set(id, party);
    }

    render() {
        const categoryOpions = [];
        CategoriesMap.forEach((categoryName, key) => {
            categoryOpions.push((
                <option key={key} value={categoryName} >{categoryName}</option>
            ));
        });
        return (
            <CSSTransitionGroup
                transitionName="partiesEditTransition"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
            >
                <div className="content">
                    <div>
                        <h3 className="inline-title">{Local.NAME}</h3>
                        <input ref={input => this.nameInput = input} 
                        onChange={(e) => {
                            let newState = Object.assign({}, this.state);
                            newState.name = e.target.value;
                            this.setState(newState);
                        }}
                        value={this.state.name? this.state.name : ""}/>
                    </div>
                    <div>
                        <h3 className="inline-title">{Local.DESC}</h3>
                        <textarea maxLength="100" ref={input => this.descInput = input} 
                        onChange={(e) => {
                            let newState = Object.assign({}, this.state);
                            newState.desc = e.target.value;
                            this.setState(newState);
                        }}>{this.state.desc? this.state.desc : ""}
                        </textarea>
                    </div>
                    <div>
                        <h3 className="inline-title">{Local.DATE}</h3>
                        <input type="date" ref={input => this.dateInput = input} 
                        onChange={(e) => {
                            let newState = Object.assign({}, this.state);
                            newState.date = e.target.value;
                            this.setState(newState);
                        }}
                        value={this.state.date? this.state.date : ""}/>
                    </div>
                    <div>
                        <h3 className="inline-title">{Local.TIME}</h3>
                        <input type="time" ref={input => this.timeInput = input} 
                         onChange={(e) => {
                            let newState = Object.assign({}, this.state);
                            newState.time = e.target.value;
                            this.setState(newState);
                        }}
                        value={this.state.time? this.state.time : ""}/>
                    </div>
                    <div>
                        <h3 className="inline-title">{Local.IS_PUBLIC_PARTY}</h3>
                        <input type="checkbox" 
                        defaultChecked={this.state.isFree}
                        ref={input => this.isFreeInput = input}
                         onChange={(e) => {
                            let newState = Object.assign({}, this.state);
                            newState.isFree = e.target.checked;
                            this.setState(newState);
                        }}
                        />
                    </div>
                    <div>
                        <h3 className="inline-title">{Local.COST}</h3>
                        <input type="number" ref={input => this.costInput = input} 
                        onChange={(e) => {
                            let newState = Object.assign({}, this.state);
                            newState.cost = e.target.value;
                            this.setState(newState);
                        }}
                        value={this.state.cost? this.state.cost : 0}/>
                    </div>
                    <div>
                        <h3 className="inline-title">{Local.ADDRESS}</h3>
                        <input ref={input => this.addressInput = input} 
                        onChange={(e) => {
                            let newState = Object.assign({}, this.state);
                            newState.address = e.target.value;
                            this.setState(newState);
                        }}
                        value={this.state.address? this.state.address : ""}/>
                    </div>
                    <div>
                        <h3 className="inline-title">{Local.CATEGORY}</h3>
                        <select ref={input => this.categoryInput = input}
                        defaultValue={this.state.category}>
                            {categoryOpions}
                        </select>
                    </div>
                    <Link to="/Parties"><div className="save-button" onClick={() => this.onSaveParty()}>{Local.SAVE}</div></Link>
                </div>
            </CSSTransitionGroup>
        );
    }
}

export default PartyEdit;