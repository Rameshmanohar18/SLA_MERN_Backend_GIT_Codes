import React from 'react'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'

const Products = () => {

const productDatas = [{
    name:"React",
    course:"Node",
    Fees:4000
},{
    name:"JS",
    course:"Node",
    Fees:3000
},{
    name:"Node",
    course:"React",
    Fees:7000
}]



  return (
    <>
    <ProductList  datas = {productDatas}   />

    <ProductDetails datanew = {productDatas} />
    </>
  )
}

export default Products