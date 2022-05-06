import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
})

/**
 * 게시글 목록 조회
 * @param {*} params 
 * @returns 
 */
function getBoardListAPI(params) {
    return instance.get('/board/list', params)
}


export {
    getBoardListAPI

}