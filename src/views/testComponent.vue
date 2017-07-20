<template>
  <div>

    <!-- header -->
    <custom-header
      header-title="组件测试"
      btnBack
    ></custom-header>

    <!-- main content -->
    <div class="subpage-content">

      <!-- answer list item on index -->
      <list-answer v-for="item in answersList"
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

      <list-user v-for="item in usersList"
        :id="item.id"
        :avatar="item.avatar"
        :name="item.name"
        :school="item.school"
        :answerNumber="item.answerNumber"
        :followerNumber="item.followerNumber"
      >

      </list-user>
      <!-- user list item on index -->
		</div>
  </div>
</template>

<script>
import MockData from '../mockdata/tab-index';

export default {
  name: 'page-test-component',
  data() {
    return {
      pageTitle: 'test page',
      answersList: [],
      usersList: [],
    }
  },
  created() {
    // this.answerList = MockData.answerList;
    this.answersList.push(MockData.answersList[0]);
    // this.userList = MockData.userList;
    this.usersList.push(MockData.usersList[0]);
  }
}
</script>

<style>
</style>