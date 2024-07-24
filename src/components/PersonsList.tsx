import { useEffect, useState } from "react";
import PersonInformation from './PersonInformation'

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
    const [indexOfPerson, setIndexOfPerson] = useState<number>(0);
    
    async function getPersons() {
        const res = await fetch("https://swapi.dev/api/people/");
        const data = await res.json();
        //console.log(data.results);
        setPersons(data.results);
    }

    function changeThePerson(index: number){
        setIndexOfPerson(index);
    }

    useEffect(function () { getPersons(); }, []);

    //console.log("persons = " + persons);

    return (
        <div>
            <table>
                {persons.map((person, index) => (
                    <tr key={index}>
                        <th>{index})</th>
                        <td onClick={() => changeThePerson(index)}>{person.name}</td>
                    </tr>
                ))}
            </table>
    
           

            {persons[indexOfPerson] && (
                <PersonInformation
                    name={persons[indexOfPerson].name}
                    height={persons[indexOfPerson].height}
                    mass={persons[indexOfPerson].mass}
                    hair_color={persons[indexOfPerson].hair_color}
                    skin_color={persons[indexOfPerson].skin_color}
                    eye_color={persons[indexOfPerson].eye_color}
                    birth_year={persons[indexOfPerson].birth_year}
                    gender={persons[indexOfPerson].gender}
                />
            )}
            
        </div>
    );
    
}