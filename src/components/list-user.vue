<template>
  <div>
    <div class="user">
      <div class="avatar">
        <img :src="avatar" alt="">
      </div>
      <div class="info">
        <div class="name">{{ name }}</div>
        <div class="school">{{ school }}</div>
        <div class="status">
          <span>{{ answerNumber }}个回答</span>
          <span>{{ followerNumber }}个粉丝</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-user',
  props: {
    id: {
      type: Number,
      default: 233
    },
    name: {
      type: String,
      default: '用户名'
    },
    avatar: {
      type: String,
      default: '/static/em_default_avatar.png'
    },
    school: {
      type: String,
      default: '学校专业'
    },
    answerNumber: {
      type: Number,
      default: 0
    },
    followerNumber: {
      type: Number,
      default: 0
    },
  },
  methods: {
    checkAnswer(answerId) {
      console.log('this.answerId', this.id);
      this.$router.push('/home/answer/' + answerId);
    }
  },
};
</script>

<style scoped>
  .user {
    display: flex;
    padding: 16px;
    justify-content: center;
    border-bottom: 1px solid #dadada;
    background: #fff;
    color: #969696;
    text-align: left;
  }
  .avatar {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
  }
  .avatar img {
    width: 100%;
    height: 100%;
  }
  .info {
    flex: 1;
  }
  .name {
    color: #646464;
  }
  .school, .status {
    margin-top: 2px;
    font-size: .8em;
  }
</style>