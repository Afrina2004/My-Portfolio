import img from '../../assets/Banner.png';

const Banner = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <img
        src={img}
        alt="Banner"
        className="w-full h-auto max-h-screen object-cover"
      />
    </div>
  );
};

export default Banner;
