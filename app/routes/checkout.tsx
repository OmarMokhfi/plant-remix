import { withCart } from "~/providers/CartProvider";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

function Checkout(props: any) {
  const { total, items, updateItem, removeItem } = props;
  const [delivery, setDelivery] = useState(0);

  if (total == 0)
    return (
      <div className="container px-8 mx-auto mt-8">
        <p>Cart is empty</p>
      </div>
    );
  return (
    <div className="container px-8 mx-auto mt-8">
      <h1 className="font-serif text-7xl">My Cart ({total})</h1>
      {total > 0 && (
        <table className="table-auto w-full border-separate border-spacing-2 mt-10">
          <thead className="py-2 border-b border-gray-300">
            <tr className="text-left text-base text-gray-600">
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(
              (item: {
                slug: string;
                title: string;
                price: number;
                quantity: number;
                images: Array<{ id: string; fileName: string; url: string }>;
              }) => (
                <tr key={item.slug + item.quantity}>
                  <td>
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        backgroundImage: `url(${item.images[0].url})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    {item.price} <sup>Dzd</sup>
                  </td>
                  <td>
                    <Quantity
                      quantity={item.quantity}
                      slug={item.slug}
                      updateItem={(slug: string, quantity: number) =>
                        updateItem(slug, quantity)
                      }
                    />
                  </td>
                  <td>
                    {item.price * item.quantity}
                    <sup>Dzd</sup>
                  </td>
                  <td className="flex justify-end py-7">
                    <button
                      className="px-2 py-2 bg-gray-50 text-dark shadow hover:bg-secondary hover:shadow hover:text-primary"
                      onClick={() => removeItem(item)}
                    >
                      <IoMdClose />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
      <div className="w-full rounded-3xl bg-gray-50 shadow mt-16 flex justify-between p-12">
        <div>
          <p className="font-bold text-xl mb-4">Choose shipping mode</p>
          <div className="flex items-center mb-4 cursor-pointer">
            <input
              checked={delivery == 0}
              id="default-radio-1"
              type="radio"
              value={0}
              name="default-radio"
              onChange={() => setDelivery(0)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:shadow-none focus:outline-none"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-lg font-medium text-gray-900 "
            >
              Vera Delivery | 2-4 Days
            </label>
          </div>
          <div className="flex items-center cursor-pointer">
            <input
              checked={delivery == 1}
              id="default-radio-2"
              type="radio"
              value={1}
              name="default-radio"
              onChange={() => setDelivery(1)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:shadow-none focus:outline-none"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Vera Express Delivery | Less than 1 day
            </label>
          </div>
        </div>
        <div className="space-y-4" style={{ width: 400 }}>
          <div className="flex justify-between items-center px-8">
            <span className="font-bold">Total Price :</span>
            <span>
              {getTotal(items)} <sup>Dzd</sup>
            </span>
          </div>
          <div className="flex justify-between items-center px-8">
            <span className="font-bold">Delivery Price :</span>
            <span>
              {delivery == 0 ? 200 : 350} <sup>Dzd</sup>
            </span>
          </div>
          <button className="bg-primary w-full px-8 py-3 text-light flex justify-between items-center">
            <span>Checkout</span>
            <span>
              {getTotal(items) + (delivery == 0 ? 200 : 350)} <sup>Dzd</sup>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Quantity({
  quantity,
  slug,
  updateItem,
}: {
  quantity: number;
  slug: string;
  updateItem: any;
}) {
  const [value, setValue] = useState(quantity);

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  const handleQuantityChange = (
    action: string,
    slug: string,
    quantity: number
  ) => {
    switch (action) {
      case "inc":
        updateItem(slug, quantity + 1);
        setValue(quantity + 1);
        break;

      case "dec":
        if (value > 1) {
          updateItem(slug, quantity - 1);
          setValue(quantity - 1);
        }
        break;

      default:
        break;
    }
  };
  return (
    <div className="flex items-center mt-2 space-x-4">
      <button
        className="px-3 py-1 bg-gray-50 text-dark shadow-sm hover:bg-secondary hover:shadow hover:text-primary"
        onClick={() => handleQuantityChange("dec", slug, value)}
      >
        -
      </button>
      <span>{value}</span>
      <button
        className="px-3 py-1 bg-gray-50 text-dark shadow-sm hover:bg-secondary hover:shadow hover:text-primary"
        onClick={() => handleQuantityChange("inc", slug, value)}
      >
        +
      </button>
    </div>
  );
}

const getTotal = (array: []) => {
  let sum = 0;
  array.map(({ price, quantity }: { price: number; quantity: number }) => {
    sum += price * quantity;
  });
  return sum;
};

export default withCart(Checkout);
