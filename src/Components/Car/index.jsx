import CardCar from "../CardCar";
import TotalMoney from "../totalMoney";
import "./style.css";

function CarShopp({ carTotal, setCarTotal, currentSale, setCurrentSale }) {
  return (
    <div className="car-container">
      <div className="content-car">
        <section className="titulo-car">
          <h4>Carrinho de compras</h4>
        </section>

        <section className="card-car">
          {currentSale.length === 0 ? (
            <div className="car-empty">
              <h4>Sua sacola está vazia</h4>
              <span>Adicione itens</span>
            </div>
          ) : (
            <>
              <ul className="list-cards">
                {currentSale.map((item) => (
                  <CardCar
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    category={item.category}
                    img={item.img}
                    setCurrentSale={setCurrentSale}
                  />
                ))}
              </ul>
            </>
          )}
        </section>
        {currentSale.length === 0 ? (
          <section className="valorTotal"></section>
        ) : (
          <section className="valorTotal">
            <TotalMoney
              carTotal={carTotal}
              setCarTotal={setCarTotal}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          </section>
        )}
      </div>
    </div>
  );
}

export default CarShopp;
