import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
    const { title, price, features, buttonText } = option;
    return (
      <div className="flex flex-col bg-slate-700 p-12 rounded-md border space-y-4">
        <h2>
          <span className="text-6xl font-bold text-white">{price}</span>
          <span className="text-xl font-medium">/mon</span>
        </h2>
        <h3 className="text-4xl font-bold text-emerald-500">{title}</h3>
        <div className="flex-grow">
          {features.map((feature, index) => (
            <Feature feature={feature} key={index}></Feature>
          ))}
        </div>
        <button className="bg-emerald-600 py-3 rounded-lg w-full text-white font-semibold text-lg mt-6">{buttonText}</button>
      </div>
    );
};

export default PriceOption;