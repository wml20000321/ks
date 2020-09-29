<template>
<div>
  <div class="card text-left" >
      <div class="card-body">
        <div class="row">
          <div class="col-lg-11">
            <h4 class="card-title"></h4>
          </div>
           <div class="col-lg-1">
            <a  class="btn btn-primary" href="/table" role="button">查看</a>
          </div>
        </div>
      </div>
    </div>
</div>
    
</template>
<script>
import { mapState } from 'vuex'
export default {
    
    name:"card",
    props:{
        shitis:[],

    },
    computed: {
      ...mapState({
        
      }),
      
    },
    
}
</script>