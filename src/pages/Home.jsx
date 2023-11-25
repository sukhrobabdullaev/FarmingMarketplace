import "./Home.css";
import CountUp from "react-countup";
function Home() {
  return (
    <div className="main-bg pt-40">
      <div className="max-w-[1200px] mx-auto flex justify-center flex-col gap-40">
        <div className="font-montserrot w-1/2">
          <h4 className="text-[#FDCC0D]  font-semibold text-[26px]">
            Pure & organic Natural products
          </h4>
          <h1 className="text-[70px] font-bold text-white leading-[70px]">
            We Are The Best Natural <span className="text-[#FAFF00]">Food</span>
          </h1>
        </div>
        <div className="flex items-center justify-around">
          <h3 className="p-5 w-[250px] text-[35px] rounded-[30px] bg-white text-[#0F8D04] flex flex-col items-center">
            <CountUp end={234} duration={2} />
            <p>Farmers</p>
          </h3>
          <h3 className="p-5 w-[250px] text-[35px] rounded-[30px] bg-white text-[#0F8D04] flex flex-col items-center">
            <CountUp end={262} duration={2} />
            <p>Sales</p>
          </h3>
          <h3 className="p-5 w-[250px] text-[35px] rounded-[30px] bg-white text-[#0F8D04] flex flex-col items-center">
            <CountUp end={9128} duration={2} />
            <p>Users</p>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
