//我的成绩
<template>
    <div>
       <div class="jumbotron">
           <h1 class="display-3">我的成绩</h1>
           
       </div>
       <div class="container">
           <card />
       </div> 
       
    </div>
</template>
<script>
import card from '../components/CjCpt/MyCard.vue'

export default {
    components:{
        card
    }
}
</script>