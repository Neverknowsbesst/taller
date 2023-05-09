import React, { useState } from 'react';

const Navbar = ({ buttons, handleButtonClick }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
    handleButtonClick(buttonName);
  };

  return (
    <div>
      <nav className="flex items-center justify-center w-full bg-inherit py-4">
        {buttons.map((button) => (
          <button
            key={button.name}
            className={`custom-btn ${selectedButton === button.name ? 'btn-selected' : ''}`}
            onClick={() => handleClick(button.name)}
          >
            {button.text}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;



