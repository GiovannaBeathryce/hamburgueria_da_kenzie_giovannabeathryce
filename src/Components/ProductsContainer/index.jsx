import CardContainer from "../CardContainer";
import "./style.css";

function ProductsList({
  products,
  filteredProducts,
  setCurrentSale,
  currentSale,
}) {
  return (
    <div className="container-products">
      <ul>
        {filteredProducts === ""
          ? products.map((product, index) => (
              <CardContainer
                key={index}
                id={product.id}
                name={product.name}
                category={product.category}
                img={product.img}
                price={product.price}
                setCurrentSale={setCurrentSale}
                currentSale={currentSale}
              />
            ))
          : products
              .filter(
                (item) =>
                  filteredProducts.toLowerCase() === item.name.toLowerCase() ||
                  filteredProducts.toLowerCase() ===
                    item.category
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
              )
              .map((item, index) => (
                <CardContainer
                  key={index}
                  id={item.id}
                  name={item.name}
                  category={item.category}
                  img={item.img}
                  price={item.price}
                  setCurrentSale={setCurrentSale}
                  currentSale={currentSale}
                />
              ))}
      </ul>
    </div>
  );
}

export default ProductsList;
