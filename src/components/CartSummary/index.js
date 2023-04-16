import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const eachProductCostArray = cartList.map(
        eachItem => eachItem.quantity * eachItem.price,
      )
      const totalAmount = eachProductCostArray.reduce((a, b) => a + b)
      const totalItemsInCart = cartList.length

      return (
        <div className="cart-summary-container">
          <div className="cart-holder">
            <h1 className="cart-summary-heading">
              Order Total:
              <span className="total-amount"> {`Rs ${totalAmount}/-`}</span>
            </h1>
            <p className="cart-summary-paragraph">
              {totalItemsInCart} items in Cart
            </p>
          </div>
          <button type="button" className="summary-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
