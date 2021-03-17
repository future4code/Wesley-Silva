import React, { useState, useEffect } from "react";
import axios from "axios";


function Tela_Matches(props) {
    const [pessoa, setPessoa] = useState ({});
    const [troca, setTroca] = useState ({});


    useEffect (() => {
        pessoaEscolhida(props.pessoa);
    }, [props.pessoa]);

    useEffect (() => {
        mudaMatch(props.troca);
    }, [props.troca]);

    const pessoaEscolhida = () => {
        
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wesley/person`)
        .then((response) => {
            setPessoa(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const mudaMatch = () => {

        const body = {
            id: pessoa.id,
            choice: true,
        };

        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wesley/choice-person`, body)
        .then((response) => {
            setTroca(response.data);
        })
        .catch((err) => {
            console.log(err);
        });

        
    };

        return(
            <div>
                <p>{pessoa.name}</p>
                <p>{pessoa.idade}</p>
                <p>{pessoa.descrição}</p>
                    <div>
                    <button>X</button><button>'coração'</button>
                    </div>
            </div>
        )

    }

    export default Tela_Matches;