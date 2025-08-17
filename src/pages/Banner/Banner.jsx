import img from '../../assets/Banner.png';

const Banner = () => {
  return (
    <div className="w-full h-[100vh] sm:h-[80vh]">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      >
        
      </div>
    </div>
  );
};

export default Banner;
