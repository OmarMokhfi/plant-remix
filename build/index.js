var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Aures\Documents\work\playground\plant-remix\app\root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/providers/CartProvider.js
var import_react2 = require("react"), CartContext = (0, import_react2.createContext)();
function CartProvider({ children }) {
  let [items, setItems] = (0, import_react2.useState)(/* @__PURE__ */ new Map()), [total, setTotal] = (0, import_react2.useState)(0), addItem = (item) => {
    items.has(item.slug) ? setItems(items.set(item.slug, __spreadValues({}, item))) : (setItems(items.set(item.slug, item)), setTotal(total + 1));
  }, removeItem = (item) => {
    if (items.get(item.slug)) {
      let temp = items;
      temp.delete(item.slug), setItems(temp), setTotal(total - 1);
    }
  }, updateItem = (slug, quantity) => {
    items.has(slug) && setItems(items.set(slug, __spreadProps(__spreadValues({}, items.get(slug)), { quantity })));
  };
  return /* @__PURE__ */ React.createElement(CartContext.Provider, {
    value: {
      total,
      items: Array.from(items.values()),
      addItem,
      updateItem,
      removeItem
    }
  }, children);
}
function withCart(Component) {
  return function(props) {
    return /* @__PURE__ */ React.createElement(CartContext.Consumer, null, (contexts) => /* @__PURE__ */ React.createElement(Component, __spreadValues(__spreadValues({}, props), contexts)));
  };
}

// app/styles/app.css
var app_default = "/build/_assets/app-VOO55ZXI.css";

// app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-5YSNTKYX.css";

// app/layouts/Navbar.tsx
var import_react3 = require("@remix-run/react"), import_Bi = require("react-icons/Bi"), import_Ai = require("react-icons/Ai");
function Navbar({ total }) {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "z-100 container mx-auto flex items-center justify-between bg-white px-8 py-6 shadow md:bg-transparent md:py-12 md:shadow-none"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "logo text-xl font-medium"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-serif"
  }, "Vera Verto."))), /* @__PURE__ */ React.createElement("div", {
    className: "navbar-nav hidden space-x-10 md:flex"
  }, [
    {
      label: "Plants",
      url: "/plants"
    },
    {
      label: "Decoration",
      url: "/decoration"
    },
    {
      label: "Blog",
      url: "/blog"
    }
  ].map((link, index) => /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    key: index,
    to: link.url,
    className: "navlink"
  }, /* @__PURE__ */ React.createElement("span", null, link.label)))), /* @__PURE__ */ React.createElement("div", {
    className: "extra flex items-center space-x-5 sm:space-x-8"
  }, /* @__PURE__ */ React.createElement("a", null, "Login"), /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/checkout"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "cart",
    "data-cart": total
  }, /* @__PURE__ */ React.createElement(import_Ai.AiTwotoneShopping, {
    size: 24
  }))), /* @__PURE__ */ React.createElement(import_Bi.BiMenuAltRight, {
    size: 24
  })), /* @__PURE__ */ React.createElement("style", null, `
        .cart {
          position: relative;
        }
        .cart:after {
          content: attr(data-cart);
          background-color: red;
          width: 22px;
          height: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          border-radius: 50%;
          position: absolute;
          right: 0;
          top: 0;
          transform: translateX(50%) translateY(-50%);
        }
        `));
}
var Navbar_default = withCart(Navbar);

// route:C:\Users\Aures\Documents\work\playground\plant-remix\app\root.tsx
function links() {
  return [
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: fonts_default }
  ];
}
var meta = () => ({
  charset: "utf-8",
  title: "Vera Verto | Plants for better interior",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)));
}
function Document({ children }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(CartProvider, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("main", {
    className: "min-h-wrapper pb-24"
  }, children));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "text-red-500"
  }, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message))));
}

// route:C:\Users\Aures\Documents\work\playground\plant-remix\app\routes\plants\$productId.tsx
var productId_exports = {};
__export(productId_exports, {
  default: () => productId_default,
  loader: () => loader
});
var import_react5 = require("react"), import_node = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_ai = require("react-icons/ai");

// app/utils/client.js
var import_graphql_request = require("graphql-request"), BACKEND_URL = process.env.GRAPHCMS_API || "https://api-eu-central-1.graphcms.com/v2/cl52w2x0x2jfp01ugeue2hw1b/master", graphcms = new import_graphql_request.GraphQLClient(BACKEND_URL);

