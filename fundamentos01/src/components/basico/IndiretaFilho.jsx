import React, {useState} from 'react';

export default props => {
    const [nome, setNome] = useState('Bartholomeu Jojo Simpson')

    return(
        <div>
            <button onClick={() => {
                props.quandoClicar(nome)
            }}>
                Fornecer informações do aluno
            </button>
        </div>

    )
}