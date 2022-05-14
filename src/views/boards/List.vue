<template>
  <v-container class="max-auto justify-center">
    <!-- 검색 -->
    <v-card outlined max-width="100%">
      <v-card-text>
        <v-row>
          <!-- 날짜 기간검색 -->
          <v-col>
            <DatePicker :label="'시작일'"></DatePicker>
          </v-col>
          <v-col>
            <DatePicker :label="'종료일'"></DatePicker>
          </v-col>
          <!-- 카테고리 -->
          <v-col align-self="end" cols="12" md="2">
            <v-select
              label="전체 카테고리"
              v-model="searchCategory"
              :items="searchOption"
            ></v-select>
          </v-col>
          <v-col cols="12" md="5">
            <v-text-field
              v-model="keyword"
              label="검색어를 입력해 주세요. (제목+작성자+내용)"
              single-line
              @keypress.enter.prevent="getBoardList"
            ></v-text-field>
          </v-col>
          <v-col align-self="center" cols="12" md="1">
            <Button @click="getBoardList" :btnName="'검색'"></Button>
          </v-col>
        </v-row>
      </v-card-text>
      <v-col>
        <div>총 {{ totalCount }} 건</div>
      </v-col>
      <v-col>
        <!--  <v-simple-table>
          <thead>
            <tr>
              <td>카테고리</td>
              <td>제목</td>
              <td>작성자</td>
              <td>조회수</td>
              <td>등록일시</td>
              <td>수정일시</td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="board in boardList"
              :key="board.boardId"
              @click="clickDetail(board.boardId)"
            >
              <td>{{ board.category }}</td>
              <td>{{ board.title }}</td>
              <td>{{ board.userName }}</td>
              <td>{{ board.viewCount }}</td>
              <td>
                <span
                  >{{ board.createDate | moment("YYYY-MM-DD HH:mm") }}
                </span>
              </td>
              <span>{{ board.modifyDate | moment("YYYY-MM-DD HH:mm") }} </span>
            </tr>
          </tbody>
        </v-simple-table> -->
        <!--:search="keyword" props 사용하는 경우 모든 테이블 항목 검색ㅠㅠ -->
        <v-data-table
          class="elevation-1"
          @click:row="onClickRow"
          :headers="headers"
          :items="boardList"
          :search="keyword"
          :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-chevron-double-left',
            lastIcon: 'mdi-chevron-double-right',
            prevIcon: 'mdi-chevron-left',
            nextIcon: 'mdi-chevron-right',
          }"
        >
          <template v-slot:item.createDate="{ item }">
            {{ formatDate(item.createDate) }}
          </template>
          <v-alert slot="no-results" :value="true">
            Your search for "{{ keyword }}" found no results.
          </v-alert>

          <!-- <template v-slot="items" slot-scope="props">
            <td>{{ props.item.category }}</td>
            <td>{{ props.item.title }}</td>
            <td>{{ props.item.userName }}</td>
            <td>{{ props.item.viewCount }}</td>
            <td>{{ props.item.createDate.toLocaleString }}</td>
            <td>{{ props.item.modifyDate.toLocaleString }}</td>
          </template> -->
        </v-data-table>
      </v-col>
    </v-card>
    <v-card>
      <!-- 버튼 -->
      <v-row align="center" justify="space-around">
        <Button @click="movePage('/')" btnName="목록"></Button>
        <Button @click="movePage('/write')" btnName="등록"></Button>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import BoardService from "@/service/BoardService";
//import getBoardListAPI from "@/api/index";
import Button from "@/components/common/Button.vue";
import DatePicker from "@/components/common/DatePicker.vue";
import moment from "moment";

export default {
  components: { Button, DatePicker },
  name: "Boards",
  data() {
    return {
      boardList: [],
      pageNum: 1, //현재 페이지번호
      pageAmount: 10,

      headers: [
        {
          text: "카테고리",
          align: "center",
          filterable: false,
          value: "category",
        },
        { text: "제목", align: "start", value: "title" },
        { text: "작성자", align: "center", value: "userName" },
        { text: "조회수", align: "center", value: "viewCount" },
        { text: "등록일시", align: "center", value: "createDate" },
        { text: "수정일시", align: "center", value: "modifyDate" },
      ],

      /*      searchOption: [
        { text: "제목", value: "title" },
        { text: "작성자", value: "userName" },
        { text: "내용", value: "content" },
        { text: "전체", values: "title || userName || content" },
      ], */

      searchOption: ["JAVA", "Javascript", "Database"],
      searchCategory: "",
      keyword: "",
    };
  },
  created() {
    this.getBoardList();
  },
  computed: {
    startPage() {
      return (this.pageNum - 1) * this.pageAmount;
    },
    endPage() {
      return this.startPage + this.pageAmount;
    },
    totalPage() {
      return Math.ceil(this.boardList.length / this.pageAmount);
    },
    calcData() {
      return this.boardList.slice(this.startPage, this.endPage);
    },
  },

  /*  watch: {
    options: {
      handler() {
        this.getBoardList();
      },
      deep: true,
    },
  }, */
  methods: {
    formatDate(value) {
      return moment(value).format("YYYY.MM.DD HH:mm");
    },

    getBoardList() {
      BoardService.getBoards()
        .then((response) => {
          this.boardList = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /*  clickDetail(boardId) {
      window.location.href =
        window.location.pathname + "detail?boardId=" + boardId;
    }, */

    /* TODO 220509 boardId undefined */
    onClickRow(event, data) {
      this.movePage("/boards/" + data.item.boardId);
    },
  },
};
</script>

<style scoped>
</style>
