import React from 'react';

const PrimerApp = ({saludo = 'hola mundo'}) => {
    return (
        <>
            <h1>{saludo}</h1>
        </>
    );
}

export default PrimerApp;