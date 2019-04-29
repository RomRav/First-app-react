import React from 'react';
import './counter.css';

class Counter extends React.Component{

    constructor(){
        super();
        //initialisation de l'état
        this.state = {
            clickCount: 0
        };

        this.addClickCount = this.changeClickCount.bind(this,1);
        this.subtractClickCount = this.changeClickCount.bind(this,-1);
        this.showFruitConsoleLog = this.showFruitConsoleLog.bind(this);
    }

    //Fonction de compte de click
    changeClickCount(amount){
        // setState: methode qui permet de modifier 
        let newClickCount = this.state.clickCount + amount;
        this.setState({clickCount: newClickCount},)
    }

    showFruitConsoleLog(fruit){
   
        console.log(fruit);
    }


    render(){
        let message;
        if(this.state.clickCount>0){
            message = <div class="positive">Positif</div>;
        }else if(this.state.clickCount === 0){
            message=<div class='null'>Null</div>;
        }else{
            message = <div class='negative'>Négatif</div>;
        }

        let fruits = ["Pommes", "Poires", "Oranges"];
        let fruitList = fruits.map((item)=>{
            return(<button onClick={
                ()=>{this.showFruitConsoleLog(item)}}>{item}</button>
                ) 
        });


        return(
            <div>
                <h1>Compteur des cliques</h1>
                <p>nb de clique: {this.state.clickCount}</p>
                <button onClick={this.addClickCount}>+</button>
                <button onClick={this.subtractClickCount}>-</button>
                <p></p>
                
                {message}

                <ul>{fruitList}</ul>
                

            </div>
          
            
        );
    }


}

export default Counter;