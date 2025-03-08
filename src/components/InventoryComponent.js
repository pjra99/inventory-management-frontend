import { useEffect, useState } from "react"
import { apiCall } from "@/utils/apiCall"
import Loading from "./Loading"
import DropdownButton from "./inputs/DropDownButton"
import InputField from "./inputs/Input"

export default function InventoryComponent(){
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState({
        "category": "",
        "rangeCol":"",
        "range1":-1,
        "range2":-1,
        "sortingType": "",
        "sortingCol":""
    })
    useEffect(()=>{
        apiCall('', 'GET', 'https://dummyjson.com/products', setProducts)
        console.log(products)
    },[])
    return<div className="right-section md:w-[80%] h-screen bg-primary p-10 overflow-x-scroll">
    <p className="text-3xl text-primaryText">Inventory</p>
    <div className="Filter-section mt-4 mb-10 flex justify-between flex-wrap text-sm">
        <p className="w-[30%]">Category <DropdownButton placeholder="Category" onChange={(e)=>{
            setFilters(prevState =>({
                ...prevState,
                "category": e.target.value
            }))
        }}
        className="ml-2 bg-white"
        options ={["all","beauty", "groceries", "kitchen-accessories", "mobile-accessories"]    }
        value ={filters["category"]}
        
         /></p>
         <p className="w-[40%]"><DropdownButton placeholder="Range Column" onChange={(e)=>{
            setFilters(prevState =>({
                ...prevState,
                "rangeCol": e.target.value
            }))
        }}
        className="ml-2 border-none"
        options ={["price", "selling-price"]    }
        value ={filters["rangeCol"]}
        
         /> <InputField placeholder="Start Range" type="number" className="w-[8em]"/> to <InputField placeholder="End Range" type="number" className="w-[8em]"/></p>
         <p className="w-[30%]"><DropdownButton placeholder="Sort Type" onChange={(e)=>{
            setFilters(prevState =>({
                ...prevState,
                "sortingType": e.target.value
            }))
        }}
        className="w-[7em] border-none"
        options ={["price", "selling-price"]    }
        value ={filters["sortingType"]}
        
         /> <DropdownButton placeholder="Column Name" onChange={(e)=>{
            setFilters(prevState =>({
                ...prevState,
                "sortingCol": e.target.value
            }))
        }}
        className=" border-none"
        options ={["price", "selling-price", "discount", "min-lot-size", "avl-stocks"]    }
        value ={filters["sortingCol"]} /></p>
    </div>
    <div className="flex justify-between mt-5 md:pl-10">
        <div className="w-[10%]">Name</div>
        <div className="w-[10%]">Category</div>
        <div className="w-[10%]">Price</div>
        <div className="w-[10%]">Selling Price</div>
        <div className="w-[10%]">Discount</div>   
        <div className="w-[20%]">Description</div>   
        <div className="w-[10%]">Min Lot size</div>   
        <div className="w-[10%]">Avl stocks</div>   
    </div>
    {products.products?(
              products.products.map((key, i) => (
                <div key={i} className="flex justify-between mt-5 bg-white py-5 md:pl-10 text-border" >
                    <div className="w-[10%]">{key.title}</div>
                    <div className="w-[10%]">{key.category[0].toUpperCase()+key.category.substring(1)}</div>
                    <div className="w-[10%]">{(key.price-5<0? key.price: key.price-4).toFixed(2)} Rs</div>
                    <div className="w-[10%]">{(key.price).toFixed(2)} Rs</div>
                    <div className="w-[10%]">{key.discountPercentage}%</div>   
                    <div className="w-[20%]">{key.description}</div>   
                    <div className="w-[10%]">{key.stock-2<=0? 2: key.stock-2}</div>   
                    <div className="w-[10%]">{key.stock-2}</div>   
                </div>
              ))
            ) : (
              <Loading title="Inventory"/>
            )}
     </div>
}