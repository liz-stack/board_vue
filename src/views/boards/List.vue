<template>
  <v-container class="max-auto justify-center">
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
            <v-btn>검색</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-col>
        <v-data-table
          class="elevation-1"
          @click:row="onClickRow"
          :headers="headers"
          :items="boards"
          :items-per-page="itemsPerPage"
          hide-default-footer
        >
          <!-- :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus',
          }" -->
        </v-data-table>
      </v-col>
    </v-card>
    <v-card>
      <!-- 버튼 -->
      <v-row align="center" justify="space-around">
        <v-btn>목록</v-btn>
        <v-btn @click="register('/write')">등록</v-btn>
      </v-row>
    </v-card>
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
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      boards: [],

      headers: [
        { text: "카테고리", align: "center", value: "category" },
        { text: "제목", align: "start", value: "title" },
        { text: "작성자", align: "center", value: "userName" },
        { text: "조회수", align: "center", value: "viewCount" },
        { text: "등록일시", align: "center", value: "createDate" },
        { text: "수정일시", align: "center", value: "modifyDate" },
      ],
      conditions: [
        /* TODO: 카테고리로 바꿔야함 */
        { text: "제목", value: "title" },
        { text: "작성자", value: "userName" },
        { text: "내용", value: "content" },
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
    onClickRow(event, data) {
      this.movePage("/detail?boardId" + data.boards.boardId);
    },
  },
  mounted() {
    this.getBoardList();
  },
};
</script>

<style scoped>
</style>
