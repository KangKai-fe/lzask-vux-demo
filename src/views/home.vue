<template>
  <div>

    <!-- header -->
    <custom-header
      header-title="逛逛"
      btnMsg
      btnSearch
    ></custom-header>

    <!-- tabs -->
    <mt-navbar class="subtab" fixed v-model="selected">
      <mt-tab-item id="subtab_msg">热门</mt-tab-item>
      <mt-tab-item id="subtab_person">热心</mt-tab-item>
    </mt-navbar>

    <!-- subpage content -->
    <mt-tab-container class="subpage-content" swipeable v-model="selected">

      <!-- 热门 -->
      <mt-tab-container-item id="subtab_msg">
        <!--<mt-cell v-for="n in 10" :title="'内容 ' + n"></mt-cell>-->

        <!-- answers list -->
        <mt-loadmore
          :autoFill="false"
          :top-method="answersLoadTop"
          @top-status-change="handleTopChange"
          :bottom-method="answersLoadBottom"
          :bottom-all-loaded="answersAllLoaded"
          ref="loadmoreAnswers"
        >
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'pull'">下拉刷新</span>
            <span v-show="topStatus === 'drop'">释放刷新</span>
            <span v-show="topStatus === 'loading'" class="loading"></span>
          </div>

          <list-answer v-for="(item, index) in answersList"
            :key="index"
            :id="item.id"
            :question="item.question"
            :userAvatar="item.userAvatar"
            :userName="item.userName"
            :userSchool="item.userSchool"
            :answerChecked="item.answerChecked"
            :answerTime="item.answerTime"
            :viewNumber="item.viewNumber"
            :likeNumber="item.likeNumber"
          ></list-answer>
        </mt-loadmore>
      </mt-tab-container-item>
      <mt-tab-container-item id="subtab_person">
        <!--<mt-cell v-for="n in 4" :title="'测试 ' + n"></mt-cell>-->

        <!-- users list -->
        <mt-loadmore
          :autoFill="false"
          @top-status-change="handleTopChange"
          :top-method="usersLoadTop"
          :bottom-method="usersLoadBottom"
          :bottom-all-loaded="usersAllLoaded"
          ref="loadmoreUsers"
        >

          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'pull'">下拉刷新</span>
            <span v-show="topStatus === 'drop'">释放刷新</span>
            <span v-show="topStatus === 'loading'">Loading...</span>
          </div>

          <list-user v-for="(item, index) in usersList"
            :key="index"
            :id="item.id"
            :avatar="item.avatar"
            :name="item.name"
            :school="item.school"
            :answerNumber="item.answerNumber"
            :followerNumber="item.followerNumber"
          ></list-user>
        </mt-loadmore>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
/* mint-ui */
import { Navbar, TabItem, TabContainer, TabContainerItem, Loadmore } from 'mint-ui';

/* custom components */
import CustomHeader from '../components/header';
import ListAnswer from '../components/list-answer';
import ListUser from '../components/list-user';

/* mock data */
import MockData from '../mockdata/tab-index';

export default {
  data () {
    return {
      selected: 'subtab_msg',
      answersList: [],
      answersAllLoaded: false,
      topStatus: '',
      usersList: [],
      usersAllLoaded: false,
    }
  },
  methods: {
    handleTopChange(status) {
      this.topStatus = status;
    },

    answersLoadTop() {
      const firstItemId = this.answersList[0].id;
      setTimeout(() => {
        for (let i = firstItemId; i > firstItemId - 5; i--) {
          this.answersList.unshift({ id: i - 1 });
        }
        this.$refs.loadmoreAnswers.onTopLoaded();
      }, 1000);
    },

    answersLoadBottom() {
      // const lastItemId = this.answersList[this.answersList.length - 1].id;
      // setTimeout(() => {
      //   for (let i = lastItemId; i < lastItemId + 5; i++) {
      //     this.answersList.push({ id: i + 1 });
      //     if (i >= 12) {
      //       this.answersAllLoaded = true;// 若数据已全部获取完毕
      //       break;
      //     }
      //   }
      //   this.$refs.loadmoreAnswers.onBottomLoaded();
      // }, 1000);
      this.$http.get('/static/api/answersList.js')
        .then(res => {
          let resData = JSON.parse(JSON.stringify(res));
          if (resData.success) {
            this.answersList = this.answersList.concat(resData.answersList);
          }
          this.$refs.loadmoreAnswers.onBottomLoaded();
        })
        .catch(err => {
          console.log('err', err);
          this.$refs.loadmoreAnswers.onBottomLoaded();
        })
    },

    usersLoadTop() {
      const firstItemId = this.usersList[0].id;
      setTimeout(() => {
        for (let i = firstItemId; i > firstItemId - 5; i--) {
          this.usersList.unshift({
            id: i - 1,
            name: '用户' + (i - 1),
          });
        }
        this.$refs.loadmoreUsers.onTopLoaded();
      }, 1000);
    },

    usersLoadBottom() {
      const lastUserId = this.usersList[this.usersList.length - 1].id;
      setTimeout(() => {
        for (let i = lastUserId; i < lastUserId + 5; i++) {
          this.usersList.push({ id: i + 1 });
          if (i >= 12) {
            this.usersAllLoaded = true;// 若数据已全部获取完毕
            break;
          }
        }
        this.$refs.loadmoreUsers.onBottomLoaded();
      }, 1000);
    }
  },

  created() {
    this.answersList = MockData.answersList;
    this.usersList = MockData.usersList;
    // console.log(this.usersList);
    
  },
  components: {
    CustomHeader,
    ListAnswer,
    ListUser,
    'mt-navbar': Navbar,
    'mt-tab-item': TabItem,
    'mt-tab-container': TabContainer,
    'mt-tab-container-item': TabContainerItem,
    'mt-loadmore': Loadmore,
  }
}
</script>

<style>
/*.tab-ask {
  background: #fff !important;
}
.icon-tab-ask {
  width: 200%;
  height: 200%;
  transform: translate(-12px, -12px);
}*/
.subtab {
  margin-top: 40px;
}
.subpage-content {
  margin-top: 86px;
}
.rotate {
  display: inline-block;
  transform: rotate(180deg);
}
.loading {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: url(../assets/images/timer.gif) center center no-repeat;
  background-size: 100px 75px;
}
</style>