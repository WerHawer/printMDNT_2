const InfoText = ({ product }) => {
  const {
    sku,
    title,
    sizes,
    color,
    material,
    recommend_retail_price,
    b2b_price,
  } = product;
  return (
    <div className="info-text__wrapper">
      <h3 className="info-text__sku">{sku}</h3>
      <h3 className="info-text__model-name">{title}</h3>

      <ul className="info-text__model-info-list">
        <li>
          <p className="info-list__element">
            <span className="info-list__element--name">Material: </span>
            {material}
          </p>
        </li>
        <li>
          <p className="info-list__element">
            <span className="info-list__element--name">Color: </span>
            {color}
          </p>
        </li>
        <li>
          <p className="info-list__element">
            <span className="info-list__element--name">Available Sizes: </span>
            {sizes}
          </p>
        </li>
      </ul>

      <p className="info-text__b2b-price">B2B price: {b2b_price}</p>

      <p className="info-text__recommended-price">
        <span className="recommended-price-name">
          Recommended retail price:
        </span>{" "}
        {recommend_retail_price}
      </p>
    </div>
  );
};

export default InfoText;
