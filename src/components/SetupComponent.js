import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSignedInFalse } from "@/features/general/states";
export default function SetupComponent(){
const route = useRouter()
const dispatch = useDispatch()
    return<div className="text-white"><button onClick={()=>{
        dispatch(setSignedInFalse())
        route.push('/signin')
    }}>Log out</button></div>
}