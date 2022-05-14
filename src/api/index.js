import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://192.168.0.34:8000/',
})

/**
 * 게시글 목록 조회
 * @param {*} params
 */
function getBoardListAPI(params) {
    return instance.get('/boards/', params)
}

/**
 * 게시글 상세 조회
 * @param {*} params
 */
function getBoardDetailAPI(params) {
    return instance.get('/boards/detail', params)
}

/**
 * 게시글 작성
 * @param {*} params
 */
function insertBoardAPI(params) {
    return instance.post('/boards/insert', null, params)
}

/**
 * 게시글 수정
 * @param {*} params
 */
function updateBoardAPI(params) {
    return instance.post('/boards/update', null, params)
}

/**
 * 게시글 삭제
 * @param {*} params
 */
function deleteBoardAPI(params) {
    return instance.post('/board/delete', null, params)
}


export {
    getBoardListAPI,
    getBoardDetailAPI,
    insertBoardAPI,
    updateBoardAPI,
    deleteBoardAPI,

}
