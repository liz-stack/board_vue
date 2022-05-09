<template>
  <div class="container">
    <div>
      <!-- 게시판 header -->

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
        <tr
          v-for="board in boards"
          v-bind:key="board.boardId"
          @click="movePage(board.boardId)"
        >
          <td>{{ board.category }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.userName }}</td>
          <td>{{ board.viewCount }}</td>
          <td>{{ board.createDate }}</td>
          <td>{{ board.modifyDate }}</td>
        </tr>
        <tr v-if="boards.length == 0">
          <td>데이터가 없습니다.</td>
        </tr>
      </table>
    </div>
    <!-- 페이지네이션 -->
    <div></div>
    <!-- 버튼 -->
    <div class="buttons">
      <button>목록</button>
      <button @click="register('/write')">등록</button>
    </div>
  </div>
</template>

<script>
import BoardService from "@/service/BoardSevice";

export default {
  name: "Boards",
  data() {
    return {
      boards: [],
    };
  },
  methods: {
    getBoardList() {
      BoardService.getBoards()
        .then((response) => {
          this.boards = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    /* TODO 220509 boardId undefined */
    movePage(boardId) {
      this.$router.push({
        name: "Detail",
        params: {
          boarId: this.body.boardId,
        },
      });
    },
  },
  mounted() {
    this.getBoardList();
  },
};
</script>

<style scoped>
.board table td:nth-child(1) span {
  cursor: pointer;
}
</style>

</style>