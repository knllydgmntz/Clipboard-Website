import imgDevices from "../assets/images/image-devices.png";

const Access = () => {
  return (
    <section id="access">
      <div className="section-container my-20">
        <h3>Access Clipboard Anywhere</h3>
        <p className="section-content mb-24 text-xl">
          Whether you&apos;re on the go, or at your computer, you can access all
          your Clipboard snippets in a few simple clicks.
        </p>

        <img src={imgDevices} alt="Devices Image" className="mx-auto" />
      </div>
    </section>
  );
};

export default Access;
