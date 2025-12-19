import Button from "../ui/Button";
import {heroList} from '../../data/data';
const HomeHero = () => {
  return (
    <>
   <div
  className="
    grid
    text-center
    pt-24
    bg-[url('/imgi_59_background-main.png')]
    bg-center
    bg-cover
    bg-no-repeat
    justify-items-center
    gap-8
  "
>
  <p className="gradient-text text-lg font-medium para">
    <span className="border-s-2 border-white ps-3"></span>
    Aithm Image Generator
  </p>

  <h1 className="heading font-extrabold text-white leading-tight text-4xl md:text-6xl lg:text-[75px]">
    Create beautiful art with{" "} <br />
    <span className="gradient-text">Artificial Intelligence</span>
  </h1>

  <div className="flex w-full max-w-3xl items-center rounded-md bg-gray-600/20 p-2">
    <input
      type="text"
      placeholder="Write your prompt and get your best AI artwork!"
      className="
        flex-1
        bg-transparent
        px-4
        py-3
        text-white
        placeholder-gray-400
        outline-none
      "
    />
    <Button name="Generate" />
  </div>

  <div className="flex text-white flex-wrap items-center justify-center gap-3">
    <p className="para">Quick Try:</p>
    {heroList.map((item) => (
      <button
        key={item}
        className="rounded-md bg-gray-900/90 px-5 py-2 text-sm hover:bg-gray-800 transition"
      >
        {item}
      </button>
    ))}
  </div>
</div>

    </>
  );
};

export default HomeHero;
