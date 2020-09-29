<template>
  <div class="progress">
    <div
      class="progress-bar progress-bar-striped progress-bar-animated"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      :style="widths"
    >{{pr}}</div>
  </div>
</template>

<script>
export default {
    name:'Progress',
    props:["pr"],
    computed:{
        widths(){
            return `width:${this.pr}%`
        }
    }
}
</script>