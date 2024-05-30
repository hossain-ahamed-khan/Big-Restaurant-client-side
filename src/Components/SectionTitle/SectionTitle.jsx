
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-1/2 mx-auto text-center my-10">
            <p className="text-[#D99904] my-4 font-normal italic">-------{subHeading}------</p>
            <h1 className="text-4xl py-4 border-y-2 font-semibold">{heading}</h1>
        </div>
    );
};

export default SectionTitle;