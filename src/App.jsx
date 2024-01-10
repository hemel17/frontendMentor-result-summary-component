const App = () => {
  return (
    <div className="bg-white flex justify-center items-center flex-col min-h-screen font-hankenGrotesk">
      <div className="max-w-sm md:max-w-xl md:flex">
        <div
          className="bg-lightSlateBlue w-full md:w-1/2 rounded-b-xl md:rounded-xl p-10 text-center
text-center"
        >
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
        <div className=""></div>
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
