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
            <div className="content">
                <div>
                    <h3 className="inline-title">{Local.NAME}</h3>
                    <input ref={input => this.nameInput = input} />
                </div>
                <Link to="/categories"><div className="save-button" onClick={() => this.onSaveCategory()}>{Local.SAVE}</div></Link>
            </div>
        );
    }
}

export default CategoryEdit;