import { useState } from "react"
import BlackButton from "./buttons/BlackButton"
import DropdownButton from "./inputs/DropDownButton"
import Input from "./inputs/Input"
import RadioButtons from "./inputs/RadioButtons"

export default function SellComponent(){
const [userTypeNew, setUserTypeNew] = useState(true)
let pro_catg = [
    "Grocery",
    "Utensil", "Toys", "Dairy", "Furniture"
    ]
    return (
<div className="right-section md:w-[75%] h-screen bg-primary p-10">
<div className="text-3xl">Create an Order</div>
<div className="bg-white mt-10  p-10">
<div className ="Product-details flex justify-between">
<div>
<DropdownButton placeholder="Product Category" id="product-category" options={pro_catg} />
</div>
<div>
<Input type="number" className="border-2 border-gray" placeholder="Product Name"/>
</div>
</div>
<div className ="Product-Quantity flex flex-wrap justify-between my-10 ">
<div className="mr-1">
<RadioButtons name="Quantity Type" values={["Stock", "Unit"]} />
</div>
<div><Input placeholder="Enter the Quantity" value="" onChange=""/></div>
</div>
<div className ="Customer-details/Total-Amount flex flex-wrap justify-between">
<div className="customer-details">
<div className="mb-5"><span className={`border-2 border-gray p-2 ${userTypeNew? `bg-transparent`: `bg-secondary text-white`}`} onClick={()=>setUserTypeNew(false)}>Existing Customer</span><span className={`border-2 border-gray p-2 ${userTypeNew? `bg-secondary text-white`:`bg-transparent`}`} onClick={()=>setUserTypeNew(true)}>New Customer</span></div>
<div className ="my-5"><Input type="text" placeholder="Enter Customer Id" /></div>
<div className=""><BlackButton name="Create an Order" /></div>
</div>
<div className="total-amount"></div>
</div>
</div>
</div>
    )}