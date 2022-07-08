import {useState} from 'react'
import {useBetween} from "use-between"

const details = {
  productName : "",
  productPrice : "",
  productInfo : ""
}

export function useProductState(){
  const [product, setProduct] = useState(details)
  const [productList, setProductList] = useState([product])
return  {product, setProduct, productList, setProductList, details}
}

export default function useSharedState() {
return useBetween(useProductState)
} 
