<template>
  <div>
    <div>
      <!-- 게시판 header -->
      <div>
        <h2>게시판 - 목록</h2>
      </div>
      <!-- 검색 -->
      <!-- <div>등록일, 수정일, 카테고리, inputbox, 검색 버튼</div> -->
    </div>
    <div>
      <div>총 건</div>
      <table class="table">
        <tr>
          <th>카테고리</th>
          <th>제목</th>
          <th>작성자</th>
          <th>조회수</th>
          <th>등록일시</th>
          <th>수정일시</th>
        </tr>
        <tr v-for="boardItem in boardList" v-bind:key="boardItem.boardId">
          <td>{{ boardItem.category }}</td>
          <td>{{ boardItem.title }}</td>
          <td>{{ boardItem.userName }}</td>
          <td>{{ boardItem.viewCount }}</td>
          <td>{{ boardItem.createDate }}</td>
          <td>{{ boardItem.modifyDate }}</td>
        </tr>
        <tr v-if="boardList.length == 0">
          <td>데이터가 없습니다.</td>
        </tr>
      </table>
    </div>
    <!-- 페이지네이션 -->
    <div></div>
    <!-- 버튼 -->
    <div class="buttons">
      <button>목록</button>
      <!-- <button @click="movePage('/write')">등록</button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      boardList: [],
    };
  },
  mounted() {
    this.getBoardList();
  },
  /*  created() { //생성되자마자 실행
    getboardItemAPI()
      .then((response) => (this.boardList = response.data.boardList))
      .catch((error) => console.log(error));
  }, */

  methods: {
    getBoardList() {
      axios
        .get("http://localhost:8000/api/board")
        .then((response) => {
          this.boardList = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
</style>