import React from "react";

function FruitList() {
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

    return (
        <div>
            {fruits.map((fruit) => (
                <p key={fruit}> {fruit.toUpperCase()} </p>
            ))}
        
        </div>
    );
   
}

export default FruitList;