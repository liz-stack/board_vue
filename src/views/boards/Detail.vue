<template>
  <div>
    <div>
      <!-- 게시판 header -->
      <div>
        <h2>게시판 - 보기</h2>
      </div>
    </div>
    <div class="board-contents">
      <div class="rows">
        <div class="row col-md-1">{{ boardDetail.userName }}</div>
        <div class="row col-md-4">등록일시 {{ boardDetail.createDate }}</div>
        <div class="row">수정일시{{ boardDetail.modifyDate }}</div>
      </div>
      <div class="board-main">
        <div class="board-header">
          <h3>
            {{ boardDetail.category }} <span> {{ boardDetail.title }}</span>
            <span> 조회수: {{ boardDetail.viewCount }}</span>
          </h3>
        </div>
        <div class="board-content">
          <div>
            {{ boardDetail.content }}
          </div>
          <!--TODO: 첨부파일 -->
        </div>
      </div>
      <!--TODO: 댓글 -->
      <!-- 버튼 -->
      <div class="buttons">
        <button>목록</button>
        <button>수정</button>
        <button @click="movePage('/write')">등록</button>
      </div>
    </div>
  </div>
</template>

<script>
import BoardSevice from "@/service/BoardSevice";

export default {
  name: "Detail",
  data() {
    //const boardId = this.$route.params.boardId;
    return {
      boardId: 0,
      boardDetail: [],
    };
  },

  mounted() {
    this.getBoardDetailAPI(this.$route.params.boardId);
  },

  methods: {
    /*  DateFormat(row) {
      row.createDate.format("YYYY-MM-DD"), row.modifyDate.format("YYYY-MM-DD");
    }, */

    getBoardDetailAPI(boardId) {
      BoardSevice.getBoardDetail
        .then((response) => {
          this.boardDetail = response.data;
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