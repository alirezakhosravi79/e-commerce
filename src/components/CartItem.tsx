function CartItem() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-2xl p-5 shadow-lg mb-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
      {/* تصویر محصول */}
      <img
        className="w-56 h-56 object-cover rounded-xl border border-gray-300 shadow-sm"
        src="https://images.hdqwalls.com/wallpapers/bthumb/immortal-superman-kl.jpg"
        alt="Product"
      />

      {/* جزئیات محصول */}
      <div className="flex-1 md:ml-6 mt-5 md:mt-0 w-full">
        <h2 className="text-xl font-bold text-center md:text-left text-black">
          Superman Poster
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-5">
          {/* قیمت */}
          <div>
            <span className="text-lg text-green-700 font-semibold tracking-wide">
              Price: $1200
            </span>
          </div>

          {/* کنترل‌ها */}
          <div className="flex items-center gap-4">
            {/* کنترل تعداد */}
            <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-xl">
              <button className="bg-black hover:bg-gray-800 text-white px-2 py-1 rounded transition">
                -
              </button>
              <span className="text-black text-lg font-medium">1</span>
              <button className="bg-black hover:bg-gray-800 text-white px-2 py-1 rounded transition">
                +
              </button>
            </div>

            {/* دکمه حذف */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition font-medium">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
