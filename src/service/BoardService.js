import http from "../http-common";


class BoardService {
    getBoards() {
        return http.get("/boards")
    }
}

export default new BoardService();