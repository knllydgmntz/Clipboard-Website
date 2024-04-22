import imgGoogle from "../assets/images/logo-google.png";
import imgIbm from "../assets/images/logo-ibm.png";
import imgMicrosoft from "../assets/images/logo-microsoft.png";
import imgHp from "../assets/images/logo-hp.png";
import imgVector from "../assets/images/logo-vector-graphics.png";

const References = () => {
  return (
    <section id="references">
      <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        <img src={imgGoogle} alt="google logo" />
        <img src={imgIbm} alt="ibm logo" />
        <img src={imgMicrosoft} alt="microsoft logo" />
        <img src={imgHp} alt="hp logo" />
        <img src={imgVector} alt="vector-graphics logo" />
      </div>
    </section>
  );
};

export default References;