// app/utils/queries.js
var import_graphql_request2 = require("graphql-request"), GetPlantsQuery = import_graphql_request2.gql`
  {
    plants {
      slug
      title
      description
      price
      images {
        id
        fileName
        url
      }
    }
  }
`, GetLatestPlantsQuery = import_graphql_request2.gql`
  {
    plants(first: 3) {
      slug
      title
      description
      images {
        id
        fileName
        url
      }
    }
  }
`, GetPlantBySlug = import_graphql_request2.gql`
  query PlantPageQuery($slug: String!) {
    plant(where: { slug: $slug }) {
      title
      description
      price
      slug
      images {
        id
        fileName
        url
      }
    }
  }
`;

// route:C:\Users\Aures\Documents\work\playground\plant-remix\app\routes\plants\$productId.tsx
var loader = async ({ params }) => {
  let { plant } = await graphcms.request(GetPlantBySlug, {
    slug: params.productId
  });
  return (0, import_node.json)({ plant });
};
function ProductRoute(props) {
  let { plant } = (0, import_react6.useLoaderData)(), [quantity, setQuantity] = (0, import_react5.useState)(1), [image, setImage] = (0, import_react5.useState)({ url: "" });
  (0, import_react5.useEffect)(() => {
    plant && setImage(plant.images[0]);
  }, [plant]);
  let handleQuantityChange = (action) => {
    switch (action) {
      case "inc":
        setQuantity(quantity + 1);
        break;
      case "dec":
        quantity > 1 && setQuantity(quantity - 1);
        break;
      default:
        break;
    }
  }, handleImageChange = (target) => {
    setImage(target);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "container px-8 mx-auto mt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 space-y-5"
  }, plant == null ? void 0 : plant.images.map((img) => /* @__PURE__ */ React.createElement("div", {
    className: `shadow-sm rounded-3xl p-12 cursor-pointer ${img.url == image.url ? "border-2 border-green-500" : ""}`,
    key: img.url,
    onClick: () => handleImageChange(img),
    style: {
      width: 150,
      height: 150,
      backgroundImage: `url(${img.url})`,
      backgroundSize: "cover"
    }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "w-fit"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden rounded-3xl w-fit shadow-sm"
  }, /* @__PURE__ */ React.createElement("img", {
    src: image == null ? void 0 : image.url,
    alt: plant == null ? void 0 : plant.description,
    style: { width: 700 }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "w-6/12 flex flex-col px-16 py-4 space-y-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-3"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-xl"
  }, "Indoor Plants"), /* @__PURE__ */ React.createElement("h1", {
    className: "font-serif text-6xl"
  }, plant == null ? void 0 : plant.title, " "), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("sup", null, "Dzd"), " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-4xl"
  }, plant == null ? void 0 : plant.price))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "font-semibold"
  }, "Description"), /* @__PURE__ */ React.createElement("hr", {
    className: "w-2/3 mt-2 border-t-2 border-gray-300"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-gray-700"
  }, plant == null ? void 0 : plant.description)), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-3"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "font-semibold"
  }, "Select Quantity"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center mt-2 space-x-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "px-4 py-2 bg-primary text-light hover:bg-secondary hover:shadow hover:text-primary",
    onClick: () => handleQuantityChange("dec")
  }, "-"), /* @__PURE__ */ React.createElement("span", null, quantity), /* @__PURE__ */ React.createElement("button", {
    className: "px-4 py-2 bg-primary text-light hover:bg-secondary hover:shadow hover:text-primary",
    onClick: () => handleQuantityChange("inc")
  }, "+"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-primary text-light px-16 py-4 flex space-x-4 items-center justify-center w-fit",
    onClick: () => props.addItem(__spreadProps(__spreadValues({}, plant), { quantity }))
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(import_ai.AiTwotoneShopping, {
    size: 18
  })), /* @__PURE__ */ React.createElement("span", {
    className: "uppercase"
  }, "Add to Cart")))))));
}
var productId_default = withCart(ProductRoute);

// route:C:\Users\Aures\Documents\work\playground\plant-remix\app\routes\decoration\index.tsx
var decoration_exports = {};
__export(decoration_exports, {
  default: () => decoration_default
});
function DecorationsIndexRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-8 mt-8"
  }, /* @__PURE__ */ React.createElement("h1", null, "Decoration Page"), /* @__PURE__ */ React.createElement("p", null, "List of decorations"));
}
var decoration_default = DecorationsIndexRoute;

