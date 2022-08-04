import "./style.css";

function CardContainer({
  category,
  img,
  name,
  price,
  id,
  currentSale,
  setCurrentSale,
}) {
  const handleClick = (id) => {
    const contem = currentSale.find((item) => item.id === id);

    if (!contem) {
      setCurrentSale((prevCurrentSale) => [
        ...prevCurrentSale,
        { category, img, name, price, id },
      ]);
    }
  };

  return (
    <>
      <li id={id}>
        <div className="img-product">
          <img src={img} alt={name} />
        </div>
        <div className="describle-product">
          <h5>{name}</h5>
          <span>{category}</span>
          <p>R$ {price.toFixed(2)}</p>
          <button onClick={() => handleClick(id)}>Adicionar</button>
        </div>
      </li>
    </>
  );
}

export default CardContainer;
