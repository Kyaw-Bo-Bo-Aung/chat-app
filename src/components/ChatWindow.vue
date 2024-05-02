<template>
  <div class="chat-window">
    <div class="messages">
      <div class="single">
        <span class="created_at">3 min ago</span>
        <span class="name">kbba</span>
        <span class="message">message</span>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created_at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name{
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;

  }
</style>