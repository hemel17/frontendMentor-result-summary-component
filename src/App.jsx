const App = () => {
  return (
    <div className="bg-white flex justify-center items-center flex-col min-h-screen font-hankenGrotesk">
      <div className="max-w-sm md:max-w-xl md:flex md:shadow-xl md:rounded-xl">
        <div className="bg-lightSlateBlue w-full md:w-1/2 rounded-b-xl md:rounded-xl p-10 text-center">
          <h3 className="text-3xl  text-paleBlue mb-6">Your result</h3>
          <p className="flex flex-col gap-2 mx-auto bg-violetBlue aspect-square round items-center justify-center">
            <span className="inline-block text-white text-5xl font-extrabold">
              76
            </span>
            <span className="inline-block text-lightLavender text-lg">
              of 100
            </span>
          </p>
          <h2 className="text-4xl text-white my-6">Great</h2>
          <p className="text-lg text-paleBlue">
            Your scored higher than 65% of the people who have taken these
            tests.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-extrabold mb-10">Summary</h2>
          <p className="text-lg font-bold flex  bg-red-100 justify-between px-4 py-2 rounded-xl">
            <span className=" text-lightRed flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/></svg> Reaction
            </span>
            <span className="inline-block">
              80 <span className="text-slate-400">/ 100</span>
            </span>
          </p>
          <p className="text-lg font-bold flex justify-between bg-yellow-100 px-4 py-2 rounded-xl my-8">
            <span className="flex items-center gap-1 text-orangyYellow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/></svg> Memory
            </span>
            <span className="inline-block">
              92 <span className="text-slate-400">/ 100</span>
            </span>
          </p>
          <p className="text-lg font-bold flex justify-between py-2 px-4 rounded-xl bg-green-100 mb-8">
            <span className="flex items-center gap-1 text-greenTeal">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/></svg> Verbal
            </span>
            <span className="inline-block">
              61 <span className="text-slate-400">/ 100</span>
            </span>
          </p>
          <p className="text-lg font-bold flex justify-between py-2 px-4 rounded-xl bg-blue-100">
            <span className="flex items-center gap-1 text-cobaltBlue">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/></svg> Visual
            </span>
            <span className="inline-block">
              72 <span className="text-slate-400">/ 100</span>
            </span>
          </p>
          <button className="bg-darkGrayBlue hover:bg-lightRoyalBlue text-white w-full mt-10 text-center py-3 px-4 rounded-3xl">Continue</button>
        </div>
      </div>

      <div className="flex justify-center md:mt-5">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
            className="font-bold"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/hemel17" className="font-bold">
            Hemel
          </a>
          .
        </p>
      </div>
    </div>
  );
};
export default App;
