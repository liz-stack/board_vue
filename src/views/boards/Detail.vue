<template>
  <v-container>
    <v-card>
      <v-card-title>
        <!-- 게시판 header -->
        <h3>게시판 - 보기</h3>
      </v-card-title>
      <v-card-text class="board-description">
        <v-row>
          <span>작성자{{ userName }}</span>
          <span>등록일시 {{ createDate }}</span>
          <span>수정일시{{ modifyDate }}</span>
        </v-row>

        <v-row class="board-header">
          <span>[{{ category }}]</span>
          <span> {{ title }}</span>
          <span> 조회수: {{ viewCount }}</span>
        </v-row>

        <v-spacer></v-spacer>

        <v-row class="board-content">
          <v-text-field>
            {{ content }}
          </v-text-field>
          <!--TODO: 첨부파일 -->
        </v-row>
      </v-card-text>
      <!--TODO: 댓글 -->
      <!-- 버튼 -->
      <v-row align="center" justify="space-around">
        <v-btn>목록</v-btn>
        <v-btn>수정</v-btn>
        <v-btn @click="movePage('/write')">등록</v-btn>
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
      viewCount: "",
      title: "",
      content: "",
    };
  },

  mounted() {
    this.getBoardDetailAPI(this.boardId);
  },

  methods: {
    /*  DateFormat(row) {
      row.createDate.format("YYYY-MM-DD"), row.modifyDate.format("YYYY-MM-DD");
    }, */

    getBoardDetailAPI(boardI) {
      BoardSevice.getBoardDetail
        .then((response) => {
          this.boardId = response.data.boardId;
          this.userName = response.data.userName;
          this.createDate = response.data.createDate;
          this.modifyDate = response.data.modifyDate;
          this.viewCount = response.data.viewCount;
          this.category = response.data.category;
          this.title = response.data.title;
          this.content = response.data.content;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  computed: {
    param: function () {
      return this.$route.params;
    },
  },
};
</script>

<style scoped>
</style>