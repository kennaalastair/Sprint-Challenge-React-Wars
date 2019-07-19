import React from 'react';


const CharactersCard = (props) => {
    return (
        <div className="character-card">
            <p>{props.value.name}</p>
        </div>
    );
}

export default CharactersCard;