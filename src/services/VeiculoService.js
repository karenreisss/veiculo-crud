import axios from 'axios';

const veiculo_api_base_url = "http://localhost:8080/veiculo";

class VeiculoService {
  getVeiculos() {
    return axios.get(veiculo_api_base_url);
  }

  createVeiculo(veiculo) {
    return axios.post(veiculo_api_base_url, veiculo);
  }

  getVeiculoById(veiculoId) {
    return axios.get(`${veiculo_api_base_url}/${veiculoId}`);
  }

  updateVeiculo(veiculo, veiculoId) {
    return axios.put(`${veiculo_api_base_url}/${veiculoId}`, veiculo);
  }

  deleteVeiculo(veiculoId) {
    return axios.delete(`${veiculo_api_base_url}/${veiculoId}`);
  }
}

export default new VeiculoService();
