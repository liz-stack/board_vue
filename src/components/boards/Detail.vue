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
        <!-- <input type="hidden" v-model="boardItem.boardId" /> -->
        <div class="boardDetail col-md-1">{{ boardItem.userName }}</div>
        <div class="boardDetail col-md-4">
          등록일시 {{ boardItem.createDate }}
        </div>
        <div class="boardDetail">수정일시{{ boardItem.modifyDate }}</div>
      </div>
      <div class="board-main">
        <div class="board-header">
          <h3>
            {{ boardItem.category }} <span> {{ boardItem.title }}</span>
            <span> 조회수: {{ boardItem.viewCount }}</span>
          </h3>
        </div>
        <div class="board-content">
          <div>
            {{ boardItem.content }}
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
import axios from "axios";

export default {
  name: "Detail",
  data() {
    return {
      boardItem: {
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
    this.getBoardDetail();
  },

  methods: {
    DateFormat(row) {
      row.createDate.format("YYYY-MM-DD"), row.modifyDate.format("YYYY-MM-DD");
    },
    getBoardDetail() {
      this.axios
        .get("http://localhost:8000/api/boards/" + this.$route.query.boardItem)
        .then((response) => {
          this.boardItem = response.data;
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