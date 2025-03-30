import BlackButton from "./buttons/BlackButton";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/features/cart/cart";
import { useEffect } from "react";
export default function ShoppingCartComponent({modifier}){
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
   useEffect(()=>{
    console.log(cart)
   }, [cart])
return <div className="right-section md:w-[75%] h-screen bg-primary p-10">
  <div className="flex flex-wrap justify-between">
    <div><BlackButton name="Back" onClick={()=>{modifier(false)}}/></div>
    <div>ShoppingCart</div>
    <ul className="mt-5">
        {cart.map((item) => (
          <li key={item._id} className="flex justify-between p-2 bg-gray-100 my-2">
            <span key={item._id+1}>{item.name}</span>
            <button key={item._id+2} onClick={() => {dispatch(removeFromCart(item._id))}} className="text-red-500">
              Remove
            </button>
          </li>
        ))}
      </ul>
  </div>
</div>
}