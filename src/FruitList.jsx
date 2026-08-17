import React from "react";

function FruitList() {
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

    return (
        <div style={{ marginBottom: "20px" }}>
            {fruits.map((fruit) => (
                <p key={fruit}> {fruit.toUpperCase()} </p>
            ))}
        
        </div>
    );
   
}

export default FruitList;