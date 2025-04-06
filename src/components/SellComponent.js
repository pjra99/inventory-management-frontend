import { useState, useEffect } from "react"
import BlackButton from "./buttons/BlackButton"
import DropdownButton from "./inputs/DropDownButton"
import Input from "./inputs/Input"
import RadioButtons from "./inputs/RadioButtons"
import {ShoppingCart} from "lucide-react"
import ShoppingCartComponent from "./ShoppingCartComponent"
import { apiCall } from "@/utils/apiCall"
import { addLotToCard, addOneUnitToCart } from "@/features/cart/cart"
import { changeState } from "@/features/general/states"
import { useDispatch, useSelector } from "react-redux"
export default function SellComponent({setCurrentComponent}){
const [userTypeNew, setUserTypeNew] = useState(true)
const [showEmail, setShowEmail] = useState(false)
const [showCartComponent, setShowCartComponent] = useState(false)
const [currentCategory,setCurrentCategory] =useState("all")
const dispatch = useDispatch()
const [categories, setCategories] = useState([
    "all",
    "beauty",
    "groceries",
    "kitchen-accessories",
    "sports-accessories"
])
const [orderDetails, setOrderDetails] = useState({
    product_category:"",
    product_name:"",
    quantity_type_stock: false,
    product_quantity : 0,
    customer_type_new: userTypeNew,
    customer_id: "",
    customer_name:"",
    shipping_address:"",
    customer_contact:"",
    customer_email:"",
    business_name:""
})
useEffect(()=>{
console.log(orderDetails)
}, [orderDetails])

useEffect(()=>{
  console.log(orderDetails)
  console.log(currentCategory)
},[currentCategory])

const handleCreateOrder= async()=>{

    if(!orderDetails.customer_name|| !orderDetails.email||!orderDetails.customer_contact|| !orderDetails.business_name||!orderDetails.shipping_address){
       alert("Please fill all the fields!") 
    }
    let url = `http://127.0.0.1:5000/${org_id}/customers/${customer_email}`
    let response = await apiCall('', "GET", url, "")
    if(userTypeNew){
        if(response.customer_registered){
            alert("Customer Already Registered, please enter the customer's email in 'Existing customer section'")
            return;
        }
        
        let payload= {
            "name": orderDetails.customer_name,
            "email":  orderDetails.email,
            "contact":  orderDetails.customer_contact,
            "business_name": orderDetails.business_name,
            "address": orderDetails.shipping_address
          }
          try{
            let new_customer = await apiCall(payload, "POST", url, "")
            localStorage.setItem("customer_id", new_customer._id)
          }
          catch(e){
            alert("Error creating user")
            console.log(e)
            return;
          }
    }
    else {
        if(!response.customer_registered){
            alert("Customer with the following email not found! Go to New customers to create a new one")
            return;
        }
        localStorage.setItem("customer_id", response._id)
    }

    
    setShowCartComponent(true)
}
const fetchProduct=async ()=>{
    let org_id = localStorage.getItem("org_id")
    let url = `http://127.0.0.1:5000/${org_id}/fetch_product/${currentCategory}/${orderDetails.product_name}`
    console.log(url)
    let response = await apiCall("", "GET", url, "" )
    console.log(response)
    if (Object.keys(response).includes("msg")){
    response["msg"]==0?alert("Product not found!"):alert("More than one product found!")
    }
    else {
    dispatch(orderDetails.quantity_type_stock? addLotToCard(response): addOneUnitToCart(response))
    alert("Product added to cart")
    }   
}

//Shopping cart component is returned if showCartComponent is True else the code for the Sell component is returned
    return showCartComponent?<ShoppingCartComponent modifier={setShowCartComponent}/>: (        
<div className="right-section md:w-[75%] h-screen bg-primary p-10">
<div className="flex flex-wrap justify-between"><div className="text-3xl">Create an Order</div><button><ShoppingCart onClick={()=>{setShowCartComponent(true)}} /></button></div>
<div className="bg-white mt-10  p-10">
<div className ="Product-details flex justify-between">
<div>
<DropdownButton placeholder="Product Category" onChange={(e)=>{setCurrentCategory(e.target.value)}} id="product-category" options={categories} value={currentCategory} />
</div>
<div>
<Input className="border-2 border-gray mr-[7rem]" placeholder="Product Name" onChange={(e)=> setOrderDetails(prevState=>({
        ...prevState,
        product_name: e.target.value
    }))} value ={orderDetails.product_name} />
</div>
</div>
<div className ="Product-Quantity flex flex-wrap justify-between my-10 ">
<div className="mr-1">
<RadioButtons name="Quantity Type" values={["Stock", "Unit"]} onChange={(e)=>setOrderDetails((prevState)=>({...prevState, quantity_type_stock: e.target.value=="Stock"? true:false}))} />
</div>
<div><Input placeholder="Enter the Quantity" value={orderDetails.product_quantity} onChange={(e)=>{
    setOrderDetails(prevState=>({
        ...prevState,
        product_quantity: Number(e.target.value)
    }))
}}  />
<BlackButton name="Add to cart" className="ml-1" onClick={()=>{fetchProduct()}}/></div>
</div>
<div className ="Customer-details/Total-Amount flex flex-wrap justify-between">
<div className="customer-details">
<div className="mb-5"><span className={`border-2 border-gray p-2 ${userTypeNew? `bg-transparent`: `bg-secondary text-white`}`} onClick={()=>{setUserTypeNew(false)
    setShowEmail(false)
}}>Existing Customer</span><span className={`border-2 border-gray p-2 ${userTypeNew? `bg-secondary text-white`:`bg-transparent`}`} onClick={()=>{setUserTypeNew(true)
    setShowEmail(false)
}}>New Customer</span></div>
{!userTypeNew?<div className ="my-5">
<Input type="text" placeholder="Enter Customer's email Id" value={orderDetails['customer_email']} onChange={(e)=>{
    setOrderDetails(prevState =>({
        ...prevState,
       customer_email: e.target.value
    }))
}}/></div>:
<div className ="my-5">
  {showEmail?<><Input type="text" placeholder="Enter Customer's phone number" onChange={(e)=>{
    setOrderDetails(prevState=>({
        ...prevState,
        customer_contact: e.target.value
    }))
}} value={orderDetails['customer_contact']} />
<Input type="text" placeholder="Enter Customer's Email'" className="mt-5" onChange={(e)=>{
    setOrderDetails(prevState=>({
        ...prevState,
        customer_email: e.target.value
    }))
}} value={orderDetails['customer_email']} /></>:<>  <Input type="text" placeholder="Enter Customer Name" onChange={(e)=>{
    setOrderDetails(prevState=>({
        ...prevState,
        customer_email: e.target.value
    }))
}} value={orderDetails['customer_name']} />
<br />
 <Input type="text" placeholder="Enter Shipping Address" className="mt-5" onChange={(e)=>{
    setOrderDetails(prevState =>({
        ...prevState,
        shipping_address: e.target.value
    }))
}}
value={orderDetails['shipping_address']}
/>
<Input type="text" placeholder="Enter business name" className="mt-5" onChange={(e)=>{
    setOrderDetails(prevState =>({
        ...prevState,
        business_name: e.target.value
    }))
}}
value={orderDetails['business_name']}
/></>}
</div>}
<div className="">
    <BlackButton onClick={!userTypeNew? ()=>{}:()=>{
    if (orderDetails['customer_name'].length>3 && orderDetails['shipping_address'].length>10){
        setShowEmail(true)
    }
    else if (orderDetails['customer_name'].length<=3){
        alert("Customer Name too small")
    }
    else{
        alert("Customer's address too small")
    }
}
}  name={`${!showEmail && userTypeNew ? "Next":"Create an Order"}`}/>
</div>
</div>
<div className="total-amount flex flex-col justify-between">
    <div>Go to the Inventory to add more items to create order
    </div>
    <BlackButton name="Go to the inventory" className="h-[40px]" onClick={()=>{
        dispatch(changeState())
        setCurrentComponent("CatalogueWithBackButton")}} />
    <BlackButton name="Proceed to checkout" onClick={()=>{
        setShowCartComponent(true)
    }} className="h-[40px]"/>
</div>
</div>
</div>
</div>
    )}