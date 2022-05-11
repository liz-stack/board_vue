import axios from "axios";

const BASE_URL = "http://localhost:8000/api/boards"


class BoardService {
    getBoardsAPI() {
        return axios.get(BASE_URL);
    }
    getBoardDetailAPI(boardId) {
        return axios.get(BASE_URL + '/201') //`/${boardId}`
    }
}

export default new BoardService()