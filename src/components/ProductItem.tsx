import { ProductTypes } from "../types/servise";

// تعریف نوع تایپ
type IProductItem = ProductTypes;

function ProductItem({
  image,
  description,
  price,
  rating,
  title,
}: IProductItem) {
  return (
    <div
      className="bg-gray-200 hover:shadow-xl hover:scale-[1.015] transition-all duration-300 
      px-5 py-4 rounded-2xl shadow-md text-black"
    >
      <div>
        {/* تصویر محصول */}
        <img
          className="w-full px-6 pt-1 h-72 object-cover mx-auto mt-1 rounded-2xl transition-transform duration-300 hover:scale-105"
          src={image}
          alt={title}
        />

        {/* عنوان محصول */}
        <h2 className="text-xl text-center font-bold mt-4 line-clamp-1 text-black">
          {title}
        </h2>

        {/* قیمت */}
        <div className="flex justify-between mx-1 items-center mt-3">
          <span className="text-lg font-medium">Price:</span>
          <span className="text-lg font-semibold text-green-700">
            $ {price}
          </span>
        </div>

        {/* ستاره‌ها و تعداد رای‌ها */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {index < Math.round(rating.rate) ? "⭐" : "☆"}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-700">({rating.count} reviews)</p>
        </div>

        {/* توضیحات */}
        <p className="my-5 text-black line-clamp-2 text-sm leading-relaxed">
          {description}
        </p>

        {/* دکمه افزودن به سبد خرید */}
        <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 w-full my-2 rounded-xl transition">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
