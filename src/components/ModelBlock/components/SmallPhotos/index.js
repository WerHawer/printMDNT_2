const SmallPhotos = ({ product }) => {
  const { vertical_back, vertical_detail1, vertical_detail2 } = product;

  return (
    <div className="small-photos__wrapper">
      <div className="small-photo__container">
        <img
          src={vertical_back}
          alt="small photo"
          className="small-photo"
        ></img>
      </div>

      <div className="small-photo__container">
        <img
          src={vertical_detail1}
          alt="small photo"
          className="small-photo"
        ></img>
      </div>

      <div className="small-photo__container">
        <img
          src={vertical_detail2}
          alt="small photo"
          className="small-photo"
        ></img>
      </div>
    </div>
  );
};

export default SmallPhotos;
