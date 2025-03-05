import BlackButton from "./buttons/BlackButton";

export default function ShoppingCartComponent({modifier}){
return <div className="right-section md:w-[75%] h-screen bg-primary p-10">
  <div className="flex flex-wrap justify-between">
    <div><BlackButton name="Back" onClick={()=>{modifier(false)}}/></div>
    <div>ShoppingCart</div>
  </div>
</div>
}