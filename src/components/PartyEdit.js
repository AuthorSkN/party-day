import React from 'react';
import Local from '../local.json'
import {PartiesList} from './PartiesBoard';
import Party from '../entities/Party';

class PartyEdit extends React.Component {

    generateRandomID() {
        const rndMax = 20000;
        const rndMin = 0;
        return Math.floor(Math.random() * (rndMax - rndMin + 1)) + rndMin;
    }

    onSaveParty() {
        const id = this.generateRandomID();
        const name = this.nameInput.value;
        const disc = this.discInput.value;
        const date = this.dateInput.value;
        const time = this.timeInput.value;
        const isFree = this.isFreeInput.value;
        const cost = this.costInput.value;
        const address = this.address.value;
        PartiesList.set(id, new Party(name, disc, date, time, cost, isFree, address, null));
    }

    render() {
        return (
            <div>
                <div>
                    <h3>{Local.NAME}</h3>
                    <input ref={input => this.nameInput = input}/>
                </div>
                <div>
                    <h3>{Local.DESC}</h3>
                   <textarea ref={input => this.descInput = input}></textarea>
                </div>
                <div>
                    <h3>{Local.DATE}</h3>
                    <input type="date" ref={input => this.dateInput = input}/>
                </div>
                <div>
                    <h3>{Local.TIME}</h3>
                    <input type="time" ref={input => this.timeInput = input}/>
                </div>
                <div>
                    <h3>{Local.IS_PUBLIC_PARTY}</h3>
                    <input type="checkbox" ref={input => this.isFreeInput = input}/>
                </div>
                <div>
                    <h3>{Local.COST}</h3>
                    <input type="number" ref={input => this.costInput = input}/>
                </div>
                <div>
                    <h3>{Local.ADDRESS}</h3>
                    <input ref={input => this.addressInput = input}/>
                </div>
                <button onClick={()=> this.onSaveParty()}>{Local.SAVE}</button>
            </div>
        );
    }
}

export default PartyEdit;