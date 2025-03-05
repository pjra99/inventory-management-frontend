import { apiCall } from "@/utils/apiCall"
import { useEffect, useState, Suspense } from "react"
import Loading from "./Loading"
import BlackButton from "./buttons/BlackButton"
export default function CatalogueComponent(){
  const [data, setData] = useState([])
  const [currentCategory, setCurrentCategory]= useState("")
  
  //embedd this in URL to fetch the categories
   useEffect(()=>{
    console.log(apiCall('', "GET", 'https://dummyjson.com/products', setData))
   },[])
   const categories =["Beauty", "Grocery", "Toys", "Gifts"]
    return <div className="right-section md:w-[75%] h-screen bg-primary p-10 overflow-x-scroll">
        <p className="text-3xl"><BlackButton name="<" className="w-10 h-10 mr-5" onClick={()=>{
        setCurrentCategory("")
        }}/>Catalogue</p>
        {currentCategory.length==0? categories.map((key, i)=>(<div className="h-[100px] w-[100px] p-5 m-10 bg-white display flex flex-wrap justify-between" onClick={()=>{setCurrentCategory(key)}} key={i}>{key}</div>)):<div className="flex flex-wrap justify-between">
        {data.products?(
          data.products.map((key, i) => (
            <div key={i} className="p-4 bg-white m-2 rounded-xl h-50 w-40">
                <div className="flex justify-center"><img src={key.images[0]} className="h-[100px] w-[50px]" /></div>
              <p className="text-sm">{key.title}</p>
            </div>
          ))
        ) : (
          <Loading />
        )}

        </div>}
         </div>
}