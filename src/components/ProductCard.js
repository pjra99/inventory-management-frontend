import { useState } from "react";
import { useSelector } from "react-redux";
// import { enableAddToCart } from "@/features/general/states";
export const ProductCard = ({ item, addLot, removeLot, addItem, removeItem }) => {
  const cart = useSelector((state) => state.cart.cart);
  const enableAddToCart = useSelector((state) => state.change.enableAddToCart);
  const [unitTypeLot, setUnitTypeLot] = useState(false);

  return (
    <div key={item._id} className="p-4 bg-white m-2 rounded-xl shadow-md h-60 w-44 flex flex-col justify-between">
      <div className="flex justify-center mb-2">
        <img src={item.image_url} className="h-[100px] w-[60px] object-contain" />
      </div>
      <p className="text-sm font-medium text-center mb-2">{item.name}</p>

      {enableAddToCart ? (
        Object.keys(cart).includes(item._id) ? (
          <div className="flex items-center justify-center space-x-3 mb-2">
            <button
              className="bg-gray-200 px-2 rounded hover:bg-gray-300"
              onClick={unitTypeLot ? removeLot : removeItem}
            >
              -
            </button>
            <span className="text-sm font-semibold">
              {!unitTypeLot
                ? cart[item._id].count
                : Math.floor(cart[item._id].count / Math.floor(item.min_lot_size))}
            </span>
            <button
              className="bg-gray-200 px-2 rounded hover:bg-gray-300"
              onClick={unitTypeLot ? addLot : addItem}
            >
              +
            </button>
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {enableAddToCart ? (
        <div className="text-xs text-center mb-2">
          Unit type:
          <span className="ml-2 inline-flex border rounded overflow-hidden">
            <button
              className={`px-2 py-1 ${unitTypeLot ? "bg-secondary text-white" : "bg-white text-black"}`}
              onClick={() => setUnitTypeLot(true)}
            >
              Lot
            </button>
            <button
              className={`px-2 py-1 ${!unitTypeLot ? "bg-secondary text-white" : "bg-white text-black"}`}
              onClick={() => setUnitTypeLot(false)}
            >
              Unit
            </button>
          </span>
        </div>
      ) : (
        ""
      )}

      {enableAddToCart && !Object.keys(cart).includes(item._id) ? (
        <button
          key={item._id + 4}
          className="bg-secondary text-white px-3 py-1 rounded hover:opacity-90 w-full"
          onClick={unitTypeLot ? addLot : addItem}
        >
          Add to Cart
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
