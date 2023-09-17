import React, { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";

/**
 * Custom hook for toggling password visibility.
 *
 * @returns {Array} An array containing the input type and a toggle icon component.
 */

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  let sourceIcon = visible ? <BsEye /> : <BsEyeSlash />;
  let inputType = visible ? "text" : "password";

  /**
   * Toggles the visibility of the password input.
   */
  
  const handleVisibilityPassword = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  const TogglePasswordIcon = (
    <span
      className="absolute top-6 right-0 p-2 rounded-lg max-w-[32px] cursor-pointer"
      onClick={handleVisibilityPassword}
    >
      {sourceIcon}
    </span>
  );

  return [
    inputType,
    TogglePasswordIcon
  ];
};

export default usePasswordToggle;
