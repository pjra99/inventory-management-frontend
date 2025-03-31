import { useDispatch, useSelector } from "react-redux";
export const ProductCard =({item, addItem, removeItem})=>{
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart)
   
    return <div key={item._id} className="p-4 bg-white m-2 rounded-xl h-50 w-40">
                    <div key={item._id+1} className="flex justify-center"><img src={item.image_url} className="h-[100px] w-[50px]" /></div>
                  <p key={item._id+2} className="text-sm">{item.name}</p>
                 {Object.keys(cart).includes(item._id)?<div><button onClick={removeItem}>-</button>{cart[item._id].count}<button onClick={addItem}>+</button></div>:<button key={item._id+3} className="bg-secondary text-white" onClick={addItem}>add to cart</button>}
                </div>
        
}