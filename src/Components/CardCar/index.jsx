import "./style.css";

function CardCar({ name, category, img, id, setCurrentSale }) {
  const removeItemCar = (itemRemove) => {
    setCurrentSale((oldcurrentSale) => {
      const newcurrentSale = oldcurrentSale.filter(
        (item) => item.id !== itemRemove
      );
      return newcurrentSale;
    });
  };

  return (
    <li className="cardCar" id={id}>
      <div className="imagem-product">
        <img src={img} alt={name} />
      </div>
      <div className="descricao">
        <h5>{name}</h5>
        <span>{category}</span>
      </div>
      <div className="btn-remove">
        <button className="remove" onClick={() => removeItemCar(id)}>
          Remover
        </button>
      </div>
    </li>
  );
}

export default CardCar;
