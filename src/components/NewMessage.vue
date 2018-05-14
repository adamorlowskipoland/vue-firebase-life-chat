<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
        <label for="newMessage">New message (enter to add)</label>
        <input type="text"
            name="newMessage"
            id="newMessage"
            autocomplete="off"
            v-model="newMessage">
            <p v-if="feedback"
                class="red-text">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init';

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
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection('messages').add({
          content: this.newMessage,
          name: this.name,
          timestamp: Date.now(),
        })
          .catch((err) => {
            console.error(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = 'Enter a message you want to sand';
      }
    },
  },
};
</script>

<style>

</style>
