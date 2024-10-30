import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Feature = ({ feature }) => {
  return (
    <div className="text-start">
      <p className="flex items-center gap-2">
        <IoCheckmarkCircleOutline className="text-emerald-500"></IoCheckmarkCircleOutline>
        {feature}
      </p>
    </div>
  );
};

export default Feature;
