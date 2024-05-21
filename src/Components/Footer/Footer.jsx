import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
    return (
        <footer>
            <div className="w-full h-[400px] text-white flex">
                <div className="w-1/2 bg-[#1F2937] flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-semibold mb-4">CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>

                <div className="w-1/2 bg-[#111827] flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-semibold mb-4">Follow US</h2>
                    <p>Join us on social media</p>
                    <div className="flex gap-6 mt-6">
                        <TiSocialFacebook />
                        <SlSocialInstagram />
                        <SlSocialTwitter />
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#151515] text-white text-center py-4">
                <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;