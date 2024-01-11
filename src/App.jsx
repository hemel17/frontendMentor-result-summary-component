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
            <span className="inline-block text-lightRed">
              <img src="./assets/icon-reaction.svg" alt="" /> Reaction
            </span>
            <span className="inline-block">
              80 <span>/ 100</span>
            </span>
          </p>
          <p className="text-lg font-bold flex justify-between bg-yellow-100 px-4 py-2 rounded-xl my-8">
            <span className="inline-block text-orangyYellow">
              <img src="./assets/icon-memory.svg" alt="" /> Memory
            </span>
            <span className="inline-block">
              92 <span>/ 100</span>
            </span>
          </p>
          <p className="text-lg font-bold flex justify-between py-2 px-4 rounded-xl bg-green-100 mb-8">
            <span className="inline-block text-greenTeal">
              <img src="./assets/icon-verbal.svg" alt="" /> Verbal
            </span>
            <span className="inline-block">
              61 <span>/ 100</span>
            </span>
          </p>
          <p className="text-lg font-bold flex justify-between py-2 px-4 rounded-xl bg-blue-100">
            <span className="inline-block text-cobaltBlue">
              <img src="./assets/icon-visual.svg" alt="" /> Visual
            </span>
            <span className="inline-block">
              72 <span>/ 100</span>
            </span>
          </p>
          <button className="bg-darkGrayBlue text-white w-full mt-10 text-center py-3 px-4 rounded-3xl">Continue</button>
        </div>
      </div>

      <div className="flex justify-center">
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
