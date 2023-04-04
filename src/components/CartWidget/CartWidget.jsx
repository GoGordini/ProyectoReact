import { BsCart4 } from "react-icons/bs";
const CartWidget = () => {
  return (
    <div>
      <BsCart4 size={20} />
      <span style={{ "font-size": "15px" }}>0</span>
    </div>
  );
};

export default CartWidget;
