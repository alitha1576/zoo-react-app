import { animalsData } from "./animals";


const AnimalsItems = animalsData.map((animal) => (
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


export default function AnimalProfile () {
    return (
     <div className="animalContainer">{AnimalsItems}</div>
    )
}