import Button from "../ui/Button";

const HomeHero = () => {
  return (
    <>
    <div className="grid text-center pt-[100px] bg-[url('/imgi_59_background-main.png')] justify-items-center gap-8 justify-center bg-end bg-center bg-cover bg-size-[90%] bg-no-repeat ">
      <p className="gradient-text text-lg font-medium para"> <span className="border-s-2 ps-3 "></span> Aithm Image Generator</p>


      <h1 className="text-[75px] grid leading-[100px] font-extrabold heading">
        Create beautiful art with <span className="gradient-text">Artificial Intelligence</span>
      </h1>
      <div className="flex justify-center bg-gray-600/20 rounded-md p-2 w-[850px]">
        <input className="flex-1"
          type="text"
          placeholder="Write your prompt and get you best ai artwork!"
        />
        <Button name="Generate" />
        
      </div>
      <div className="flex gap-2 justify-center items-center">
          <p className="para">Quick Try : </p>
          <ul className="flex gap-3">
            <li className="bg-gray-900/90 rounded-md px-5 py-2">Creative</li>
            <li className="bg-gray-900/90 rounded-md px-5 py-2">Sport</li>
            <li className="bg-gray-900/90 rounded-md px-5 py-2">Animation</li>
            <li className="bg-gray-900/90 rounded-md px-5 py-2">Fantasy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
