import { useState } from "react";
import { useSelector } from "react-redux";
// import { enableAddToCart } from "@/features/general/states";
export const ProductCard =({item, addLot, removeLot, addItem, removeItem})=>{
    // console.log(removeLot)
    const cart = useSelector((state) => state.cart.cart);
    const enableAddToCart = useSelector(state=> state.change.enableAddToCart)
    // console.log(enableAddingToCart)
    console.log(item)
    console.log(enableAddToCart)
   const [unitTypeLot, setUnitTypeLot] = useState(false)
    return <div key={item._id} className="p-4 bg-white m-2 rounded-xl h-50 w-40">
                    <div key={item._id+1} className="flex justify-center"><img src={item.image_url} className="h-[100px] w-[50px]" /></div>
                  <p key={item._id+2} className="text-sm">{item.name}</p>
                  { enableAddToCart?(
                  Object.keys(cart).includes(item._id)?<div key={item._id+3}><button onClick={unitTypeLot? removeLot: removeItem}>-</button>{!unitTypeLot?cart[item._id].count:Math.floor(cart[item._id].count/item.min_lot_size)}<button onClick={unitTypeLot? addLot: addItem}>+</button></div>:<button key={item._id+4} className="bg-secondary text-white" onClick={unitTypeLot?addLot:addItem}>add to cart</button>
                  ):""
                  
                  }
                 {enableAddToCart?(<div key={item._id+5}>Unit type <span className="border-2"><button className={`${unitTypeLot? `bg-secondary text-white`: ``} mr-1`} onClick={()=>setUnitTypeLot(true)}>Lot</button><button className={`${!unitTypeLot? `bg-secondary text-white`: ``}`} onClick={()=>setUnitTypeLot(false)}>Unit</button></span></div>):""}</div>
}