import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VeiculoService from '../services/VeiculoService';

const VeiculoList = () => {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    VeiculoService.getVeiculos().then((response) => {
      setVeiculos(response.data);
    });
  }, []);

  const deleteVeiculo = (id) => {
    VeiculoService.deleteVeiculo(id).then(() => {
      setVeiculos(veiculos.filter((veiculo) => veiculo.id !== id));
    });
  };

  return (
    <div>
      <h2>Lista de Veículos</h2>
      <Link to="/add-veiculo">Adicionar Veículo</Link>
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Ano de Fabricação</th>
            <th>Placa</th>
            <th>Acessório</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo) => (
            <tr key={veiculo.id}>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.anoFabricacao}</td>
              <td>{veiculo.placa}</td>
              <td>{veiculo.acessorio ? veiculo.acessorio.nome : 'Nenhum'}</td>
              <td>
                <Link to={`/edit-veiculo/${veiculo.id}`}>Editar</Link> &nbsp;
                <button className="delete-btn" onClick={() => deleteVeiculo(veiculo.id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VeiculoList;
