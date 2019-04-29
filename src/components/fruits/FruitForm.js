import React from 'react';

function FruitForm(props) {


        return (
        <form>
            <h1>Ajouter un fruit</h1><br />
            <input type ='text' placeholder='Votre fruit' /><br />
            <button type='submit' >Ajouter</button>
        </form>
        )
    ;
}


export default FruitForm;