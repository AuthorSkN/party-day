import React from 'react';
import Local from '../local.json'
import { PartiesMap } from './PartiesBoard';
import { Link } from 'react-router-dom';
import { CategoriesMap } from './CategoriesList';
import { generateRandomID } from '../Tools';

class PartyEdit extends React.Component {

    onSaveParty() {
        const id = generateRandomID();
        const party = {
            name: this.nameInput.value,
            desc: this.descInput.value,
            date: this.dateInput.value,
            time: this.timeInput.value,
            isFree: this.isFreeInput.value,
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
                <option key={key} value={categoryName}>{categoryName}</option>
            ));
        });
        return (
            <div>
                <div>
                    <h3>{Local.NAME}</h3>
                    <input ref={input => this.nameInput = input} />
                </div>
                <div>
                    <h3>{Local.DESC}</h3>
                    <textarea ref={input => this.descInput = input}></textarea>
                </div>
                <div>
                    <h3>{Local.DATE}</h3>
                    <input type="date" ref={input => this.dateInput = input} />
                </div>
                <div>
                    <h3>{Local.TIME}</h3>
                    <input type="time" ref={input => this.timeInput = input} />
                </div>
                <div>
                    <h3>{Local.IS_PUBLIC_PARTY}</h3>
                    <input type="checkbox" ref={input => this.isFreeInput = input} />
                </div>
                <div>
                    <h3>{Local.COST}</h3>
                    <input type="number" ref={input => this.costInput = input} />
                </div>
                <div>
                    <h3>{Local.ADDRESS}</h3>
                    <input ref={input => this.addressInput = input} />
                </div>
                <div>
                    <h3>{Local.CATEGORY}</h3>
                    <select ref={input => this.categoryInput = input}>
                       {categoryOpions}
                    </select>
                </div>
                <button onClick={() => this.onSaveParty()}><Link to="/Parties">{Local.SAVE}</Link></button>
            </div>
        );
    }
}

export default PartyEdit;