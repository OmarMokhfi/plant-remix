import { Link } from "@remix-run/react";
import { AiOutlineRise, AiOutlinePlus } from "react-icons/ai";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { graphcms } from "~/utils/client";
import { GetLatestPlantsQuery } from "~/utils/queries";

interface Product {
  slug: string;
  title: string;
  description: string;
  images: Array<{ id: string; filename: string; url: string }>;
}

export const loader = async () => {
  const { plants } = await graphcms.request(GetLatestPlantsQuery);
  return json(plants);
};

export default function Index() {
  const products = useLoaderData();
  return (
    <div className="container px-8 mx-auto">
      <div className="w-full flex items-center border border-gray-200">
        <div
          className="w-5/12"
          style={{
            height: 700,
            backgroundImage:
              "url(https://images.pexels.com/photos/4065905/pexels-photo-4065905.jpeg?auto=compress&cs=tinysrgb&w=1600)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-5/12 px-6 space-y-6">
          <h1 className="font-serif text-9xl">
            <span className="-ml-40">Plants Make</span>
            <br />
            <span>Life Better</span>
          </h1>
          <p className="text-2xl px-12">
            Plants reduce stress and improve your mood, so they are ideal for
            use at home and in workplace
          </p>
          <Link
            to="/plants"
            className="bg-primary text-light px-8 py-4 ml-12 flex space-x-4 items-center justify-center w-fit"
          >
            <span>Shop Now</span>{" "}
            <AiOutlineRise color="rgb(90, 233, 145)" size={18} />
          </Link>
        </div>
        <div
          className="w-2/12 border-l border-gray-200 flex flex-col justify-center items-center space-y-12"
          style={{ height: 700 }}
        >
          {products.map((product: Product) => (
            <Link to={`/plants/${product.slug}`} key={product.slug}>
              <div
                className="w-32 h-40 border border-gray-300 rounded-tr-full rounded-tl-full"
                style={{
                  backgroundImage: `url(${product.images[0].url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <button className="w-8 h-8 bg-primary rounded-full flex justify-center items-center">
                  <AiOutlinePlus size={18} color="white" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center border-l border-r border-b border-gray-200">
        <div className="w-8/12 py-12">
          <p className="text-5xl font-serif">
            We will ship everything to your home, so you concentrate on pleasing
            your taste
          </p>
        </div>
        <div className="w-2/12">
          <div
            style={{
              height: 250,
              width: 200,
              backgroundImage:
                "url(https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=1600)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
        <div className="w-2/12">
          <div
            style={{
              aspectRatio: "1 / 1.5",
              height: "auto",
              width: "100%",
              backgroundImage:
                "url(https://images.pexels.com/photos/1877920/pexels-photo-1877920.jpeg?auto=compress&cs=tinysrgb&w=1600)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
