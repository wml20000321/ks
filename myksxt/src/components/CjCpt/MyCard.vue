<template>
<div >
  <div class="card text-left mt-3"  v-for="(item, ind) in kslist" :key="ind">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-11">
            <h4 class="card-title">{{item.title}}</h4>
          </div>
           <div class="col-lg-1">
            <a  class="btn btn-primary" @click="gbll(ind)" type="button" role="button">查看</a>
            
          </div>
        </div>
      </div>
    </div>
    
</div>
    
</template>
<script>
import { mapState,mapActions } from 'vuex'
export default {
      data() {
       return {
        tclist:[],
       }
   },
    computed: {
      ...mapState({
        kslist:'kslist',
        jslist:"jslist",
        javalist:"javalist",
        vuelist:"vuelist",
      }),
      
    },
    methods: {
        ...mapActions({
            cjind:"cjind",
 
        }),
        gbll:function(ind){
          
          if(this.kslist[ind].title==this.javalist[0].name){
                this.cjind({name:this.kslist[ind],val:this.javalist});
                this.$router.push('/table');
            }
          
          

        }
    },
}
</script>