// route:C:\Users\Aures\Documents\work\playground\plant-remix\app\routes\plants\index.tsx
var plants_exports = {};
__export(plants_exports, {
  default: () => plants_default,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_react8 = require("@remix-run/react"), import_ri = require("react-icons/ri"), import_ai2 = require("react-icons/ai"), import_react9 = require("react");
var loader2 = async () => {
  let { plants } = await graphcms.request(GetPlantsQuery);
  return (0, import_node2.json)(plants);
};
function PlantsIndexRoute() {
  let products = (0, import_react7.useLoaderData)(), [filter, setFilter] = (0, import_react9.useState)("");
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-8 mt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex rounded-3xl",
    style: {
      backgroundColor: "#ddecee",
      backgroundImage: "url(/images/cover.png)",
      backgroundSize: "contain",
      backgroundPositionX: "right",
      backgroundRepeat: "no-repeat"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-5/12 px-12 py-16"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-serif"
  }, /* @__PURE__ */ React.createElement("span", null, "Fresh Green."), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Fresh & Beautiful Interior.")), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-gray-500"
  }, "VeraVerto is the best place to make your home healthy and beautiful, and put yourself in an environment of chill and relax."), /* @__PURE__ */ React.createElement("div", {
    className: "w-full relative h-fit"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    onChange: (e) => setFilter(e.target.value),
    placeholder: "What kind of plant you want ?",
    className: "focus:outline-none focus:shadow-none shadow-sm rounded-xl w-full px-8 py-6 mt-6"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "p-3 rounded-full absolute top-10 right-8 bg-primary"
  }, /* @__PURE__ */ React.createElement(import_ri.RiSearchLine, {
    size: 16,
    color: "white"
  }))))), /* @__PURE__ */ React.createElement("ul", {
    className: "mt-24 flex justify-between"
  }, products.map((product) => /* @__PURE__ */ React.createElement(React.Fragment, null, (!filter || product.title.toLowerCase().includes(filter.toLowerCase())) && /* @__PURE__ */ React.createElement("li", {
    key: product.slug
  }, /* @__PURE__ */ React.createElement(ProductCard, {
    product
  }))))));
}
function ProductCard({ product }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "rounded-xl shadow w-fit relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-xl overflow-hidden",
    style: { height: 350 }
  }, /* @__PURE__ */ React.createElement("img", {
    src: product.images[1] ? product.images[1].url : product.images[0].url,
    alt: product.description,
    width: 250
  })), /* @__PURE__ */ React.createElement("div", {
    className: "rounded-tr-3xl rounded-tl-3xl bg-light absolute bottom-0 w-full shadow-sm p-4 space-y-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: `/plants/${product.slug}`
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-primary"
  }, product.title)), /* @__PURE__ */ React.createElement("p", null, product.description.substr(0, 22), "...")), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, product.price, " dzd"), /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: `/plants/${product.slug}`
  }, /* @__PURE__ */ React.createElement("button", {
    className: "w-8 h-8 bg-primary rounded-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement(import_ai2.AiOutlinePlus, {
    size: 18,
    color: "white"
  }))))));
}
var plants_default = PlantsIndexRoute;

