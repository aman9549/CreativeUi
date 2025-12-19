import { FaFileAlt } from "react-icons/fa";
import {featuresCard} from '../../data/data';



const HomeFeatures = () => {
  return (
    <>
   <div className="grid grid-cols-1 pb-6 sm:grid-cols-2 lg:grid-cols-[290px_290px_290px_290px]
                gap-8  pt-[100px] justify-center bg-[url('/imgi_60_background-5.png')] bg-center bg-cover bg-no-repeat justify-items-center">
  
  {
    featuresCard.map((item, index)=>{

        const Icon = item.icon;

        return(
            <div>
     <div  className="max-w-[290px] border-solid border-1 hover:bg-[#05051e] transition-[0.5s] border-blue-950/50  bg-[#05051e]/10 
  backdrop-blur-md  space-y-5 px-6 py-7">
    <span className="text-[#43a5fe] block text-end">AI Features</span>
    <Icon className="text-6xl text-white" />
    <h3 className="text-2xl heading mt-[40px] text-white font-semibold">{item.title}</h3>
    <p className="text-[#b9b9ba] para text-lg  leading-8">
      {item.description}
    </p>
  </div>
            </div>
        )
    })
  }

</div>

    </>
  );
};

export default HomeFeatures;
