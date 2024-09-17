import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VeiculoService from '../services/VeiculoService';
import AcessorioService from '../services/AcessorioService';

const VeiculoForm = () => {
  const [modelo, setModelo] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [placa, setPlaca] = useState('');
  const [acessorioId, setAcessorioId] = useState('');
  const [acessorios, setAcessorios] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Carregar acessórios
    AcessorioService.getAcessorios().then((response) => {
      setAcessorios(response.data);
    });

    if (id) {
      VeiculoService.getVeiculoById(id).then((response) => {
        setModelo(response.data.modelo);
        setAnoFabricacao(response.data.anoFabricacao);
        setPlaca(response.data.placa);
        setAcessorioId(response.data.acessorio ? response.data.acessorio.id : '');
      });
    }
  }, [id]);

  const saveOrUpdateVeiculo = (e) => {
    e.preventDefault();

    const veiculo = { modelo, anoFabricacao, placa, acessorio: { id: acessorioId } };

    if (id) {
      VeiculoService.updateVeiculo(veiculo, id).then(() => {
        navigate('/veiculos');
      });
    } else {
      VeiculoService.createVeiculo(veiculo).then(() => {
        navigate('/veiculos');
      });
    }
  };

  return (
    <div>
      <h2>{id ? 'Atualizar Veículo' : 'Adicionar Veículo'}</h2>
      <form>
        <div>
          <label>Modelo:</label>
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div>
          <label>Ano de Fabricação:</label>
          <input
            type="number"
            value={anoFabricacao}
            onChange={(e) => setAnoFabricacao(e.target.value)}
          />
        </div>
        <div>
          <label>Placa:</label>
          <input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
          />
        </div>
        <div>
          <label>Acessório:</label>
          <select
            value={acessorioId}
            onChange={(e) => setAcessorioId(e.target.value)}
          >
            <option value="">Nenhum</option>
            {acessorios.map((acessorio) => (
              <option key={acessorio.id} value={acessorio.id}>
                {acessorio.nome}
              </option>
            ))}
          </select>
        </div>
        <button onClick={saveOrUpdateVeiculo}>Salvar</button>
      </form>
    </div>
  );
};

export default VeiculoForm;
