<template>
  <div class="card">
		<div class="question">{{ question }}</div>
    <div class="user">
      <div class="avatar">
        <img :src="userAvatar" alt="">
      </div>
      <div class="info">
        <div class="name">{{ userName }}</div>
        <div class="school">{{ userSchool }}</div>
      </div>
    </div>
    <div class="answer"  @click="playAudio" >
      <!-- @click="checkAnswer(id)" -->
      <!--<div class="answer-bg-play">
        <img src="../assets/images/an.png" alt="">
      </div>-->
      <div class="test-voice" :style="{ width: voiceEleWidth + '%' }"></div>
      <div v-if="answerType === 'voice'" class="voice-answer">
        <span v-if="answerChecked">回听</span>
        <span v-else>免费播放</span>
      </div>
      <div v-else>
        <span v-if="answerChecked">回看</span>
        <span v-else>免费查看</span>
        <span class="answer-icon">Aa</span>
      </div>
    </div>
    <div class="answer-info">
      <img src="../assets/images/xb.jpg" alt=""><span>{{ answerTime }}</span>
      <span v-if="answerType === 'vioce'">收听{{ viewNumber }}</span>
      <span v-else>收看{{ viewNumber }}</span>
      <span>赞{{ likeNumber }}</span>
    </div>
  </div>
</template>

<script>
let timer = null;
export default {
  name: 'list-answer',
  props: {
    id: {
      type: Number,
      default: 233
    },
    question: {
      type: String,
      default: '提问提问提问提问提问提问提问提问提问提问提问提问'
    },
    userAvatar: {
      type: String,
      default: '/static/em_default_avatar.png'
    },
    userName: {
      type: String,
      default: '用户名'
    },
    userSchool: {
      type: String,
      default: '学校专业'
    },
    answerType: {
      type: String,
      default: 'voice'
    },
    answerChecked: {
      type: Boolean,
      default: false
    },
    answerTime: {
      type: String,
      default: '2017-06-10 16:42:00'
    },
    viewNumber: {
      type: Number,
      default: 0
    },
    likeNumber: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      voiceEleWidth: 0
    }
  },
  methods: {
    checkAnswer(answerId) {
      console.log('this.answerId', this.id);
      this.$router.push('/home/answer/' + answerId);
    },

    playAudio() {
      if (timer) {
        clearInterval(timer);
      }
      timer = setInterval(() => {
        if (this.voiceEleWidth >= 100) {
          this.voiceEleWidth = 100;
          clearInterval(timer);
          timer = null;
          console.log('answer voice end');
        } else {
          this.voiceEleWidth ++;
        }
      }, 300);
    },
  },
};
</script>

<style scoped>
  .card {
    margin: 12px;
    padding: 10px;
    border-radius: 6px;
    background: #fff;
  }
  .question {
    padding-bottom: 4px;
    border-bottom: 1px solid #e1e1e1;
    text-align: left;
    color: #282828;
  }
  .user {
    margin-top: 10px;
    display: flex;
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
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .info .name {
    color: #646464;
  }
  .info .school {
    margin-top: 2px;
    color: #969696;
    font-size: .8em;
  }

  .answer {
    width: 200px;
    height: 35px;
    margin: 10px auto;
    overflow: hidden;
    /* background: url(../assets/images/an.png); */
    border-radius: 0 18px 18px 18px;
    background: -webkit-linear-gradient(left, #ff71aa, #f71771);
    color: #fff;
    line-height: 35px;
    text-align: center;
  }
  .answer-icon {
    float: right;
    margin-right: 20px;
  }
  .voice-answer {
    background: url(../assets/images/voice0.png) 90% center no-repeat;
    background-size: 14px 20px;
  }
  .answer-info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
    color: #bcbcbc;
    font-size: .9em;
  }
  .answer-info span {
    margin-right: 6px;
  }



  .answer {
    position: relative;
  }
  .test-voice {
    position: absolute;
    width: 120px;
    height: 35px;
    overflow: hidden;
    /* background: url(../assets/images/background_free.png); */
    /* background-size: 200px 35px; */
    background: #ffafce;
  }
  .voice-answer {
    position: relative;
  }
</style>