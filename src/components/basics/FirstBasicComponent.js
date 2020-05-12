import React from "react";

export default function FirstBasicComponent() {
    const title = 'Primeiro Componente';
    const message = 'Seja bem-vindo(a)';
    return (
        <div>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
}