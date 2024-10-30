import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
      {
        id: 1,
        title: "Basic",
        price: "$20",
        features: [
          "Access to gym equipment",
          "Locker room access",
          "1 free personal training session",
        ],
        buttonText: "Choose Basic",
      },
      {
        id: 2,
        title: "Standard",
        price: "$40",
        features: [
          "Access to gym equipment",
          "Locker room & sauna access",
          "5 free personal training sessions",
          "Access to group classes",
        ],
        buttonText: "Choose Standard",
      },
      {
        id: 3,
        title: "Premium",
        price: "$60",
        features: [
          "Access to gym equipment & pool",
          "Locker room, sauna, and spa access",
          "Unlimited personal training sessions",
          "VIP access to all group classes",
          "Diet and fitness consultations",
        ],
        buttonText: "Choose Premium",
      },
    ];


    return (
      <div className="p-6">
        <h2 className="text-5xl font-bold text-center text-white">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-center mt-12 gap-12">
          {priceOptions.map((option) => (
            <PriceOption option={option} key={option.id}></PriceOption>
          ))}
        </div>
      </div>
    );
};

export default PriceOptions;