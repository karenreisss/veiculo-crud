import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AcessorioService from '../services/AcessorioService';

const AcessorioForm = () => {
  const [nome, setNome] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      AcessorioService.getAcessorioById(id).then((response) => {
        setNome(response.data.nome);
      });
    }
  }, [id]);

  const saveOrUpdateAcessorio = (e) => {
    e.preventDefault();
    const acessorio = { nome };

    if (id) {
      AcessorioService.updateAcessorio(acessorio, id).then(() => {
        navigate('/acessorios');
      });
    } else {
      AcessorioService.createAcessorio(acessorio).then(() => {
        navigate('/acessorios');
      });
    }
  };

  return (
    <div>
      <h2>{id ? 'Atualizar Acessório' : 'Adicionar Acessório'}</h2>
      <form>
        <div>
          <label>Nome do Acessório:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <button onClick={saveOrUpdateAcessorio}>Salvar</button>
      </form>
    </div>
  );
};

export default AcessorioForm;
