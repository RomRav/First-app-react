import React from 'react';

function FruitList(props) {
    let fruitData = props.list;
    let removeItem = props.removeItem;

    let fruitItems = fruitData.map((
        item, index) => {
        return (<li>
            {item}
            <button onClick={() => removeItem(index)}>
                Delete
            </button>
        </li>)
    });

    return (
        <ul>{fruitItems}</ul>
    );
}


export default FruitList;