<template>
  <div class="card">
    <div class="rating">
      <div class="w-star">        
        <span class="star" 
          v-for="(rating, index) in 5" 
          :key="index"  
          :class="{ active : ((comment.rating >= rating) && comment.rating != null)}"
        >
        </span>

      </div>
    </div>
    <div class="publish__name_date">
      {{comment.author}} el {{comment.date | dateformat }}
    </div>
    <div class="detail">
      <p>{{comment.comment}}</p>
    </div>
    <div class="w-button">
      <a class="btn" href="#"  @click.prevent="addLike()" :class="{ active: isActive }">
        <i class="ico ico-hand"></i>
        Es útil
      </a>
      <p>{{comment.useful_count}} personas {{text}} que es útil</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/es';

moment.locale('es');

export default {
  name: 'Comment',
  props: ['comment'],
  filters: {
    dateformat: function (value) {
      if (value) {
        const fullDay = moment(value).format('dddd')
        const day = moment(value).format('DD')
        const fullMonth = moment(value).format('MMMM')
        const fullYear = moment(value).format('YYYY')
        return `${fullDay}, ${day} de ${fullMonth} de ${fullYear}`
      }
    }
  },
  data(){
    return {
     isActive: false,
     text: "creen",
     stars: 0
    }
  },
  methods: {
    addLike: function() {
      if(this.isActive !== true){
        this.isActive = true
        this.comment.useful_count += 1
        this.text = "creéis"
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card{
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  padding: 1em;
  margin: 0.5em;
  width: 100%;
  @include  media( tablet ){
    flex-basis: calc(50% - 1em);
  }
  @include  media( desktop ){
    flex-basis: calc(33.33% - 1em);
  }

  .publish__name_date{
    color: #757575;
    @include fontrem(12, normal);
    margin-bottom: 1em;
  }
  .detail{
    margin-bottom: 1em;
    p{
      line-height: 1.5;
      margin: 0;
    }
  }

}
.w-star{
  margin-bottom: 0.5em;
}
.star{
  background:  url( $assets + '/star.svg')  no-repeat center center;
  display: inline-block;
  height: 24px;
  width: 24px;
  &.active{
    background:  url( $assets + '/star_fill.svg')  no-repeat center center;
  }
}

.w-button{
  align-items: center;
  display: flex;
  margin-top: auto;
  p{
    color: #757575;
    margin: 0;
  }
}

.btn{
  margin-right: 1em;
  .ico-hand{
    background: url( $assets +  "/hand.svg") no-repeat center center;
  }
  &:hover, &.active{
    .ico-hand{
      background: url( $assets +  "/hand_white.svg") no-repeat center center;
    }
  }
}
</style>
