import { useEffect, useState } from "react";

const Planet = ({link}: {link:string}) => {
    
    const [planetName, setPlanetName] = useState<string | null>(null);

    async function getPlanetName() {
        const res = await fetch(link);
        const data = await res.json();
        //console.log(data);
        setPlanetName(data.name);
    }

    useEffect(function () { getPlanetName(); }, [link]);    
    
    return(
        <>
            {
                planetName ? planetName : ""
            }
        </>
    );
}

export default Planet;