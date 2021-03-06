import React, { useState } from 'react';

import './style.css';

function DevForm({ onSubmit }){

    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
        });

        setGithubUsername('');
        setTechs('');
    }
   
    return (
        <form onSubmit={handleSubmit}>
        <h1>Cadastrar</h1>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input 
            name="github_username" 
            id="github_username" 
            required 
            value={github_username} 
            onChange={e =>setGithubUsername(e.target.value)} />
            <label htmlFor='techs'>Tecnologias</label>
            <input name="techs" 
            id="techs" 
            required 
            value={techs} 
            onChange={e =>setTechs(e.target.value)} />
          </div>
          <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;