import Person from './Person'
import FilmElement from './FilmElement';
import Planet from './Planet'

const PersonInformation: React.FC<Person> = ({name, homeworld, height, mass, hair_color, skin_color, eye_color, birth_year, gender, films}) => {

    return (
        <div>
            <p>
                Name: {name} <br />
                Home world: <Planet link={homeworld}/><br/>
                Height: {height} <br />
                Mass: {mass} <br />
                Hair color: {hair_color} <br />
                Skin color: {skin_color} <br />
                Eye color: {eye_color} <br />
                Birth year: {birth_year} <br />
                Gender: {gender} <br />
                <ol>
                    {films.map((film, index) => (
                        <li> <FilmElement link={film} /> </li>
                    ))}
                </ol>
            </p>
        </div>
    );
};

export default PersonInformation;