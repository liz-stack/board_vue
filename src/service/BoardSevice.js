import axios from "axios";

const BASE_URL = "http://localhost:8000/api"

class BoardService {
    getBoards() {
        return axios.get(BASE_URL + '/boards');
    }
    getBoardDetail(boardId) {
        return axios.get(BASE_URL + '/boards/${boardId}')
    }
}

export default new BoardService()