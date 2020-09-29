<template>
    <div>
        <div class="jumbotron">
            <h1 class="display-3">Jumbo heading</h1>
           
        </div>
        <div class="container">
            <table class="table">
           <thead>
               <tr>
                   <th>编号</th>
                   <th>题目</th>
                   <th>答案</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td scope="row"></td>
                   <td></td>
                   <td></td>
               </tr>
           </tbody>
       </table> 
        </div>
       
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    
    computed: {
        ...mapState({
            jilu:"jilu",
            kslist:"kslist",
            
        }),
        
    },
}
</script>