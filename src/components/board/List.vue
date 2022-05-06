<template>
  <container>
    <div>
      <!-- 게시판 header -->
      <div>
        <h2>게시판 - 목록</h2>
      </div>
      <!-- 검색 -->
      <div>등록일, 수정일, 카테고리, inputbox, 검색 버튼</div>
    </div>
    <div>
      <div>총 게시글수</div>
      <table>
        <tr>
          <th>카테고리</th>
          <th>제목</th>
          <th>작성자</th>
          <th>조회수</th>
          <th>등록일시</th>
          <th>수정일시</th>
        </tr>
        <tr v-for="list in lists" v-bind:key="list.boardId">
          <td>list.category</td>
          <td>list.title</td>
          <td>list.userName</td>
          <td>list.viewCount</td>
          <td>list.createDate</td>
          <td>list.modifyDate</td>
        </tr>
      </table>
    </div>
  </container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>