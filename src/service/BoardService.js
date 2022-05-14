import http from "../http-common";


class BoardService {
    getBoards() {
        return http.get("/boards");
    }
    getBoardDetail() {
        return http.get(`/boards/${boardId}`)
    }

}

export default new BoardService();