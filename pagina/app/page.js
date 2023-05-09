"use client";
import Navbar from './Navbar';
import React, { useState } from 'react';

const buttons = [
  {
    name: 'button1',
    text: 'GPU',
    image: '/gpu.png',
    description: 'las gpu contienen muchos nucleos',
  },
  {
    name: 'button2',
    text: 'CPU',
    image: '/cpu.png',
    description: 'los cpu contienen pocos nucleos',
  },
  // Agrega los demás botones con sus respectivos datos
];

export default function Page() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButtonInfo, setSelectedButtonInfo] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    const buttonInfo = buttons.find((button) => button.name === buttonName);
    setSelectedButtonInfo(buttonInfo);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Navbar buttons={buttons} handleButtonClick={handleButtonClick} />
      {selectedButtonInfo && (
        <div className="box-container w-[50%]">
          <div className="flex border-1 border-[#edf5e0] items-center justify-center bg-inherit p-4">
            <div className="w-1/2">
              <img src={selectedButtonInfo.image} alt="Imagen" className="w-full" />
            </div>
            <div className="w-1/2">
              <div className="text-lg font-bold text-[#112d32] mb-2">{selectedButtonInfo.text}</div>
              <p className="text-sm ">{selectedButtonInfo.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

