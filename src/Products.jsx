import {MdDelete} from "react-icons/md"
import useSharedState from "./UseSharedState"
import Modal from "./Modal"


export default function Products(){
const {productList, setProductList} = useSharedState()

  function deleteProduct(productToDelete) {
    setProductList(productList.filter(product => product.productName !== productToDelete));
    
  }
  return (
    <div>
      <h4 className="center">IProd product page</h4>

      { productList && productList.map(product=>{
      const {productName, productPrice, productInfo, id}= product
      if (productName && productPrice && productInfo) {
        return(
      <div key={id} className="card white">
        <p className="flow-text">{productName}</p>
        <p className="purple-text">{productPrice}</p>
        <p className="purple-text">{productInfo}</p>
       <span className="btn-floating transparent center" onClick ={()=> deleteProduct(productName)}>
        <MdDelete  className="fs-2 hoverable btn-md text-danger"/>
       </span> 
      </div>
        )
      }
      }
      )}
    </div>
  )
}