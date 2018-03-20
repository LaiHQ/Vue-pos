import * as types from './mutations-type'
import axios from 'axios'
//获取pos常用商品
export const getOftenGoods =function({commit}){
	axios.get('/api/oftenGoods')
	.then((res)=>{		
		commit(types.SET_OFTENGOODS,res.data.data)
	}).catch((error)=>{
		console.log('错误'+error)
	})
}
//获取pos分类列表商品
export const getTypeGoods =function({commit}){
	axios.get('/api/typeGoods')
	.then((res)=>{		
		commit(types.SET_TYPEGOODS,res.data.data)
	}).catch((error)=>{
		console.log('错误'+error)
	})
}