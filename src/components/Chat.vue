<template>
  <div class="chat container">
    <h2 class="center teal-text">Life Chatting as {{ this.name }}</h2>
    <div class="card">
      <div class="card-content">
        <ul v-chat-scroll
            class="messages">
          <li v-for="message in messages"
              :key="message.id">
            <span class="teal-text">{{ message.name }}</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <new-message :name='name'/>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage';
import db from '@/firebase/init';
import moment from 'moment';

// const lang = navigator.language.slice(0, 2);
// moment.locale(lang);

export default {
  name: 'Chat',
  components: {
    NewMessage,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      messages: [],
    };
  },
  created() {
    const ref = db.collection('messages').orderBy('timestamp');

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('LLLL'),
          });
        }
      });
    });
  },
};
</script>

<style>
  .chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }
  .chat span {
    font-size: 1.4em;
  }
  .chat .time {
    display: block;
    font-size: 0.8em;
  }
  .messages {
    max-height: 300px;
    overflow-y: auto;
  }
  .messages::-webkit-scrollbar {
    width: 3px;
  }
  .messages::-webkit-scrollbar-track {
    background-color: #ddd;
  }
  .messages::-webkit-scrollbar-thumb {
    background-color: #aaa;
  }
  .messages li {
    margin-bottom: 5px;
  }
</style>
