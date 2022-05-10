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
        <div class="row col-md-1">{{ userName }}</div>
        <div class="row col-md-4">등록일시 {{ createDate }}</div>
        <div class="row">수정일시{{ modifyDate }}</div>
      </div>
      <div class="board-main">
        <div class="board-header">
          <h3>
            {{ category }} <span> {{ title }}</span>
            <span> 조회수: {{ viewCount }}</span>
          </h3>
        </div>
        <div class="board-content">
          <div>
            {{ content }}
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
    return {
      body: this.$route.query,
      boardId: "",
      userName: "",
      createDate: "",
      modifyDate: "",
      category: "",
      title: "",
      content: "",
    };
  },

  mounted() {
    this.getBoardDetailAPI();
  },

  methods: {
    /*  DateFormat(row) {
      row.createDate.format("YYYY-MM-DD"), row.modifyDate.format("YYYY-MM-DD");
    }, */

    getBoardDetailAPI() {
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