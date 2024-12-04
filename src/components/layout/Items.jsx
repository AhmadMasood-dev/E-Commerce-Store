import { Link } from "react-router-dom";
import useGetProducts from "../../hooks/useGetProducts";
import Spinner from "../../ui/Spinner";
import Button from "../generic/Button";

function Items() {
  const { data: products, isLoading } = useGetProducts("?limit=6");
  if (isLoading) return <Spinner />;
  return (
    <div>
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-primary">
          Our Products
        </h2>

        <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {products.map((product) => {
            const { id, image, price, rating, title } = product;
            return (
              <div key={id} className="">
                <Link to={`/productdetail/${id}`}>
                  <img
                    alt={title}
                    src={image}
                    className="object-contain w-full transition-all duration-300 transform border rounded-md hover:scale-105 lg:h-80"
                  />
                  <div className="flex justify-between mt-4">
                    <p className="text-lg text-gray-700">
                      {title.length > 20 ? `${title.slice(0, 20)}...` : title}
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      ${price}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <Link to="/productdetail">
          <Button
            name="AllProducts → "
            styles={
              "text-white hover:text-dark py-2 px-3 w-36 mt-10  rounded bg-primary hover:bg-secondary transition ease-in-out duration-300 border-1 hover:border-medium border-primary font-semibold text-lg"
            }
          />
        </Link>
      </div>
    </div>
  );
}

export default Items;
