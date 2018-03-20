<template>
  <div class="pos">
    <div>
        <el-row >
          <el-col :span='7' id="order-list" class="pos-order">
              <el-tabs>
                <el-tab-pane label="点餐">
                  <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                    <el-table-column prop="count" label="数量" width="50"></el-table-column>
                    <el-table-column prop="price" label="金额" width="70"></el-table-column>
                    <el-table-column  label="操作" width="100" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                      </template>
                    </el-table-column>
                  </el-table>

                  <div class="totalDiv" v-if="this.tableData.length">
                    <small>数量:{{totalCount}}</small>
                    <small>金额:<span class="allprice">￥{{totalMoney}}</span></small>
                  </div>
                  <div class="div-btn">
                    <el-button type="warning" >挂单</el-button>
                    <el-button type="danger" @click="delAllGoods">删除</el-button>
                    <el-button type="success" @click="checkout">结账</el-button>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="挂单">

                </el-tab-pane>
                <el-tab-pane label="外卖">

                </el-tab-pane>
              </el-tabs>
          </el-col>
          <!--商品展示-->
          <el-col :span="17">
            <div class="often-goods clearfix">
              <div class="title">常用商品</div>
              <div class="often-goods-list">
                <ul class="clearfix">
                  <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                    <span>{{goods.goodsName}}</span>
                    <span class="o-price">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!--商品分类-->
            <div class="goods-type">
              <el-tabs>
                <el-tab-pane label="汉堡">
                  <ul class='cookList'>
                    <li v-for="goods in typeGoods[0]" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="小食">
                  <ul class='cookList'>
                    <li v-for="goods in typeGoods[1]" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="饮料">
                  <ul class='cookList'>
                    <li v-for="goods in typeGoods[2]" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="套餐">
                  <ul class='cookList'>
                    <li v-for="goods in typeGoods[3]" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
        </el-row>
      </div>
   </div>
</template>
<script>
    import {mapGetters,mapActions,mapMutations} from 'vuex'   
    export default {
      name: "pos",
      data(){
        return {
          //记录总数量
       		totalMoney:null,
        	//记录总价格
        	totalCount:null
        }
      },
      mounted(){
        var orderHeight = document.body.clientHeight;
        document.getElementById("order-list").style.height = orderHeight+'px';
        this.set_getOftenGoods();
      	this.set_getTypeGoods();
      },
      methods:{
      	//添加商品
        addOrderList(goods){
          this.totalCount=0; //汇总数量清0
          this.totalMoney=0;
          //判断商品是否存在商品订单列表中
          let isHave = false;
          for(let i=0; i<this.tableData.length; i++){
              if(this.tableData[i].goodsId === goods.goodsId){
                isHave = true
              }
          }
          //商品存在改变列表商品数量
          if(isHave){
              let arr = this.tableData.filter((item)=>{
                return item.goodsId === goods.goodsId
              })
              arr[0].count++
          }else {
           //不存在就加入商品列表
              let newGoods = {
                goodsId:goods.goodsId,
                goodsName:goods.goodsName,
                price:goods.price,
                count:1
              }
              this.SET_TABLEDATA(newGoods)
          }
          //进行总数量和价格的累加
          this.getAllMoney()
        },
        //删除单个商品
        delSingleGoods(goods){
          this.DEL_SINGLEGOODS(goods)
        },
        //删除所有商品
        delAllGoods() {
          this.DEL_ALLGOODS()
          this.totalCount = 0;
          this.totalMoney = 0;
        },
        //汇总数量和金额
        getAllMoney(){
          this.totalCount=0;
          this.totalMoney=0;
          if(this.tableData){
            this.tableData.forEach((element) => {
              this.totalCount += element.count;
              this.totalMoney=this.totalMoney+(element.price*element.count);
            });
          }
        },
        //结账
        checkout(){
            if(this.totalCount !=0){
              this.DEL_ALLGOODS();
              this.totalCount = 0;
              this.totalMoney = 0;
              alert('结账成功')
            }else {
              alert('不能空结')
            }
        },
		    ...mapMutations([
		    		'SET_TABLEDATA',
		    		'DEL_ALLGOODS',
		    		'DEL_SINGLEGOODS'
		    ]), 
	      ...mapActions({
	        	set_getOftenGoods:'getOftenGoods',
	        	set_getTypeGoods:'getTypeGoods'
	      })
	    },
      computed:{
      	...mapGetters({
      		oftenGoods:'oftenGoods',
      		typeGoods:'typeGoods',
      		tableData:'tableData'
      	})
      }
    }
</script>

<style scoped>
  .clearfix:after{
    content: '';
    display: block;
    height: 0;
    overflow: hidden;
    clear:both;
  }


  /*左边商品*/
  .pos-order{
    background-color: #f9fafc;/*#f9fafc*/
    border-right: 1px solid #c0ccda;
    height:100%;
    padding-left: 10px;
  }
  .div-btn{
    margin-top: 20px;
    text-align: center;
  }
  .totalDiv{
    margin-top: 20px;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }
  .totalDiv small{
    font-size: 14px;color: #606266;
    margin-right: 30px;
  }
  .totalDiv small .allprice{
    padding-left:10px;
    font-size: 16px;
    font-weight: bold;
    color:red
  }
  /*常用商品*/
  .title{
    height: 20px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
  }
  .often-goods-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:10px;
    margin:10px 10px;
    background-color:#fff;
    cursor: pointer;
  }
  .o-price{
    color:#58B7FF;
  }


  /*分类*/
  .goods-type{
    padding-left: 10px;
  }

  /**/
  .cookList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;
    cursor: pointer;
  }
  .cookList li span{

    display: block;
    float:left;
  }
  .foodImg{
    width: 40%;
  }
  .foodName{
    font-size: 16px;
    padding-left: 10px;
    color:brown;

  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }


</style>
