import { useState, useEffect } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AiTwotoneShopping } from "react-icons/ai";

import { graphcms } from "~/utils/client";
import { GetPlantBySlug } from "~/utils/queries";
import { withCart } from "~/providers/CartProvider";

export const loader = async ({ params }: { params: any }) => {
  const { plant } = await graphcms.request(GetPlantBySlug, {
    slug: params.productId,
  });
  return json({ plant });
};

function ProductRoute(props: any) {
  const { plant } = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState({ url: "" });

  useEffect(() => {
    if (plant) {
      setImage(plant.images[0]);
    }
  }, [plant]);

  const handleQuantityChange = (action: string) => {
    switch (action) {
      case "inc":
        setQuantity(quantity + 1);
        break;

      case "dec":
        if (quantity > 1) setQuantity(quantity - 1);
        break;

      default:
        break;
    }
  };

  const handleImageChange = (target: { url: string }) => {
    setImage(target);
  };

  return (
    <div className="container px-8 mx-auto mt-8">
      <div className="flex">
        <div className="mr-4 space-y-5">
          {plant?.images.map((img: { url: string }) => (
            <div
              className={`shadow-sm rounded-3xl p-12 cursor-pointer ${
                img.url == image.url ? "border-2 border-green-500" : ""
              }`}
              key={img.url}
              onClick={() => handleImageChange(img)}
              style={{
                width: 150,
                height: 150,
                backgroundImage: `url(${img.url})`,
                backgroundSize: "cover",
              }}
            ></div>
          ))}
        </div>
        <div className="w-fit">
          <div className="overflow-hidden rounded-3xl w-fit shadow-sm">
            <img
              src={image?.url}
              alt={plant?.description}
              style={{ width: 700 }}
            />
          </div>
        </div>
        <div className="w-6/12 flex flex-col px-16 py-4 space-y-12">
          <div className="space-y-3">
            <p className="text-xl">Indoor Plants</p>
            <h1 className="font-serif text-6xl">{plant?.title} </h1>
            <p>
              <sup>Dzd</sup>{" "}
              <span className="font-bold text-4xl">{plant?.price}</span>
            </p>
          </div>
          <div>
            <p className="font-semibold">Description</p>
            <hr className="w-2/3 mt-2 border-t-2 border-gray-300" />
            <p className="mt-4 text-gray-700">{plant?.description}</p>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-semibold">Select Quantity</p>
              <div className="flex items-center mt-2 space-x-4">
                <button
                  className="px-4 py-2 bg-primary text-light hover:bg-secondary hover:shadow hover:text-primary"
                  onClick={() => handleQuantityChange("dec")}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="px-4 py-2 bg-primary text-light hover:bg-secondary hover:shadow hover:text-primary"
                  onClick={() => handleQuantityChange("inc")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex">
              <button
                className="bg-primary text-light px-16 py-4 flex space-x-4 items-center justify-center w-fit"
                onClick={() => props.addItem({ ...plant, quantity })}
              >
                <span>
                  <AiTwotoneShopping size={18} />
                </span>
                <span className="uppercase">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withCart(ProductRoute);
