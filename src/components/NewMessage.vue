<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
        <label for="newMessage">New message (enter to add)</label>
        <input type="text"
            name="newMessage"
            id="newMessage"
            v-model="newMessage">
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewMessage',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      newMessage: null,
    };
  },
  methods: {
    addMessage() {
      console.log(this.newMessage);
      console.log(this.name);
      console.log(Date.now());
    },
  },
};
</script>

<style>

</style>
