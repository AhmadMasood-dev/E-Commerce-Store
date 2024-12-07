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
  };
  return (
    <section class="text-dark body-font overflow-hidden h-full">
      <div class="container px-5 my-5 mx-auto">
        <div class="lg:w-3/4 mx-auto flex flex-wrap text-left h-1/2">
          <img
            alt="ecommerce"
            class="  w-[350px]  h-[400] object-fit  rounded"
            // lg:w-1/2 md:h-1/2
            src={image}
          />
          <div class="lg:w-1/2 w-full  lg:py-6 mt-6 ml-auto gap-10 flex flex-col">
            <div>
              <h1 class="text-dark text-xl  font-medium mb-3">{title}</h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaRegStar className="w-4 h-4 text-yellow-500" />

                  <span class="text-dark ml-3">{`${rating.rate} out of 5`}</span>
                </span>
              </div>
            </div>

            <div class="">
              <p className="font-semibold leading-7">Description:</p>
              <p class="leading-relaxed mb-5">{description}</p>
              <span class=" font-medium text-2xl text-dark">${price}</span>
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
