import { useEffect, useState } from "react"
import { apiCall } from "@/utils/apiCall"
import Loading from "./Loading"
import DropdownButton from "./inputs/DropDownButton"
import InputField from "./inputs/Input"

export default function InventoryComponent(){
    const [products, setProducts] = useState([])
    const [categories, setCategories]  = useState([])
    const [filters, setFilters] = useState({
        "category": "",
        "rangeCol":"",
        "range1":-1,
        "range2":-1,
        "sortingType": "",
        "sortingCol":""
    })
    useEffect(()=>{ 
        const org_id = localStorage.getItem("org_id")
        console.log(org_id)
        let url = (filters.category.length!="all" &&filters.category.length>0)?`http://127.0.0.1:5000/${org_id}/products/${filters.category}`:`http://127.0.0.1:5000/${org_id}/products`
        apiCall('', 'GET', url, setProducts)
        apiCall('', "GET", `http://127.0.0.1:5000/${org_id}/get_product_categories`, setCategories)
        // setCategories([...categories, "all"])
        console.log(filters)
        console.log(categories)
    },[filters])
      
    return<div className="right-section md:w-[80%] h-screen bg-primary p-10 overflow-x-scroll">
    <p className="text-3xl text-primaryText">Inventory</p>
    {/* filters section */}
    {categories?<div className="Filter-section mt-4 mb-10 flex justify-between flex-wrap text-sm">
        <p className="w-[30%]">Category <DropdownButton placeholder="Category" onChange={(e)=>{
            setFilters(prevState =>({
                ...prevState,
                "category": e.target.value
            }))
        }}
        className="ml-2 bg-white"
        options ={["all",...categories]}
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
        options ={["Asc", "Desc"]    }
        value ={filters["sortingType"]}
        
         /> <DropdownButton placeholder="Column Name" onChange={(e)=>{
            setFilters(prevState =>({
                ...prevState,
                "sortingCol": e.target.value
            }))
        }}
        className="w-[10em] bg-white"
        options ={["price", "selling-price", "discount", "min-lot-size", "avl-stocks"]    }
        value ={filters["sortingCol"]} /></p>
    </div>:<Loading title="Loading filters" />}
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
    {products?(
        
              products.map((key, i) => (
                <div key={i} className="flex justify-between mt-5 bg-white py-5 md:pl-10 text-border" >
                    <div className="w-[10%]">{key.name}</div>
                    <div className="w-[10%]">{key.category[0].toUpperCase()+key.category.substring(1)}</div>
                    <div className="w-[10%]">{key.price} Rs</div>
                    <div className="w-[10%]">{key.selling_price} Rs</div>
                    <div className="w-[10%]">{key.discount_percentage}%</div>   
                    <div className="w-[20%]">{key.description}</div>   
                    <div className="w-[10%]">{key.min_lot_size}</div>   
                    <div className="w-[10%]">{Math.floor(key.availability/key.min_lot_size)}</div>   
                </div>
              ))
            ) : (
              <Loading title="Inventory"/>
            )}
     </div>
}     