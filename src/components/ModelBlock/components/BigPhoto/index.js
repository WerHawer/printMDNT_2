const BigPhoto = ({ photoUrl, productName }) => (
  <div className="big-photo__wrapper">
    <img src={photoUrl} alt={productName} className="big-photo"></img>
  </div>
);

export default BigPhoto;
