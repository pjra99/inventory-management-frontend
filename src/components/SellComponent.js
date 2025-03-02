import BlackButton from "./buttons/BlackButton"
import DropdownButton from "./inputs/DropDownButton"
import Input from "./inputs/Input"

export default function SellComponent(){
    let pro_catg = [
        "Grocery",
        "Utensil", "Toys", "Dairy", "Furniture"
       ]
    return <div className="right-section md:w-[75%] h-screen bg-primary p-10">
    <div className="text-3xl">Create an Order</div>
    <div className="bg-white mt-10  px-10">
    <div className ="Product-details flex justify-between">
    <div>
    <DropdownButton placeholder="Product Category" id="product-category" options={pro_catg} />
   
  </div>
<div>
<Input type="number" className="border-2 border-gray" placeholder="Product Name"/>
</div>
</div>
<div className ="Product-Quantity flex flex-wrap justify-between"><div>
<input type="radio" id="stock-option" name="quantity_type" value="stock" />
  <label for="stock">Stock</label>
  <input type="radio" id="unit-option" name="quantity_type" value="unit" />
  <label for="unit">Unit</label>
</div>
<div><Input placeholder="Enter the Quantity" value="" onChange=""/></div>
</div>
<div className ="Customer-details/Total-Amount flex flex-wrap justify-between">
<div className="customer-details">
<div className=""><span>Existing Customer</span><span>Mew Customer</span></div>
<div><Input type="text" placeholder="Enter Customer Id" /></div>
<div><BlackButton name="Create an Order" /></div>
</div>
<div className="total-amount"></div>
</div>
</div>
</div>
}