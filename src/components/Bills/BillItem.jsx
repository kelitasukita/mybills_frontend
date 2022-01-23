export function BillItem(props) {
  return (
    <div class="bill">
      <div class="description">
        <div class="description-left">
          <div class="icon-bill">
            <i class="fas fa-circle fa-xs"></i>
          </div>
          <div>
            <p>{props.dados.title}</p>
            <small>{props.dados.date}</small>
          </div>
        </div>
        <div class="value-bill-icon">
          <p>{props.dados.price}</p>
          <i class={`fas fa-${props.classe}-circle`}></i>
        </div>
      </div>
    </div>
  );
}