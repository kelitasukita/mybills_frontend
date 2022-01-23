export function Amex() {
  return (
      <>
      <section className="pay-card-boxes">
      <div className="header-cards">
        <div className="title">
          <h3>Amex expenses</h3>
        </div>
        <div className="total-value">
          <p className="negrito">€370</p>
        </div>
      </div>

      <div className="container-creditcard">
        <div className="description-card">
          <div className="desc-card-left">
            <p>26-06-2021</p>
            <p>MediaMarket</p>
          </div>
          <div className="value">
            <p>€220</p>
          </div>
        </div>
        <div className="description-card">
          <div className="desc-card-left">
            <p>26-06-2021</p>
            <p>Gamma</p>
          </div>
          <div className="value">
            <p>€150</p>
          </div>
        </div>
      </div>
    </section>
    
    </>

  );
}