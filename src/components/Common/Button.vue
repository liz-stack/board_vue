 <template>
  <v-btn class="btn" v-on="$listeners" v-bind="$attrs">
    {{ btnName }}
  </v-btn>
</template>

  <!-- v-on : Attach an event listener to the element. -->
  <!-- $attrs: 부모로부터 전달받은 props를 모두 담음 -->
  <!-- $listeners: 부모로부터 전달받은 이벤트 리스너들을 모두 담음 -->
</template>

<script>
export default {
  name: "Button",
  props: {
    btnName: String,
  },
};
</script>

<style scoped>
.btn:hover {
  cursor: pointer;
}
</style>
