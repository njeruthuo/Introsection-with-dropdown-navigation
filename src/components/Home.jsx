import desktop from "../img/image-hero-desktop.png";
import mobile from "../img/image-hero-mobile.png";
import audiophile from "../img/client-audiophile.svg";
import databiz from "../img/client-databiz.svg";
import maker from "../img/client-maker.svg";
import meet from "../img/client-meet.svg";

const Home = () => {
  return (
    <div className="sm:w-[90%] mx-auto sm:pt-8 mb-8 sm:mb-0">
      <div className="flex flex-col-reverse gap-4 sm:flex-row">
        <div className="sm:w-1/2 w-auto sm:p-14 p-6">
          <h1 className="sm:text-6xl text-3xl text-center sm:text-left">
            Make{" "}
            <span className="sm:block sm:text-6xl text-3xl">remote work</span>
          </h1>
          <p className="sm:w-[400px] text-center sm:text-left text-xs my-8 text-mediumGray">
            Get your team in sync, no matter your location.{" "}
            <br className="hidden sm:block" />
            Streamline processes, create team rituals and{" "}
            <br className="hidden sm:block" /> watch productivity soar.
          </p>

          <div className="flex w-full justify-center sm:justify-start my-4">
            <button className="learn-more">Learn more</button>
          </div>

          <div
            id="partners"
            className="flex sm:space-x-8 sm:mt-20 justify-around"
          >
            <img src={audiophile} alt="partner 1" />
            <img src={databiz} alt="partner 2" />
            <img src={meet} alt="partner 3" />
            <img src={maker} alt="partner 4" />
          </div>
        </div>

        <div className="sm:w-1/2 w-auto flex justify-center">
          <img className="hidden sm:block h-[500px] sm:mr-12" src={desktop} alt="Desktop" />
          <img className="block sm:hidden" src={mobile} alt="Mobile" />
        </div>
      </div>
    </div>
  );
};
export default Home;
