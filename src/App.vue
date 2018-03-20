<template>
  <div id="app">
    <!--左测导航-->
      <left-nav></left-nav>

    <!--操作区域-->
    <div class="main">
    	<keep-alive>
    		<router-view/>
    	</keep-alive>        
    </div>
    
  </div>
</template>

<script>
import leftNav from '@/base/left-nav/left-nav'	
export default {
  name: 'App',
  components:{
  	leftNav
  }
}
</script>

<style>
	.main{
	    float: left;
	    width: 95%;
	    background-color:#EFF2F7;
	    height:100%;
	    overflow: auto;
	  }
</style>
