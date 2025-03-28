export default function ProductDetails() {
  return (
    <div>
      <p>Price</p>
      <div>
        {/* TODO:This should be it's own component */}
        <div>
          <div>-</div>
          <div>Quantity</div>
          <div>+</div>
        </div>
        <button>Add to cart</button>
        <div>Favourite icon</div>
      </div>
      <div>
        <div>
          <h4>Shipping Options</h4>
          <button>
            <div>GPS Icon</div>
            Find local stores
          </button>
        </div>
        <div>
          <ul>
            <li>
              <p>Pickup from store</p>
              <p>Today</p>
              <p>Free</p>
            </li>
            <li>
              <p>Pickup from postal offices</p>
              <p>Tomorrow</p>
              <p>$25.00</p>
            </li>
            <li>
              <p>Delivery by courier</p>
              <p>2-3 days</p>
              <p>$35.00</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
