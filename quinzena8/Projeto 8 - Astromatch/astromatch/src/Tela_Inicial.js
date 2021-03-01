import React, { useState, useEffect } from "react";
import axios from 'axios';
import Tela_Matches from "./Tela_Matches";

function Tela_Inicial () {

    const [listaMatches, setListaMatches] = useState ([]);
    const [nomeMatch, setNomeMatch] = useState("");

    useEffect (() => {

        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wesley/person")
        .then ((response) => {

            setListaMatches(response.data.results);
        })
        .catch((err) =>{
            console.log(err);
        });
    });

    const mudaNomeMatch = (event) => {
        setNomeMatch(event.target.value);
    };

    return (
        <div>

            <select onChange={mudaNomeMatch}>
                <option value={""}>Matches</option>

                {listaMatches.map(pessoa => {
                    return(
                        <option key={pessoa.name} value={pessoa.nome}>
                            {pessoa.nome}
                        </option>
                    );
                })}
            </select>

            {nomeMatch && <src pessoa={nomeMatch} />}    
        </div>
    );
}

export default Tela_Inicial;