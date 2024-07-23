import { useEffect, useState } from "react";

interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}

export default function PersonsList(){

    const [persons, setPersons] = useState<Person[]>([]);
    
    async function getPersons() {
        const res = await fetch("https://swapi.dev/api/people/");
        const data = await res.json();
        //console.log(data.results);
        setPersons(data.results);
    }

    useEffect(function () { getPersons(); }, []);

    //console.log("persons = " + persons);

    return(<div>

    {persons.map((person) => (
        <ul>
            <li>Name: {person.name}</li>
            <li>Height: {person.height}</li>
            <li>Mass: {person.mass}</li>
            <li>Hair color: {person.hair_color}</li>
            <li>Skin color: {person.skin_color}</li>
            <li>Eye color: {person.eye_color}</li>
            <li>Birth year: {person.birth_year}</li>
            <li>Gender: {person.gender}</li>
        </ul>
    ))}

    </div>);
}