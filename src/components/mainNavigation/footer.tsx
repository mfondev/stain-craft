import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#242424] text-[#525252] h-[95vh] flex flex-col justify-between pt-8 px-8 sticky botto-0">
        <header className="flex items-center justify-between uppercase">
          <h3 className="uppercase text-sm font-extrabold">HF-11 is a registered trademark of OILSTAINLAB LLC.</h3>
          <p className="uppercase text-sm font-extrabold">All rights reserved. ©2024</p>
        </header>
        <div className="flex items-center justify-between">
          <h1 className="text-[259px] uppercase font-extrabold leading-[1]">MF</h1>
          <h1 className="text-[259px] uppercase font-extrabold leading-[1]">47</h1>
        </div>
      </footer>
    </>
  );
}

