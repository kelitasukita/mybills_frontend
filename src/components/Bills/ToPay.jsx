export function ToPay() {
  return (

    <section class="pay-card-boxes">
      <div  class="title">
        <h3>Bills to Pay</h3>
      </div>
      <div class="unpaid" />
        <div class="bill">
        <div class="description">
          <div class="description-left">
            <div class="icon-bill">
              <i class="fas fa-circle fa-xs"></i>
            </div>
            <div>
              <p>Hypoteek</p>
              <small>26-06-2021</small>
            </div>
          </div>
            <div class="value-bill-icon">
              <p>€1226</p>
              <i class="fas fa-minus-circle"></i>
            </div>
          </div>
        </div>
    </section>

  );
}