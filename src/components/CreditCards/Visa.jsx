export function Visa() {
  return(
    <>
      <section className="pay-card-boxes">
        <div className="header-cards">
          <div className="title">
            <h3>Visa Expenses</h3>
          </div>
          <div className="total-value">
            <p className="negrito">€87</p>
          </div>
        </div>

        <div className="container-creditcard">
          <div className="description-card">
            <div className="desc-card-left">
              <p>26-06-2021</p>
              <p>Kruidvat</p>
            </div>
            <div className="value">
              <p>€62</p>
            </div>
          </div>
          <div className="description-card">
            <div className="desc-card-left">
              <p>26-06-2021</p>
              <p>Plein</p>
            </div>
            <div className="value">
              <p>€25</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}