<template>
  <div class="hello">
    <custom-header
      btnBack
      btnReport
      @btnReportClicked="reportAnswer"
    ></custom-header>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus esse veritatis voluptas. Molestias provident voluptas magni maiores ipsum laboriosam eveniet, aspernatur commodi autem quidem sequi cumque, amet doloribus dignissimos deleniti!</div>
    <div>Eveniet quis veritatis accusantium officiis alias earum, incidunt at deleniti distinctio, qui repudiandae nisi nemo eaque. Illo illum optio, voluptatum, aut quisquam adipisci, consectetur fuga iusto maiores dignissimos tempora! Saepe?</div>
    <div>Ipsam officiis ratione tenetur explicabo quasi. Dolorem est iure corporis ratione, quibusdam doloribus fugit cumque consequuntur cupiditate fugiat, hic repellat aliquid totam, adipisci repellendus accusantium maiores ipsa! Quibusdam, repellendus, enim!</div>
    <div>Laborum soluta dolorem blanditiis reiciendis fuga, enim fugit eligendi eum debitis sapiente, temporibus dolore quos, obcaecati aspernatur quae eaque consectetur dolorum impedit! Laborum atque facere, quia aut minima alias est.</div>
    <div>Nihil in laborum voluptates, iure veniam dolorem unde possimus! Tempora aut qui sed porro, voluptatum enim laudantium ullam cumque maiores libero aliquam eum, itaque consequatur ad alias deleniti at, molestias?</div>
    <div>Deleniti, in similique, sint error voluptatum tenetur enim officia consectetur, temporibus eveniet natus velit voluptas ea alias, repudiandae iure tempore libero quis non magnam soluta. Optio, voluptatibus earum inventore nisi.</div>
    <div>Aspernatur adipisci, cumque. In dignissimos, dolores totam non impedit doloremque. Voluptatum reiciendis et iusto doloremque sed vero, nobis, odit laudantium tempore exercitationem amet deleniti iste unde a quas fugit nemo?</div>
    <div>Sequi voluptates, harum debitis, facilis nulla ipsum autem quibusdam eius pariatur explicabo sapiente dicta aliquam perferendis sed minima dolores ea suscipit quidem quae! Eveniet corporis obcaecati delectus repellendus, totam eos.</div>
    <div>Similique, veritatis non ut ratione, adipisci facere fuga minus blanditiis maxime culpa necessitatibus, illo voluptatem distinctio doloribus! Rem, sint, nobis! Accusamus dignissimos, fugit molestias harum inventore aspernatur nesciunt! Itaque, quibusdam?</div>
    <div>Odit adipisci sint porro soluta, ad neque tenetur, ducimus, nostrum aliquid repudiandae quidem, ut culpa est. Numquam itaque sed quia nostrum voluptatibus assumenda sunt laudantium eveniet, labore aliquid voluptates harum!</div>
  </div>
</template>

<script>
import CustomHeader from './header';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    reportAnswer() {
      console.log('12');
      
    }
  },
  components: {
    'custom-header': CustomHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
