import React from 'react';

class FruitForm extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onSubmit(event) {
        event.preventDefault();
        let newFruit = this.refs.fruitInput.value.trim();

        if (newFruit) {

            this.props.addItem(newFruit);
            this.refs.fruitInput.value = "";
        }
    }


    render() {
        return (
            //ref = enregister une ref pour récupérer les éléments du form
            //onSubmit def la fonction onSubmit à utiliser lors de la soumission du formulaire
            <form onSubmit={this.onSubmit} >
                <h1>Ajouter un fruit</h1> <br />

                <input type='text' placeholder='Votre fruit' ref="fruitInput" /> <br />
                <button type='submit'>Ajouter</button>
            </form>
        );

    }

}


export default FruitForm;