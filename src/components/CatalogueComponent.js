import { apiCall } from "@/utils/apiCall"
import { useEffect, useState} from "react"
import Loading from "./Loading"
import BlackButton from "./buttons/BlackButton"
import ShoppingCartComponent from "./ShoppingCartComponent"
import { ShoppingCart } from "lucide-react"
import { useSelector, useDispatch } from "react-redux";
import { addLotToCard, removeLotFromCart, addOneUnitToCart, removeOneUnitFromCart, removeFromCart, clearCart } from "@/features/cart/cart";
import { ProductCard } from "./ProductCard"
import {base_url} from "@/API"

export default function CatalogueComponent({ setCurrentComponent, backButton }){
  const [products, setProducts] = useState([])
  const [currentCategory, setCurrentCategory]= useState("")
  const [categories, setCategory] = useState([])
  const [showCartComponent, setShowCartComponent] = useState(false)
  const org_id = useSelector((state)=>state.change.org_id)
  useEffect(() => {
    const org_id = localStorage.getItem("org_id");

    setProducts([]);

     apiCall('', "GET", `${base_url}/${org_id}/products/${currentCategory}`, setProducts);
     apiCall("", "GET", `${base_url}/${org_id}/get_product_categories`, setCategory);
  
  }, [currentCategory]);

    return showCartComponent? <ShoppingCartComponent modifier={setShowCartComponent} />:(<div className="right-section md:w-[75%] h-screen bg-primary p-10 overflow-x-scroll">
        <p className="text-3xl"><BlackButton name="<" className={`w-[40px] h-[50px] mr-5 rounded-2xl ${!currentCategory.length==0?`visible`:`hidden`}`} onClick={()=>{
        setCurrentCategory("")
        }}/>Catalogue</p> <button><ShoppingCart onClick={()=>{setShowCartComponent(true)}} /></button>
      {categories? <div className="flex flex-wrap justify-between mt-5 gap-y-10">{currentCategory.length==0? categories.map((key, i)=>(<div className="lg:h-[15em] h-[7em] w-[30%] p-5 bg-white flex justify-center items-center" onClick={()=>{setCurrentCategory(key)}} key={i}>{key}</div>)):<div className="flex flex-wrap justify-between">
        {products?(
          products.map((key, i) => (
            <ProductCard item={i} addLot={()=>{dispatch(addLotToCard(key)); }} removeLot ={()=>{dispatch(removeLotFromCart(key)); console.log("remove lot")}} addItem={()=>{dispatch(addOneUnitToCart(key))}} removeItem={()=>{dispatch(removeOneUnitFromCart(key))}} />
          ))
        
        ) : (
          <Loading title="Products"/>
        )}

        </div>}</div> :<Loading title="Loading"/>}
        { !currentCategory && backButton?backButton:""}
         </div>)
}