// route:C:\Users\Aures\Documents\work\playground\plant-remix\app\routes\checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => checkout_default
});
var import_io = require("react-icons/io"), import_react10 = require("react");
function Checkout(props) {
  let { total, items, updateItem, removeItem } = props, [delivery, setDelivery] = (0, import_react10.useState)(0);
  return total == 0 ? /* @__PURE__ */ React.createElement("div", {
    className: "container px-8 mx-auto mt-8"
  }, /* @__PURE__ */ React.createElement("p", null, "Cart is empty")) : /* @__PURE__ */ React.createElement("div", {
    className: "container px-8 mx-auto mt-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-serif text-7xl"
  }, "My Cart (", total, ")"), total > 0 && /* @__PURE__ */ React.createElement("table", {
    className: "table-auto w-full border-separate border-spacing-2 mt-10"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "py-2 border-b border-gray-300"
  }, /* @__PURE__ */ React.createElement("tr", {
    className: "text-left text-base text-gray-600"
  }, /* @__PURE__ */ React.createElement("th", null), /* @__PURE__ */ React.createElement("th", null, "Product"), /* @__PURE__ */ React.createElement("th", null, "Price"), /* @__PURE__ */ React.createElement("th", null, "Quantity"), /* @__PURE__ */ React.createElement("th", null, "Total"), /* @__PURE__ */ React.createElement("th", null))), /* @__PURE__ */ React.createElement("tbody", null, items.map((item) => /* @__PURE__ */ React.createElement("tr", {
    key: item.slug + item.quantity
  }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: 100,
      height: 100,
      backgroundImage: `url(${item.images[0].url})`,
      backgroundSize: "cover"
    }
  })), /* @__PURE__ */ React.createElement("td", null, item.title), /* @__PURE__ */ React.createElement("td", null, item.price, " ", /* @__PURE__ */ React.createElement("sup", null, "Dzd")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Quantity, {
    quantity: item.quantity,
    slug: item.slug,
    updateItem: (slug, quantity) => updateItem(slug, quantity)
  })), /* @__PURE__ */ React.createElement("td", null, item.price * item.quantity, /* @__PURE__ */ React.createElement("sup", null, "Dzd")), /* @__PURE__ */ React.createElement("td", {
    className: "flex justify-end py-7"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "px-2 py-2 bg-gray-50 text-dark shadow hover:bg-secondary hover:shadow hover:text-primary",
    onClick: () => removeItem(item)
  }, /* @__PURE__ */ React.createElement(import_io.IoMdClose, null))))))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full rounded-3xl bg-gray-50 shadow mt-16 flex justify-between p-12"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "font-bold text-xl mb-4"
  }, "Choose shipping mode"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center mb-4 cursor-pointer"
  }, /* @__PURE__ */ React.createElement("input", {
    checked: delivery == 0,
    id: "default-radio-1",
    type: "radio",
    value: 0,
    name: "default-radio",
    onChange: () => setDelivery(0),
    className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:shadow-none focus:outline-none"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "default-radio-1",
    className: "ml-2 text-lg font-medium text-gray-900 "
  }, "Vera Delivery | 2-4 Days")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center cursor-pointer"
  }, /* @__PURE__ */ React.createElement("input", {
    checked: delivery == 1,
    id: "default-radio-2",
    type: "radio",
    value: 1,
    name: "default-radio",
    onChange: () => setDelivery(1),
    className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:shadow-none focus:outline-none"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "default-radio-2",
    className: "ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
  }, "Vera Express Delivery | Less than 1 day"))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4",
    style: { width: 400 }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center px-8"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "Total Price :"), /* @__PURE__ */ React.createElement("span", null, getTotal(items), " ", /* @__PURE__ */ React.createElement("sup", null, "Dzd"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center px-8"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "Delivery Price :"), /* @__PURE__ */ React.createElement("span", null, delivery == 0 ? 200 : 350, " ", /* @__PURE__ */ React.createElement("sup", null, "Dzd"))), /* @__PURE__ */ React.createElement("button", {
    className: "bg-primary w-full px-8 py-3 text-light flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement("span", null, "Checkout"), /* @__PURE__ */ React.createElement("span", null, getTotal(items) + (delivery == 0 ? 200 : 350), " ", /* @__PURE__ */ React.createElement("sup", null, "Dzd"))))));
}
function Quantity({
  quantity,
  slug,
  updateItem
}) {
  let [value, setValue] = (0, import_react10.useState)(quantity);
  (0, import_react10.useEffect)(() => {
    setValue(quantity);
  }, [quantity]);
  let handleQuantityChange = (action, slug2, quantity2) => {
    switch (action) {
      case "inc":
        updateItem(slug2, quantity2 + 1), setValue(quantity2 + 1);
        break;
      case "dec":
        value > 1 && (updateItem(slug2, quantity2 - 1), setValue(quantity2 - 1));
        break;
      default:
        break;
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center mt-2 space-x-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "px-3 py-1 bg-gray-50 text-dark shadow-sm hover:bg-secondary hover:shadow hover:text-primary",
    onClick: () => handleQuantityChange("dec", slug, value)
  }, "-"), /* @__PURE__ */ React.createElement("span", null, value), /* @__PURE__ */ React.createElement("button", {
    className: "px-3 py-1 bg-gray-50 text-dark shadow-sm hover:bg-secondary hover:shadow hover:text-primary",
    onClick: () => handleQuantityChange("inc", slug, value)
  }, "+"));
}
var getTotal = (array) => {
  let sum = 0;
  return array.map(({ price, quantity }) => {
    sum += price * quantity;
  }), sum;
}, checkout_default = withCart(Checkout);

// route:C:\Users\Aures\Documents\work\playground\plant-remix\app\routes\contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default
});
function Contact() {
  return /* @__PURE__ */ React.createElement("div", null, "Contact");
}
var contact_default = Contact;

