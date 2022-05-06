import axios from 'axios'

const config = axios.create({
    baseURL: 'http://localhost:8000/api',
    //headers: { 'Content-Type': 'application/json' }
})

/**
 * 게시글 목록 조회
 * @param {*} params 
 * @returns 
 */
function getBoardListAPI() {
    return axios.get('${config.baseURL}/board.json')
}


export {
    getBoardListAPI
}

