<template>
  <div>
    <div>
      <!-- 게시판 header -->
      <div>
        <h2>게시판 - 보기</h2>
      </div>
    </div>
    <div class="board-contents">
      <div class="row">
        <!-- <input type="hidden" v-model="board.boardId" /> -->
        <div class="boardDetail col-md-1">{{ board.userName }}</div>
        <div class="boardDetail col-md-4">등록일시 {{ board.createDate }}</div>
        <div class="boardDetail">수정일시{{ board.modifyDate }}</div>
      </div>
      <div class="board-main">
        <div class="board-header">
          <h3>
            {{ board.category }} <span> {{ board.title }}</span>
            <span> 조회수: {{ board.viewCount }}</span>
          </h3>
        </div>
        <div class="board-content">
          <div>
            {{ board.content }}
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
    const index = this.$route.params.boardId;
    return {
      board: {
        userName: "",
        createDate: "",
        modifyDate: "",
        category: "",
        title: "",
        viewCount: "",
        content: "",
      },
    };
  },

  mounted() {
    this.getBoardDetailView(boardId);
  },

  methods: {
    DateFormat(row) {
      row.createDate.format("YYYY-MM-DD"), row.modifyDate.format("YYYY-MM-DD");
    },
    getBoardDetailView() {
      BoardSevice.getBoardDetail
        .then((response) => {
          this.board = response.data;
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