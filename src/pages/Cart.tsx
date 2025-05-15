import CartItem from "../components/CartItem";

function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* ستون محصولات */}
        <div className="flex-1 space-y-6">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        {/* ستون خلاصه پرداخت */}
        <div className="w-full md:w-80 bg-gray-100 p-6 rounded-2xl shadow-lg h-fit">
          <h2 className="text-xl font-bold mb-4 text-center text-black">
            Checkout Summary
          </h2>

          <div className="flex justify-between text-lg mb-2 text-gray-800">
            <span>Total Items:</span>
            <span>3</span>
          </div>

          <div className="flex justify-between text-lg mb-4 text-gray-800">
            <span>Total Price:</span>
            <span>$3600</span>
          </div>

          <button className="bg-black hover:bg-gray-800 text-white w-full py-3 rounded-xl text-lg font-semibold transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
