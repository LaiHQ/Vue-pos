import * as types from './mutations-type'

const mutations = {
	[types.SET_OFTENGOODS](state,oftenGoods){//获取常用商品
		state.oftenGoods = oftenGoods
	},
	[types.SET_TYPEGOODS](state,typeGoods){//获取商品列表
		state.typeGoods = typeGoods
	},
	[types.SET_TABLEDATA](state,goods){//添加商品			
		state.tableData.push(goods)
	},
	[types.DEL_SINGLEGOODS](state,goods){//删除单个商品
		state.tableData = state.tableData.filter(item =>{
            return item.goodsId != goods.goodsId
       });       
	},
	[types.DEL_ALLGOODS](state){//删除全部商品
		state.tableData = [];        
	}
}

export default mutations