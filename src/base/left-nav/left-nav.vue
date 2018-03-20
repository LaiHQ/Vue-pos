<template>
    <div class="left-nav">
      <ul>
        <router-link to='/pos' tag='li'>
        	<i class="icon iconfont icon-rmb"></i>
          	<div>收银</div>
        </router-link>
        <router-link to='/shop' tag='li'>
        	<i class="icon iconfont icon-msnui-shop"></i>
          	<div>店铺</div>
        </router-link>  
        <router-link to='/commodity' tag='li'>
        	<i class="icon iconfont icon-goods-copy"></i>
         	<div>商品</div>
        </router-link>
		<router-link to='/vip' tag='li'>
        	<i class="icon iconfont icon-vip"></i>
          	<div>会员</div>
        </router-link>
        <router-link to='/all' tag='li'>
        	<i class="icon iconfont icon-zhuanshi"></i>
          	<div>统计</div>
        </router-link>
		<router-link to='/settings' tag='li'>
        	<i class="icon iconfont icon-shezhi"></i>
          <div>设置</div>
      	</router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "left-nav"
    }
</script>

<style scoped lang="less">
  .left-nav{
    color:#fff;
    font-size:10px;
    height:100%;
    background-color: #1D8ce0;
    float:left;
    width:5%;
    .iconfont{
    	font-size:24px;
  	}
  }  
  .left-nav ul{
    padding:0px;
    margin: 0px;
    li{
	    list-style: none;
	    text-align: center;
	    border-bottom:1px solid #20a0ff;
	    padding:10px;
	    cursor: pointer;	    
  	}
  }   
  .router-link-active{
	    color:#f8e702;
	} 

</style>
