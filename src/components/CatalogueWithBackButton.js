import React from "react";
import BlackButton from "./buttons/BlackButton";

const withBackButton = (WrappedComponent, targetComponent) => {
  return function WithBackButton({setCurrentComponent}) {

    
    const handleBackClick = () => {
      setCurrentComponent(targetComponent);
    };
    
    return (
  <>
          <BlackButton 
            name="Back" 
            className="w-[100px] h-[40px] rounded-2xl"
            onClick={handleBackClick}
          />

        <WrappedComponent setCurrentComponent={setCurrentComponent} />
  </>
    );
  };
};

export default withBackButton;