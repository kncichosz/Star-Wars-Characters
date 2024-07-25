import { useEffect, useState } from "react";
import PersonInformation from './PersonInformation';
import Person from './Person';

const PersonsList = () => {

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

            {persons.length === 0 ? (
                <p>No persons found.</p>
            ) : (
                <>

                    <table>
                        <tbody>
                            {persons.map((person, index) => (
                                <tr key={index}>
                                    <th>{index + 1})</th>
                                    <td onClick={() => changeThePerson(index)}>{person.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {persons[indexOfPerson] && (
                        <PersonInformation person={persons[indexOfPerson]} />
                    )}
                
                </>
            )}

        </div>
    );
    
} 

export default PersonsList;