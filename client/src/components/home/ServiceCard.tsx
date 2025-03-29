import { FC } from "react";
import { 
  Users, Target, Brain, BarChart, Award, Heart 
} from "lucide-react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  const { title, iconName, description, image } = service;
  
  // Function to render the icon based on iconName
  const renderIcon = () => {
    switch(iconName) {
      case 'Users':
        return <Users className="w-12 h-12 mb-4 text-[#556B2F]" />;
      case 'Target':
        return <Target className="w-12 h-12 mb-4 text-[#556B2F]" />;
      case 'Brain':
        return <Brain className="w-12 h-12 mb-4 text-[#556B2F]" />;
      case 'BarChart':
        return <BarChart className="w-12 h-12 mb-4 text-[#556B2F]" />;
      case 'Award':
        return <Award className="w-12 h-12 mb-4 text-[#556B2F]" />;
      case 'Heart':
        return <Heart className="w-12 h-12 mb-4 text-[#556B2F]" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>
      </div>
      <div className="relative p-6 flex flex-col items-center text-center text-white h-full justify-center">
        {renderIcon()}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
