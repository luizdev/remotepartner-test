<template>
  <div id="app">
    <div class="heading">    
      <h2>Valoraciones del producto</h2>
      <p>Aquí puedes consultar las últimas valoraciones que los usuarios han hecho sobre este producto.</p>
    </div>
    <div class="container"> 
      <Comment 
        v-for="(comment, index) in comentarios.comments.reviews" 
        :comment="comment" 
        :key="`comment-${index}`" 
      >
      </Comment>
    </div>
  </div>
</template>

<script>
import api from '@/api/api'
import Comment from './components/Comment'


export default {
  name: 'App',
  components: {
    Comment
  },
  data () {
    return {
      comentarios: ''
    }
  },
  methods: {
    getComments(){
      let commentsData = api.getComments()
      this.comentarios = commentsData
    }
  },
  created(){
    this.getComments()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #363732;
  padding: 8px;
}
.heading{
  margin: 0 0 1em;
  padding: 0 1em;
  
  h2{
    color: #359435;
    @include fontrem(24, bold);
  }
  p{
    margin: 0;
  }

  @include  media( tablet ){
    h2{
      @include fontrem(30, bold);
    }
  }
}
.container{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
