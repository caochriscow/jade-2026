import { Map } from "@emotion-icons/boxicons-regular/Map";
import { School } from "@emotion-icons/ionicons-outline/School";
// import { Telephone } from "@emotion-icons/bootstrap/Telephone";
// import { EmailOutline } from "@emotion-icons/evaicons-outline/EmailOutline";
// import { FacebookCircle } from "@emotion-icons/boxicons-logos/FacebookCircle";
// import { Instagram } from "@emotion-icons/boxicons-logos/Instagram";
// import { Youtube } from "@emotion-icons/boxicons-logos/Youtube";
import { Github } from "@emotion-icons/boxicons-logos/Github";
import { Linkedin } from "@emotion-icons/boxicons-logos/Linkedin";
import { NavLink } from "react-router";
import profilephoto from "../assets/githubAvatar.png";

const Footer = () => {
  return (
    <div className="bg-gray-700 flex lg:py-10 lg:px-32 py-20 text-white">
      <div className="hidden lg:grid lg:grid-cols-3 justify-between items-center w-full">
        <div className="lg:flex hidden flex-col gap-1">
          <h1 className="lg:text-3xl font-semibold">Christopher Cao</h1>
          <p className="font-nunito">cc5450 [at] columbia [dot] edu</p>
        </div>
        <img
          className="object-contain lg:h-40 lg:w-40 w-24 h-24 bg-black rounded-full justify-self-center"
          src={profilephoto}
          alt="profile"
        />
        <div className="text-3xl lg:hidden block">Christopher Cao</div>
        <div className="text-white flex flex-col justify-center justify-self-end">
          <div className="flex flex-row items-center gap-2">
            <School size={16} />
            <p>Columbia University, SEAS</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Map size={16} />
            <p>70 Morningside Dr, New York, NY 10027</p>
          </div>
          {/* <div className="flex flex-row items-center gap-2">
            <Telephone size={16} />
            <p>908-889-8288 x255</p>
          </div> */}
          {/* <div className="flex flex-row items-center gap-2">
            <EmailOutline size={16} />
            <p>mcook@ucvts.org</p>
          </div> */}
          <div className="flex flex-row items-center mt-2 gap-2">
            <div className="rounded-full bg-black p-1">
              <NavLink
                to="https://www.linkedin.com/in/christopher-cao-1b9000244"
                target="_blank"
              >
                <Linkedin size={32} />
              </NavLink>
            </div>
            <div className="rounded-full bg-black p-1">
              <NavLink to="https://github.com/caochriscow" target="_blank">
                <Github size={32} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col mx-auto lg:hidden">
        <div className="flex flex-row items-center justify-center mx-auto gap-2 mb-2">
          <div className="rounded-full bg-black p-2">
            <Link to="https://www.facebook.com/FRC1257/" target="blank">
              <FacebookCircle size={36} />
            </Link>
          </div>
          <div className="rounded-full bg-black p-2">
            <Link to="https://www.instagram.com/frc1257/" target="blank">
              <Instagram size={36} />
            </Link>
          </div>
          <div className="rounded-full bg-black p-2">
            <Link
              to="https://www.youtube.com/@ParallelUniverse1257"
              target="blank"
            >
              <Youtube size={36} />
            </Link>
          </div>
          <div className="rounded-full bg-black p-2">
            <Link to="https://github.com/FRC1257" target="blank">
              <Github size={36} />
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 mx-auto">
          <School size={16} />
          <p>Union County Magnet High School</p>
        </div>
        <div className="flex flex-row items-center gap-2 mx-auto">
          <Map size={16} />
          <p>1776 Raritan Rd, Scotch Plains, NJ 07076</p>
        </div>
        <div className="flex flex-row items-center gap-2 mx-auto">
          <Telephone size={16} />
          <p>908-889-8288 x255</p>
        </div>
        <div className="flex flex-row items-center gap-2 mx-auto">
          <EmailOutline size={16} />
          <p>mcook@ucvts.org</p>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;