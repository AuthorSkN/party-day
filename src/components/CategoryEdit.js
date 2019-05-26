import React from 'react';
import Local from '../local.json'
import { CategoriesMap } from './CategoriesList';
import { Link } from 'react-router-dom';
import { generateRandomID } from '../Tools';
import { CSSTransitionGroup } from 'react-transition-group';

class CategoryEdit extends React.Component {

    onSaveCategory() {
        const id = generateRandomID();
        const categoryName = this.nameInput.value;
        CategoriesMap.set(id, categoryName);
    }

    render() {
        return (
            <CSSTransitionGroup
                transitionName="categoriesEditTransition"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
            >
                <div className="content">
                    <div>
                        <h3 className="inline-title">{Local.NAME}</h3>
                        <input ref={input => this.nameInput = input} />
                    </div>
                    <Link to="/categories"><div className="save-button" onClick={() => this.onSaveCategory()}>{Local.SAVE}</div></Link>
                </div>
            </CSSTransitionGroup>
        );
    }
}

export default CategoryEdit;