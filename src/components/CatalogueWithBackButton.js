import React from "react";
import BlackButton from "./buttons/BlackButton";
import { disableAddToCart } from "@/features/general/states";
import { useDispatch } from "react-redux";

const withBackButton = (WrappedComponent, targetComponent) => {
  return function WithBackButton({setCurrentComponent}) {
   const dispatch = useDispatch()
    
    const handleBackClick = () => {
      setCurrentComponent(targetComponent);
      dispatch(disableAddToCart())
    };
    
    return (
  <>
        

        <WrappedComponent setCurrentComponent={setCurrentComponent} backButton={  <BlackButton 
            name="Back" 
            className="mt-10"
            onClick={handleBackClick}

          />} />
  </>
    );
  };
};

export default withBackButton;