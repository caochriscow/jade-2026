import Card from "../components/Card";
import { NameTypingAnimation } from "../components/NameTypingAnimation";
import profilephoto from "../assets/githubAvatar.png";

const Home = () => {
  return (
    <div>
      <div className="bg-blue-950 min-w-screen min-h-screen">
        <div className="absolute bottom-0 left-0 mb-5 ml-5">
          <NameTypingAnimation text="Christopher Cao" />
        </div>
      </div>
      <div className="bg-slate-900 lg:p-36 p-20">
        <div className="lg:grid lg:grid-cols-2 flex flex-col gap-4 lg:gap-24 items-center lg:max-w-6xl m-auto">
          <p className="lg:text-2xl text-md text-white">
            I'm a first year CS student @ Columbia University interested in backend dev, computer vision, and robotics.
          </p>
          <img
            src={profilephoto}
            alt="FRC logo"
            className="hidden lg:block rounded-xl"
          />
          <img
            src={profilephoto}
            alt="FRC logo"
            className="lg:hidden block rounded-xl"
          />
        </div>
      </div>

      <div className="text-white max-w-6xl mx-auto p-10">
        <h1 className="text-center lg:text-5xl text-3xl font-bold">
          Projects
        </h1>
      </div>
      <div className="">
        <div className="flex lg:flex-row flex-col">
          <Card title="CU x AWS Finalist" imgSrc={profilephoto} to="https://github.com/Frankanator8/MoMAAmazonBedrock" />
          <Card title="frc1257.org" imgSrc={profilephoto} to="https://frc1257.org/" />
          <Card title="OTS @ BWH/HMS" imgSrc={profilephoto} to="https://github.com/caochriscow/surgical-nav-ots" />
        </div>
        <div className="flex flex-row">
          <Card
            title="BioMentor"
            imgSrc={profilephoto}
            to="https://github.com/caochriscow/biology-mhs"
          />
          <Card
            title="Simplihacks Winner"
            imgSrc={profilephoto}
            to="https://devpost.com/software/wikienv"
            external
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
