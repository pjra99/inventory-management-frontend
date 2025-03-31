import BlackButton from "./buttons/BlackButton";
import { useDispatch, useSelector } from "react-redux";
import {addToCart, removeOneUnitFromCart, removeFromCart, clearCart } from "@/features/cart/cart";
import { useEffect } from "react";
export default function ShoppingCartComponent({modifier}){
  const cart = useSelector((state) => state.cart.cart);
  const productsInCart = Object.values(cart)
  const dispatch = useDispatch();
   useEffect(()=>{
    console.log(cart)
   }, [cart])
return <div className="right-section md:w-[75%] h-screen bg-primary p-10 overflow-scroll">
    <div><BlackButton name="Back" onClick={()=>{modifier(false)}} /></div>
    {/* <div>ShoppingCart</div> */}
    <ul className="mt-5">
        {productsInCart.map((item) => (
          <li key={item._id} className="flex justify-between p-2 bg-white my-2">
            <div className="w-[40%] pl-5"><img src={item.image_url} className="w-12 h-12" />
            <span className="text-sm text-gray">{item.name}</span></div>
            <div className="w-[30%] pt-5">{item.selling_price}*{item.count} Rs</div>
            <div className="w-[20%] mt-5"><button className="" onClick={()=>{dispatch(removeOneUnitFromCart(item))}}>-</button><span className="mx-4">{cart[item._id].count}</span><button onClick={()=>{dispatch(addToCart(item))}}>+</button></div>
           <div className="w-[10%] flex"> <button onClick={() => {dispatch(removeFromCart(item))}} className="text-red-500">          
              Remove
            </button></div>
          </li>
        ))}
      </ul>
  </div>
// </div>
}