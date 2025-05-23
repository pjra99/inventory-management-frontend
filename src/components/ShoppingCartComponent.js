import BlackButton from "./buttons/BlackButton";
import { useDispatch, useSelector } from "react-redux";
import {addOneUnitToCart, removeOneUnitFromCart, removeFromCart, clearCart } from "@/features/cart/cart";
import {toggleAddToCart, setOrgId, setCustomerId} from "@/features/general/states"
import { useEffect, useReducer } from "react";
import { apiCall } from "@/utils/apiCall";
import { base_url } from "@/API";

export default function ShoppingCartComponent({modifier}){
  const cart = useSelector((state) => state.cart.cart);
  const customer_email = useSelector((state)=> state.change.customer_email)
  const productsInCart = Object.values(cart)
  const org_id = useSelector((state)=>state.change.org_id)
  const dispatch = useDispatch();

  //  useEffect(()=>{
  //   console.log(Object.values(cart))
  //  }, [cart])
  const handleCreateOrder = async()=>{
    console.log("Customer email",customer_email)
    if(cart && cart.length==0){
      alert("No Products to create an order!")
      return
    }
    // console.log("clicked")
 
    if(!customer_email){
      alert("Please add a customer")
      return
    } 
    try{
      
      console.log(customer_email)
      let url = `${base_url}/${org_id}/orders/${customer_email}`
      let response= await apiCall(Object.values(cart), "POST", url,  "")
      console.log(org_id)
      console.log("Customer_id",customer_email)
      alert("Order Successfully created!")
      dispatch(clearCart())
      localStorage.clear()
    }
    catch(e){
      console.log(e)
    }
  }


   const calcDiscount =(item_count, discount_perc, selling_price, min_lot_size)=>{
    let lot_size = item_count>= min_lot_size? Math.floor(item_count/min_lot_size):0
    let total = selling_price*lot_size
    console.log(lot_size)
    console.log(discount_perc)
    console.log(total)
    let discount_per_lot = min_lot_size* discount_perc*0.01
    let discount_total = discount_per_lot * lot_size
    return discount_total.toFixed(2)
   }
return <div className="right-section md:w-[75%] h-screen bg-primary p-10 overflow-scroll">
    <div><BlackButton name="Back" onClick={()=>{modifier(false)}} /></div>
    {/* <div>ShoppingCart</div> */}
    <ul className="mt-5">
        {productsInCart.map((item) => (
          <li key={item._id} className="flex justify-between p-2 bg-white my-2">
            <div className="w-[10%] pl-5"><img src={item.image_url} className="w-12 h-12" />
            <span className="text-sm text-gray">{item.name}</span></div>
            <div className="w-[10%] pt-5">Price: {item.selling_price}*{item.count}={item.selling_price*item.count} Rs</div>
            <div className="w-[10%] pt-5">Discount: {calcDiscount(item.count, item.discount_percentage, item.selling_price, item.min_lot_size)} Rs</div>
            <div className="w-[10%] pt-5">Final Price: {item.selling_price*item.count- calcDiscount(item.count, item.discount_percentage, item.selling_price, item.min_lot_size)  } Rs</div>
            <div className="w-[10%] mt-5"><button className="" onClick={()=>{dispatch(removeOneUnitFromCart(item))}}>-</button><span className="mx-4">{cart[item._id].count}</span><button onClick={()=>{dispatch(addOneUnitToCart(item))}}>+</button></div>
           <div className="w-[10%] flex"> <button onClick={() => {dispatch(removeFromCart(item))}} className="text-red-500">          
              Remove
            </button></div>
          </li>
        ))}
      </ul>
      <BlackButton name={"Create Order"} onClick={async()=> await handleCreateOrder()}/>
  </div>
}