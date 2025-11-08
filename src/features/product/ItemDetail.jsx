import toast from "react-hot-toast";
import Button from "../../components/generic/Button";
import { useCart } from "../../context/CartContext";

import useGetProducts from "../../hooks/useGetProducts";
import Spinner from "../../ui/Spinner";
import { FaStar, FaRegStar } from "react-icons/fa";

function ItemDetail({ id }) {
  const { data, isLoading } = useGetProducts(`/${id}`);
  const { title, image, price, description, rating } = data;
  console.log(data);
  if (isLoading) return <Spinner />;

  const { dispatch } = useCart();
  const addToCartHandler = () => {
    dispatch({
      type: "AddItem",
      payload: {
        id: id, // Use the id passed as a prop
        title: title,
        price: price,
        image: image,
      },
    });
    toast.success("Item added to cart");
  };
  return (
    <section className="h-full overflow-hidden text-dark body-font">
      <div className="container px-5 mx-auto my-5">
        <div className="flex flex-wrap mx-auto text-left lg:w-3/4 h-1/2">
          <img
            alt="ecommerce"
            className="  w-[350px]  h-[400] object-fit  rounded"
            // lg:w-1/2 md:h-1/2
            src={image}
          />
          <div className="flex flex-col w-full gap-10 mt-6 ml-auto lg:w-1/2 lg:py-6">
            <div>
              <h1 className="mb-3 text-xl font-medium text-dark">{title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaRegStar className="w-4 h-4 text-yellow-500" />

                  <span className="ml-3 text-dark">{`${rating.rate} out of 5`}</span>
                </span>
              </div>
            </div>

            <div className="">
              <p className="font-semibold leading-7">Description:</p>
              <p className="mb-5 leading-relaxed">{description}</p>
              <span className="text-2xl font-medium text-dark">${price}</span>
            </div>
            <Button
              name="Add to Cart"
              onClick={addToCartHandler}
              styles="mx-auto w-full text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-light transition duration-300 ease-in-out rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
