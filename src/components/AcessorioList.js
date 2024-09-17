import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AcessorioService from '../services/AcessorioService';

const AcessorioList = () => {
  const [acessorios, setAcessorios] = useState([]);

  useEffect(() => {
    AcessorioService.getAcessorios().then((response) => {
      setAcessorios(response.data);
    });
  }, []);

  const deleteAcessorio = (id) => {
    AcessorioService.deleteAcessorio(id).then(() => {
      setAcessorios(acessorios.filter((acessorio) => acessorio.id !== id));
    });
  };

  return (
    <div>
      <h2>Lista de Acessórios</h2>
      <Link to="/add-acessorio">Adicionar Acessório</Link>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {acessorios.map((acessorio) => (
            <tr key={acessorio.id}>
              <td>{acessorio.nome}</td>
              <td>
                <Link to={`/edit-acessorio/${acessorio.id}`}>Editar</Link> &nbsp;
                <button onClick={() => deleteAcessorio(acessorio.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcessorioList;
