<template>
  <v-container class="max-auto justify-center">
    <br />

    <!-- 검색 -->
    <!-- TODO 등록일, 수정일, 카테고리, inputbox, 검색 버튼 -->
    <v-card outlined max-width="100%">
      <v-card-text>
        <v-row>
          <v-col align-self="end" cols="12" md="2">
            <v-select
              v-model="searchType"
              label="전체 카테고리"
              :items="conditions"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="searchValue"
              label="검색어를 입력해 주세요. (제목+작성자+내용)"
              single-line
              @keypress.enter.prevent="getBoardList"
            ></v-text-field>
          </v-col>
          <v-col align-self="center" cols="12" md="1">
            <button>검색</button>
          </v-col>
        </v-row>
      </v-card-text>

      <v-row>총 건</v-row>
      <v-row>
        <v-col>
          <v-data-table
            class="elevation-1"
            @click:row="onClickRow"
            :headers="headers"
            :items="board"
            :items-per-page="10"
          >
            <template slot="boards" slot-scope="props">
              <td>{{ props.board.category }}</td>
              <td>{{ props.board.title }}</td>
              <td>{{ props.board.userName }}</td>
              <td>{{ props.board.viewCount }}</td>
              <td>{{ props.board.createDate }}</td>
              <td>{{ props.board.modifyDate }}</td>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-card>
    <!-- 페이지네이션 -->
    <div></div>
    <!-- 버튼 -->
    <v-row class="buttons">
      <button>목록</button>
      <button @click="register('/write')">등록</button>
    </v-row>
  </v-container>
</template>

<script>
import BoardService from "@/service/BoardSevice";
import Button from "@/components/common/Button.vue";

export default {
  components: { Button },
  name: "Boards",
  data() {
    return {
      headers: [
        { text: "카테고리", align: "center", value: "category" },
        { text: "제목", align: "start", value: "title" },
        { text: "작성자", align: "center", value: "userName" },
        { text: "작성일시", align: "center", value: "createDate" },
        { text: "수정일시", align: "center", value: "modifyDate" },
        { text: "조회수", align: "center", value: "viewCount" },
      ],
      boards: [],
      conditions: [
        { text: "글 번호", value: "docNo" },
        { text: "제목", value: "title" },
        { text: "작성자", value: "writer" },
      ],
      searchType: "",
      searchValue: "",
    };
  },
  methods: {
    getBoardList() {
      BoardService.getBoardsAPI()
        .then((response) => {
          this.boards = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    /* TODO 220509 boardId undefined */
    clickDetail(boardId) {
      this.$router.push(`${boardId}`);
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

a {
  cursor: pointer;
}
</style>
