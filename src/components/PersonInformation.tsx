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

const PersonInformation: React.FC<Person> = ({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender}) => {
    return (
        <div>
            <p>
                Name: {name} <br />
                Height: {height} <br />
                Mass: {mass} <br />
                Hair color: {hair_color} <br />
                Skin color: {skin_color} <br />
                Eye color: {eye_color} <br />
                Birth year: {birth_year} <br />
                Gender: {gender} <br />
            </p>
        </div>
    );
};

export default PersonInformation;