// route:C:\Users\Aures\Documents\work\playground\plant-remix\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader3
});
var import_react11 = require("@remix-run/react"), import_ai3 = require("react-icons/ai"), import_node3 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var loader3 = async () => {
  let { plants } = await graphcms.request(GetLatestPlantsQuery);
  return (0, import_node3.json)(plants);
};
function Index() {
  let products = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container px-8 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex items-center border border-gray-200"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-5/12",
    style: {
      height: 700,
      backgroundImage: "url(https://images.pexels.com/photos/4065905/pexels-photo-4065905.jpeg?auto=compress&cs=tinysrgb&w=1600)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-5/12 px-6 space-y-6"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-serif text-9xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "-ml-40"
  }, "Plants Make"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "Life Better")), /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl px-12"
  }, "Plants reduce stress and improve your mood, so they are ideal for use at home and in workplace"), /* @__PURE__ */ React.createElement(import_react11.Link, {
    to: "/plants",
    className: "bg-primary text-light px-8 py-4 ml-12 flex space-x-4 items-center justify-center w-fit"
  }, /* @__PURE__ */ React.createElement("span", null, "Shop Now"), " ", /* @__PURE__ */ React.createElement(import_ai3.AiOutlineRise, {
    color: "rgb(90, 233, 145)",
    size: 18
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "w-2/12 border-l border-gray-200 flex flex-col justify-center items-center space-y-12",
    style: { height: 700 }
  }, products.map((product) => /* @__PURE__ */ React.createElement(import_react11.Link, {
    to: `/plants/${product.slug}`,
    key: product.slug
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-32 h-40 border border-gray-300 rounded-tr-full rounded-tl-full",
    style: {
      backgroundImage: `url(${product.images[0].url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  }, /* @__PURE__ */ React.createElement("button", {
    className: "w-8 h-8 bg-primary rounded-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement(import_ai3.AiOutlinePlus, {
    size: 18,
    color: "white"
  }))))))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex items-center border-l border-r border-b border-gray-200"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-8/12 py-12"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-5xl font-serif"
  }, "We will ship everything to your home, so you concentrate on pleasing your taste")), /* @__PURE__ */ React.createElement("div", {
    className: "w-2/12"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      height: 250,
      width: 200,
      backgroundImage: "url(https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=1600)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain"
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-2/12"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      aspectRatio: "1 / 1.5",
      height: "auto",
      width: "100%",
      backgroundImage: "url(https://images.pexels.com/photos/1877920/pexels-photo-1877920.jpeg?auto=compress&cs=tinysrgb&w=1600)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }))));
}

// route:C:\Users\Aures\Documents\work\playground\plant-remix\app\routes\blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default
});
function Blog() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-8 mt-8"
  }, "Blog");
}
var blog_default = Blog;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "422d2978", entry: { module: "/build/entry.client-UAEIK5IM.js", imports: ["/build/_shared/chunk-3SCSSJUP.js", "/build/_shared/chunk-O6YYFGCX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FYZYYOWI.js", imports: ["/build/_shared/chunk-AQHFLH35.js", "/build/_shared/chunk-566IOVAK.js", "/build/_shared/chunk-AFGZOGTR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-LSQZLOXY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-IMNASP57.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-CCXQZSAT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/decoration/index": { id: "routes/decoration/index", parentId: "root", path: "decoration", index: !0, caseSensitive: void 0, module: "/build/routes/decoration/index-J2T2EUE3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-EAKRIVXR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/plants/$productId": { id: "routes/plants/$productId", parentId: "root", path: "plants/:productId", index: void 0, caseSensitive: void 0, module: "/build/routes/plants/$productId-TMBFCXDI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/plants/index": { id: "routes/plants/index", parentId: "root", path: "plants", index: !0, caseSensitive: void 0, module: "/build/routes/plants/index-6QSVW6DL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-422D2978.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/plants/$productId": {
    id: "routes/plants/$productId",
    parentId: "root",
    path: "plants/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports
  },
  "routes/decoration/index": {
    id: "routes/decoration/index",
    parentId: "root",
    path: "decoration",
    index: !0,
    caseSensitive: void 0,
    module: decoration_exports
  },
  "routes/plants/index": {
    id: "routes/plants/index",
    parentId: "root",
    path: "plants",
    index: !0,
    caseSensitive: void 0,
    module: plants_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
