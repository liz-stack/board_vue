 <template>
  <div class="btn" :type="type">{{ name }}</div>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: String,
    name: String,
  },
};
</script>

<style scoped>
.btn:hover {
  cursor: pointer;
}
</style>
