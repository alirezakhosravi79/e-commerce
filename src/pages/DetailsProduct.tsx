import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import { ProductTypes } from "../types/servise";

function DetailsProduct() {

  const [singleProduct, setSingleProduct] = useState<ProductTypes>();
  //type useparams || as string ham migim ino be onvan string ghabolesh kne
  const params = useParams<{id: string}>()

  // console.log();

  useEffect(() => {
    getProduct(params.id as string).then((res) => {
      setSingleProduct(res);
    })
  },[])
  
  return (
    <div className="container mx-auto my-8 flex gap-3.5 flex-col md:flex-row  rounded-xl shadow-lg overflow-hidden">
      {/* تصویر محصول */}
      <div className="md:w-1/3 bg-purple-100 flex justify-center items-center p-4">
        <img
          className="rounded-lg max-h-80 object-cover"
          src={singleProduct?.image}
          alt="Product Image"
        />
      </div>

      {/* توضیحات محصول */}
      <div className="md:w-2/3 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-black mb-4">{singleProduct?.title}</h2>
        <h3 className="text-blue-700 font-semibold my-4"> Price: ${singleProduct?.price}</h3>
        <p className="text-gray-700 leading-relaxed">
          {singleProduct?.description}
        </p>
        <p className="text-yellow-500 mt-4">Rate: {singleProduct?.rating.rate}</p>

        <button className="mt-12 ml-4 bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-400 hover:text-black transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default DetailsProduct;
