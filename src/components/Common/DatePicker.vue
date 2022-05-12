<template>
  <v-menu
    ref="menu"
    v-model="dateModal"
    :return-value.sync="date"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="`${label}`"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="dateModal = false">Cancel</v-btn>
      <v-btn color="primary" @click="set()">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  name: "DatePicker",
  props: ["label"],
  data: () => ({
    date: "",
    dateModal: false,
  }),
  methods: {
    set() {
      this.date = this.date + " " + this.time;
      this.$refs.menu.save(this.date);
    },
  },
};
</script>