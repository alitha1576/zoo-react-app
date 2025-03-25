import { useState } from "react";
import { animalsData } from "./animals";

export default function AnimalProfile () {
     const [filter, setFilter] = useState('all');

const filteredAnimals = filter === 'all' ? animalsData : animalsData.filter(animal => animal.type === filter);

const AnimalsItems = filteredAnimals.map((animal) => (
    <div key={animal.name} className="animalCard">
        <div className="animalImg" style={{ backgroundImage: `url(${animal.img})` }}></div>
        <div className="animalInfo">
        <h3 className="animalName">Name: {animal.name}</h3>
        <p className="animalType">Type: {animal.type}</p>
        <p className="animalOrigin">Origin: {animal.origin}</p>
        <p className="animalDescription">{animal.description}</p>
        </div>
    </div>
));

    return (
        <>
<div className="buttonsSection">
        <button onClick={() => setFilter('all')} id='allAnimals'>All animals</button>
        <button onClick={() => setFilter('Mammal')} id='mammals'>Mammals</button>
        <button onClick={() => setFilter('Bird')} id='birds'>Birds</button>
</div>
     <div className="animalContainer">{AnimalsItems}</div>
     </>
    )
}