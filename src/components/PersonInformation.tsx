import Person from './Person'
import FilmElement from './FilmElement';
import Planet from './Planet'

const PersonInformation = ({ person }: { person: Person } ) => {

    return (
        <div>
            <p>
                Name: {person.name} <br />
                Home world: <Planet link={person.homeworld}/><br/>
                Height: {person.height} <br />
                Mass: {person.mass} <br />
                Hair color: {person.hair_color} <br />
                Skin color: {person.skin_color} <br />
                Eye color: {person.eye_color} <br />
                Birth year: {person.birth_year} <br />
                Gender: {person.gender} <br />
                <ol>
                    {person.films.map((film, index) => (
                        <li> <FilmElement link={film} /> </li>
                    ))}
                </ol>
            </p>
        </div>
    );
};

export default PersonInformation;