import React, { useEffect, useState } from "react";
import { ShoppingBag, Loader2 } from "lucide-react";
import { productApi, categoryApi, IMAGE_BASE_URL } from "../utils/api";

const staticCategories = [
  {
    name: "Elite Silk Collection",
    id: "CAT-STATIC-01",
    products: [
      {
        id: "S-01",
        name: "Heritage Maroon",
        img: "https://media.istockphoto.com/id/1871845292/photo/indian-woman-wear-saris-or-sarees-hung-in-shop-display.jpg?s=612x612&w=0&k=20&c=Y5wt00aYunebppENjePriDezzHmmGTFcodEnQX_aNq8=",
      },
      {
        id: "S-02",
        name: "Zari Golden Gold",
        img: "https://media.istockphoto.com/id/1223153943/photo/close-up-of-indian-woman-sarees-or-saris-in-retail-display.jpg?s=612x612&w=0&k=20&c=-dU-Qa03QyyzxvVRmq5z-SqYIr0KwgYutS7jBa_Xfi8=",
      },
      {
        id: "S-03",
        name: "Royal Purple Silk",
        img: "https://media.istockphoto.com/id/1072577486/photo/crochet-tassel-fashion-designing-works-for-clothing.jpg?s=612x612&w=0&k=20&c=3Cw8xP0TEKrKKzu0L6HKdpicpKx0nXRNJkKC8YqLgOE=",
      },
    ],
  },
  {
    name: "Industrial Poly-Fabrics",
    id: "CAT-STATIC-02",
    products: [
      {
        id: "I-01",
        name: "Deep Blue Tech",
        img: "https://media.istockphoto.com/id/510685478/photo/traditional-blankets.jpg?s=612x612&w=0&k=20&c=pfrhzJ4QWG2-0SKXwZdFBHbZojm-1c2GwSyBsf_v8gQ=",
      },
      {
        id: "I-02",
        name: "Reinforced Grey",
        img: "https://media.istockphoto.com/id/485112904/photo/antique-asian-textile.jpg?s=612x612&w=0&k=20&c=7BVSZkiNwB635F2LCaxbVWFE570UvjyJckCq6gNxPaE=",
      },
    ],
  },
];

const ProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const siteId = "ParekhSouthernPolyfabrics03";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [catRes, prodRes] = await Promise.all([
          categoryApi.getAll(siteId).catch(() => null),
          productApi.getAll(siteId).catch(() => null),
        ]);

        let finalData = [];

        if (
          catRes?.data?.success &&
          prodRes?.data?.success &&
          catRes.data.data.length > 0 &&
          prodRes.data.data.length > 0
        ) {
          const apiCats = catRes.data.data;
          const allProducts = prodRes.data.data;

          finalData = apiCats
            .map((cat) => ({
              name: cat.name,
              id: cat._id,
              products: allProducts
                .filter((p) => p.category === cat.name)
                .map((p) => ({
                  id: p._id,
                  name: p.title || p.name,
                  img:
                    p.imageUrl ||
                    (p.image
                      ? `${IMAGE_BASE_URL}/${p.image}`
                      : "https://via.placeholder.com/300"),
                })),
            }))
            .filter((c) => c.products.length > 0);
        }

        // 🔥 FINAL DECISION LOGIC
        if (finalData.length > 0) {
          setCategories(finalData);
          setFilters(["All", ...finalData.map((c) => c.name)]);
        } else {
          setCategories(staticCategories);
          setFilters(["All", ...staticCategories.map((c) => c.name)]);
        }
      } catch (err) {
        console.log("API Failed → Using Static");
        setCategories(staticCategories);
        setFilters(["All", ...staticCategories.map((c) => c.name)]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const displayed =
    activeFilter === "All"
      ? categories
      : categories.filter(
        (c) => c.name.toLowerCase() === activeFilter.toLowerCase()
      );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="animate-spin text-[#800000]" size={40} />
        <p className="text-gray-400 mt-2 text-sm">Loading Products...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#800000] font-bold uppercase">
              Parekh Southern Polyfabrics
            </p>
            <h1 className="text-2xl md:text-5xl font-black text-[#2d0a4e]">
              Catalogue
            </h1>
          </div>

          <div className="bg-[#2d0a4e] text-white px-5 py-2 rounded-full flex items-center gap-2">
            <ShoppingBag size={16} />
            <span className="text-xs font-bold">
              {categories.reduce((a, c) => a + c.products.length, 0)} Products
            </span>
          </div>
        </div>

        {/* FILTER */}
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar w-full max-w-full">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-xs md:text-sm rounded-full border whitespace-nowrap
                ${activeFilter === f
                  ? "bg-[#800000] text-white border-[#800000]"
                  : "bg-white text-gray-600 border-gray-200"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        {displayed.map((cat) => (
          <div key={cat.id} className="mb-12">
            <h2 className="text-lg md:text-xl font-bold text-[#2d0a4e] mb-4">
              {cat.name}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {cat.products.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition"
                >
                  <div className="h-[180px] sm:h-[220px] md:h-[240px] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover hover:scale-105 transition"
                    />
                  </div>

                  <div className="p-3 text-center">
                    <p className="text-[10px] text-gray-400">ID: {p.id.slice(-5)}</p>
                    <h3 className="text-sm md:text-base font-semibold text-[#2d0a4e] line-clamp-2">
                      {p.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {displayed.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;