import { PulseLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-4xl font-bold text-[#556B2F] mb-8">IMPULSE RH</div>
      <PulseLoader color="#556B2F" size={15} />
    </div>
  );
};

export default LoadingScreen;
