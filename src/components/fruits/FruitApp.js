import React from 'react';
import FruitList from './FruitList';
import FruitForm from './FruitForm';

class FruitApp extends React.Component {

    constructor() {
        super();

        this.state = {
            fruitData: ['Pommes', 'Poires', 'Tomates']
        };
        this.deleteFruit = this.deleteFruit.bind(this);
        this.addFruit = this.addFruit.bind(this);
    }


    deleteFruit(index) {
        let fruits = this.state.fruitData;
        fruits.splice(index, 1);
        this.setState({ fruitData: fruits });
    }

    addFruit(fruitName) {
        let fruits = this.state.fruitData;
        fruits.push(fruitName);
        this.setState({ fruitData: fruits })
    }

    render() {
        return (<div>
            <FruitForm />
            <h1>Listes des fruits</h1>
            <FruitList list={this.state.fruitData}
                removeItem={this.deleteFruit} />
        </div>);
    }
}

export default FruitApp;