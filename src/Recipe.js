import React from "react"; 


const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <h2>{calories}</h2>
            <img src={image} alt=" " />
        </div>
    );
}

export default Recipe;