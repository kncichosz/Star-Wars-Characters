import { useEffect, useState } from "react";
import PersonInformation from './PersonInformation';
import Person from './Person';

export default function PersonsList(){

    const [persons, setPersons] = useState<Person[]>([]);
    const [personName, setPersonName] = useState<string>('');
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

    function findThePerson(){
        const index = persons.findIndex(person => person.name === personName);
        if (index !== -1) {
            setIndexOfPerson(index);
        } else {
            console.log("Person not found.");
        }
    }

    useEffect(function () { getPersons(); }, []);

    //console.log("persons = " + persons);

    return (
        <div>

            <input type="text" value={personName} onChange={(e) => setPersonName(e.target.value)} ></input>
            <button onClick={findThePerson} >Search</button>

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
                    homeworld={persons[indexOfPerson].homeworld}
                    height={persons[indexOfPerson].height}
                    mass={persons[indexOfPerson].mass}
                    hair_color={persons[indexOfPerson].hair_color}
                    skin_color={persons[indexOfPerson].skin_color}
                    eye_color={persons[indexOfPerson].eye_color}
                    birth_year={persons[indexOfPerson].birth_year}
                    gender={persons[indexOfPerson].gender}
                    films={persons[indexOfPerson].films}
                />
            )}
            
        </div>
    );
    
} 