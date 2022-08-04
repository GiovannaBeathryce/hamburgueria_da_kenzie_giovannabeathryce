import "./style.css";

function TotalMoney({ carTotal, setCarTotal, currentSale, setCurrentSale }) {
  const totalMoney = currentSale.reduce((valorAnterior, valorAtual) => {
    return parseInt(valorAtual.price) + parseInt(valorAnterior);
  }, 0);

  return (
    <div>
      <div className="divisor"></div>
      <div className="text-content">
        <section className="valor">
          <p>Total</p>
          <span>R${totalMoney.toFixed(2)}</span>
        </section>
        <button className="btn-totalMoney" onClick={() => setCurrentSale([])}>
          Remover todos
        </button>
      </div>
    </div>
  );
}

export default TotalMoney;
