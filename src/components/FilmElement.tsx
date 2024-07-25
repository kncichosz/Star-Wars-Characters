import { useEffect, useState } from "react";

interface Film{

    title: string;
    director: string;
    release_date: string;
}

function FilmElement({ link }: {link:string}) {

    const [film, setFilm] = useState<Film | null>(null);

    async function getFilms() {
        const res = await fetch(link);
        const data = await res.json();
        //console.log(data.title);
        setFilm(data);
    }

    useEffect(function () { getFilms(); }, []);

    return (
        <ul>
            {film ? (
                <>
                    <li>Film title: {film.title}</li>
                    <li>Director: {film.director}</li>
                    <li>Release date: {film.release_date}</li>
                </>
            ) : ""
            }
        </ul>
    );
}

export default FilmElement;