<template>
  <div>
    <tabbar class="vux-demo-tabbar">

      <!-- tabbar-item's class & label's v-if is for test -->
      <tabbar-item class="tab-item" link="/" :selected="path === '/'">
        <img slot="icon" src="../assets/images/images06.png">
        <img slot="icon-active" src="../assets/images/images6.png">
        <span v-if="path === '/'" slot="label">逛逛</span>
      </tabbar-item>
      <tabbar-item class="tab-item" link="/c1" :selected="path === '/c1'">
        <img slot="icon" src="../assets/images/images07.png">
        <img slot="icon-active" src="../assets/images/images7.png">
        <span v-if="path === '/c1'" slot="label">听听</span>
      </tabbar-item>
      <tabbar-item link="/ask">
        <img class="icon-tab-ask" slot="label" src="../assets/images/images_05.png">
      </tabbar-item>
      <tabbar-item class="tab-item" link="/c2" :selected="path === '/c2'">
        <img slot="icon" src="../assets/images/images08.png">
        <img slot="icon-active" src="../assets/images/images8.png">
        <span v-if="path === '/c2'" slot="label">聊聊</span>
      </tabbar-item>
      <tabbar-item class="tab-item" link="/c3" :selected="path === '/c3'">
        <img slot="icon" src="../assets/images/images09.png">
        <img slot="icon-active" src="../assets/images/images9.png">
        <span v-if="path === '/c3'" slot="label">我的</span>
      </tabbar-item class="tab-item">
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';
import { mapState } from 'vuex';

export default {
  name: 'index-tabbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    }),
    path() {
      console.log('path =========== ', this.$route.path);
      
      return this.$route.path;
    }
  },
	components: {
		Tabbar,
		TabbarItem,
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon-tab-ask {
    margin: 0 auto;
    width: 55px;
    transform: translateY(-10px);
  }


  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
