export function Paid() {
  return (

      <section class="pay-card-boxes">
        <div  class="title">
          <h3>Bills Paid</h3>
        </div>
        <div class="container-bills">
          <div class="bill">
            <div class="description">
              <div class="description-left">
                <div class="icon-bill">
                  <i class="fas fa-circle fa-xs"></i>
                </div>
                <div>
                  <p>Vodafone</p>
                  <small>26-06-2021</small>
                </div>
              </div>
              <div class="value-bill-icon">
                <p>€115</p>
                <i class="fas fa-check-circle"></i>
              </div>
            </div>
          </div>

          <div class="bill">
            <div class="description">
              <div class="description-left">
                <div class="icon-bill">
                  <i class="fas fa-circle fa-xs"></i>
                </div>
                <div>
                  <p>Vitens</p>
                  <small>26-06-2021</small>
                </div>
              </div>
              <div class="value-bill-icon">
                <p>€29</p>
                <i class="fas fa-check-circle"></i>
              </div>
            </div>
          </div>
        </div>
     
      </section>
  );
}
