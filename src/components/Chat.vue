<template>
    <div class="chat container">
        <h2>Chat as {{ this.name }}</h2>
    </div>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>

</style>
