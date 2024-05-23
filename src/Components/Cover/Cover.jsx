import { Parallax } from 'react-parallax';

const Cover = ({ image, heading, subHeading }) => {
    return (

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={image}
            bgImageAlt="the dog"
            strength={-200}>

            <div className="hero h-[800px]">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-7xl bg-[#15151599] px-60 py-20">
                        <h1 className="mb-5 text-6xl font-bold uppercase">{heading}</h1>
                        <p className="mb-5 uppercase">{subHeading}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;