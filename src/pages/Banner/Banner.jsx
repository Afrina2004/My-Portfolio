import img from '../../assets/Banner.png';

const Banner = () => {
  return (
    <div className="">
      <img
        src={img}
        alt="Banner"
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen object-cover"
      />
    </div>
  );
};

export default Banner;
