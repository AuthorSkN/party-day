import React from 'react';
import Local from '../local.json'
import { CategoriesMap } from './CategoriesList';
import { Link } from 'react-router-dom';
import { generateRandomID } from '../Tools';

class CategoryEdit extends React.Component {

    onSaveCategory() {
        const id = generateRandomID();
        const categoryName = this.nameInput.value;
        CategoriesMap.set(id, categoryName);
    }

    render() {
        return (
            <div>
                <div>
                    <h3>{Local.NAME}</h3>
                    <input ref={input => this.nameInput = input} />
                </div>
                <button onClick={() => this.onSaveCategory()}><Link to="/categories">{Local.SAVE}</Link></button>
            </div>
        );
    }
}

export default CategoryEdit;