import React from "react";
import BlackButton from "./buttons/BlackButton";

const withBackButton = (WrappedComponent, targetComponent) => {
  return function WithBackButton({setCurrentComponent}) {

    
    const handleBackClick = () => {
      setCurrentComponent(targetComponent);
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