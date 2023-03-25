import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

import { graphcms } from "~/utils/client";
import { GetPlantsQuery } from "~/utils/queries";

interface Product {
  slug: string;
  title: string;
  description: string;
  price: number;
  images: Array<{ id: string; filename: string; url: string }>;
}

export const loader = async () => {
  const { plants } = await graphcms.request(GetPlantsQuery);
  return json(plants);
};

function PlantsIndexRoute() {
  const products = useLoaderData();
  const [filter, setFilter] = useState("");
  return (
    <div className="container mx-auto px-8 mt-8">
      <div
        className="flex rounded-3xl"
        style={{
          backgroundColor: "#ddecee",
          backgroundImage: "url(/images/cover.png)",
          backgroundSize: "contain",
          backgroundPositionX: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-5/12 px-12 py-16">
          <h1 className="text-5xl font-serif">
            <span>Fresh Green.</span> <br />
            <span>Fresh & Beautiful Interior.</span>
          </h1>
          <p className="mt-3 text-gray-500">
            VeraVerto is the best place to make your home healthy and beautiful,
            and put yourself in an environment of chill and relax.
          </p>
          <div className="w-full relative h-fit">
            <input
              type="text"
              onChange={(e) => setFilter(e.target.value)}
              placeholder="What kind of plant you want ?"
              className="focus:outline-none focus:shadow-none shadow-sm rounded-xl w-full px-8 py-6 mt-6"
            />
            <button className="p-3 rounded-full absolute top-10 right-8 bg-primary">
              <RiSearchLine size={16} color="white" />
            </button>
          </div>
        </div>
      </div>
      <ul className="mt-24 flex justify-between">
        {products.map((product: Product) => (
          <>
            {(!filter ||
              product.title.toLowerCase().includes(filter.toLowerCase())) && (
              <li key={product.slug}>
                <ProductCard product={product} />
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl shadow w-fit relative">
      <div className="rounded-xl overflow-hidden" style={{ height: 350 }}>
        <img
          src={
            product.images[1] ? product.images[1].url : product.images[0].url
          }
          alt={product.description}
          width={250}
        />
      </div>
      <div className="rounded-tr-3xl rounded-tl-3xl bg-light absolute bottom-0 w-full shadow-sm p-4 space-y-4">
        <div>
          <Link to={`/plants/${product.slug}`}>
            <p className="text-primary">{product.title}</p>
          </Link>
          <p>{product.description.substr(0, 22)}...</p>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">{product.price} dzd</span>
          <Link to={`/plants/${product.slug}`}>
            <button className="w-8 h-8 bg-primary rounded-full flex justify-center items-center">
              <AiOutlinePlus size={18} color="white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlantsIndexRoute;
