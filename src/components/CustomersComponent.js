import { useEffect, useState } from "react"
import { apiCall } from "@/utils/apiCall"
import Loading from "./Loading"

export default function CustomersComponent(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        apiCall('', 'GET', 'https://dummyjson.com/users', setUsers)
        console.log(users)
    },[])
    return<div className="right-section md:w-[80%] h-screen bg-primary p-10 overflow-x-scroll">
    <p className="text-3xl">Customers</p>
    <div className="flex justify-between mt-5 md:pl-10">
        <div className="w-[15%]">Name</div>
        <div className="w-[8%]">Orders</div>
        <div className="w-[33%]">Address</div>
        <div className="w-[27%]">Email</div>
        <div className="w-[17%]">Phone</div>   
    </div>
    {users.users? users.users.map((key, i)=>(<div className="flex justify-between mt-5 bg-white py-5 md:pl-10 text-border" key={i}>
        <div className="w-[15%]">{key.firstName+" "+key.lastName}</div>
        <div className="w-[8%] pl-1">{key.age}</div>
        <div className="w-[33%]">{key.address.address+' ' + key.address.city+ ','+key.address.state}</div>
        <div className="w-[27%] break-all">{key.email}</div>
        <div className="w-[17%] flex flex-right">{key.phone}</div></div>)): <Loading title="Customers" />}
     </div>
}