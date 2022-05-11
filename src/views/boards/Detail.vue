<template>
  <v-container>
    <v-card>
      <v-row>
        <!-- 게시판 header -->
        <h2>게시판 - 보기</h2>
      </v-row>
      <v-card-text class="board-contents">
        <v-col class="rows">
          <v-text-field class="row col-md-1">{{ userName }}</v-text-field>
          <v-text-field class="row col-md-4"
            >등록일시 {{ createDate }}</v-text-field
          >
          <v-text-field class="row">수정일시{{ modifyDate }}</v-text-field>
        </v-col>
      </v-card-text>
      <v-card-text class="board-main">
        <v-row class="board-header">
          <v-col>
            {{ category }} <span> {{ title }}</span>
            <span> 조회수: {{ viewCount }}</span>
          </v-col>
        </v-row>
        <v-row class="board-content">
          <v-text-field>
            {{ content }}
          </v-text-field>
          <!--TODO: 첨부파일 -->
        </v-row>
      </v-card-text>
      <!--TODO: 댓글 -->
      <!-- 버튼 -->
      <v-row class="buttons">
        <button>목록</button>
        <button>수정</button>
        <button @click="movePage('/write')">등록</button>
      </v-row>
    </v-card>
  </v-container>
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
    this.getBoardDetailAPI(boardId);
  },

  methods: {
    /*  DateFormat(row) {
      row.createDate.format("YYYY-MM-DD"), row.modifyDate.format("YYYY-MM-DD");
    }, */

    getBoardDetailAPI(boardId) {
      this.boardId = $route.params.boardId;
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