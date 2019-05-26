import React from 'react';
import { Link } from 'react-router-dom';
import Local from '../local.json';
import { CSSTransitionGroup } from 'react-transition-group';

const CategoriesMap = new Map();

const CategoriesList = () => {
    CategoriesMap.set(1, "Вечеринка");
    CategoriesMap.set(2, "Квартирник");
    CategoriesMap.set(3, "Пикник");
    const categoryBlocks = [];
    CategoriesMap.forEach((categoryName, key) => {
        categoryBlocks.push((
            <li className="category-row" key={key}>{categoryName}</li>
        ));
    });

    return (
        <CSSTransitionGroup
            transitionName="categoriesListTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
        >
            <div className="content">
                <div className="title-row">
                    <Link to="/category-edit"><div className="add-button"></div></Link>
                    <h2 className="title">{Local.CATEGORIES}</h2>
                </div>
                <ol>{categoryBlocks}</ol>
            </div>
        </CSSTransitionGroup>
    );
}

export default CategoriesList;
export { CategoriesMap };