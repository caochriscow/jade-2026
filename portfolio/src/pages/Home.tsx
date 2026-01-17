import Card from "../components/Card";
import { NameTypingAnimation } from "../components/NameTypingAnimation";
import profilephoto from "../assets/githubAvatar.png";
import awsphoto from "../assets/awsComp.jpeg";
import frclogo from "../assets/biggerWhite.png";
import hmslogo from "../assets/hmslogo.jpg";
import mhslogo from "../assets/mhslogo.png";
import devpost from "../assets/devpostlogo.jpg";
import LineMotion from "../components/LineMotion";

const Home = () => {
  return (
    <div>
      <div className="bg-blue-950 min-h-screen">
        <LineMotion />
        <div className="absolute bottom-0 left-0 mb-5 ml-5">
          <NameTypingAnimation text="Christopher Cao" />
        </div>
      </div>
      <div className="bg-slate-900 lg:p-36 p-20 font-nunito">
        <div className="lg:grid lg:grid-cols-2 flex flex-col gap-4 lg:gap-24 items-center lg:max-w-6xl m-auto">
          <p className="lg:text-2xl text-md text-white leading-relaxed">
            I'm a first year CS student @ Columbia University interested in backend dev, computer vision, and robotics.
          </p>
          <img
            src={profilephoto}
            alt="profile"
            className="hidden lg:block rounded-xl"
          />
          <img
            src={profilephoto}
            alt="profile"
            className="lg:hidden block rounded-xl"
          />
        </div>
      </div>

      <div className="p-36">
        <div className="text-white max-w-6xl mx-auto">
          <h1 className="text-center lg:text-5xl text-3xl font-bold mb-10">
            Projects
          </h1>
        </div>
        <div className="">
          <div className="flex lg:flex-row flex-col">
            <Card title="CU x AWS Finalist" imgSrc={awsphoto} to="https://github.com/Frankanator8/MoMAAmazonBedrock" external />
            <Card title="frc1257.org" imgSrc={frclogo} to="https://frc1257.org/" external />
            <Card title="OTS @ BWH/HMS" imgSrc={hmslogo} to="https://github.com/caochriscow/surgical-nav-ots" external />
          </div>
          <div className="flex flex-row">
            <Card
              title="BioMentor"
              imgSrc={mhslogo}
              to="https://github.com/caochriscow/biology-mhs"
              external
            />
            <Card
              title="Simplihacks Winner"
              imgSrc={devpost}
              to="https://devpost.com/software/wikienv"
              external
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
