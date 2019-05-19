import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesMap = new Map();

const CategoriesList = () => {
    const categoryBlocks = [];
    CategoriesMap.forEach((categoryName, key) => {
        categoryBlocks.push((
            <li key={key}>{categoryName}</li>
        ));
    });
    return (
        <div>
            Categories
            <ol>{categoryBlocks}</ol>
            <button><Link to="/category-edit">Create</Link></button>
        </div>
    );
}

export default CategoriesList;
export { CategoriesMap };