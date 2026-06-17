import WavePatternBackground from "../../assets/background/wave-pattern.png";
import Rectangle1 from "../../assets/photos/rectangle1.png";
import Rectangle2 from "../../assets/photos/rectangle2.png";
import Rectangle3 from "../../assets/photos/rectangle3.png";
import Rectangle4 from "../../assets/photos/rectangle4.png";
import SecondaryButton from "../button/SecondaryButton";
function OurStory() {
  const images = [Rectangle4, Rectangle1, Rectangle2, Rectangle3];
  return (
    <div
      className="wrapper full-size flex flex-col gap-8 overflow-hidden bg-cover bg-center bg-no-repeat py-24 text-white!"
      style={{ backgroundImage: `url(${WavePatternBackground})` }}
    >
      <div className="wrapper md:align-center md:flex md:flex-row md:justify-center">
        <div className="flex flex-col">
          <div className="accent-title text-white!">Our Story</div>
          <div className="content-title text-white!">
            Amerisouth Realty investment and advisory business:
          </div>
          <div className="my-8 hidden md:block">
            <SecondaryButton text={"See who we are"} />
          </div>
        </div>
        <div className="text-md flex items-center justify-center text-white!">
          Since its inception, Amerisouth has completed more than $11 billion in
          multifamily communities.
        </div>
        <div className="mt-8 md:hidden">
          <SecondaryButton text={"See who we are"} />
        </div>
      </div>
      <div className="full-size flex w-full flex-col flex-nowrap gap-2 overflow-hidden border md:flex-row md:gap-4">
        {images.map((image, idx) => {
          return (
            <div
              className="flex h-full w-full items-center justify-center"
              key={idx}
            >
              <img src={image} alt="" className="h-full w-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurStory;
