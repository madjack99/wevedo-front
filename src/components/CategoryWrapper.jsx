import React, { useState, useEffect } from 'react';
import categoriesGet from '../requests/category.requests';

function CategoryWrapper() {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        categoriesGet(setCategory);
    }, []);

    return (
        <div>
            {categories.map((item, i) => (
                <div key={i}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default CategoryWrapper;