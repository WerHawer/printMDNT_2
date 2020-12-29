import Header from "components/Header";
import ModelBlock from "components/ModelBlock";
import renderFile from "public/render.json";

const elementsOnPage = 2;
const max = Math.round(renderFile.products.length / elementsOnPage);

const productsToRender = [];

for (let i = 0; i <= max; i++) {
  const start = i * elementsOnPage;
  const finish = (i + 1) * elementsOnPage;

  const twoElementsArr = renderFile.products.slice(start, finish);

  productsToRender.push(twoElementsArr);
}

const App = () => (
  <>
    {productsToRender.map((el) => (
      <div className="app-wrapper" key={el[0]?.title || "39793hn792i-0"}>
        <Header />

        {el.map((product) => (
          <ModelBlock
            product={product}
            key={product?.title + product?.sku || "783728ue8dndnj"}
          />
        ))}
      </div>
    ))}
  </>
);

export default App;
