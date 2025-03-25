import { useRouter } from "next/navigation";
export default function SetupComponent(){
const route = useRouter()
    return<div className="text-white"><button onClick={()=>{
        localStorage.clear();
        route.push('/signin')
    }}>Log out</button></div>
}