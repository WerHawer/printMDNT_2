import BigPhoto from "./components/BigPhoto";
import SmallPhotos from "./components/SmallPhotos";
import InfoText from "./components/InfoText";

const ModelBlock = ({ product }) => (
  <div className="model-block__wrapper">
    <BigPhoto photoUrl={product.vertical_front} productName={product.title} />

    <div className="model-block__right-side">
      <InfoText product={product} />
      <SmallPhotos product={product} />
    </div>
  </div>
);

export default ModelBlock;
