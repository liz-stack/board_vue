import axios from "axios";

const BOARD_API_BASE_URL = "http://localhost:8000/api/boards"

class BoardService {
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
    getBoardDetail(boardId) {
        return axios.get(BOARD_API_BASE_URL + '/${boardId}')
    }
}

export default new BoardService()