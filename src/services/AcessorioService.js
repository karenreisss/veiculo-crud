import axios from 'axios';

const acessorio_api_base_url = "http://localhost:8080/acessorio";

class AcessorioService {
  getAcessorios() {
    return axios.get(acessorio_api_base_url);
  }

  createAcessorio(acessorio) {
    return axios.post(acessorio_api_base_url, acessorio);
  }

  getAcessorioById(acessorioId) {
    return axios.get(`${acessorio_api_base_url}/${acessorioId}`);
  }

  updateAcessorio(acessorio, acessorioId) {
    return axios.put(`${acessorio_api_base_url}/${acessorioId}`, acessorio);
  }

  deleteAcessorio(acessorioId) {
    return axios.delete(`${acessorio_api_base_url}/${acessorioId}`);
  }
}

export default new AcessorioService();
