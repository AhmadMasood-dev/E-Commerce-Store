import { useEffect, useState } from "react";

function useGetProducts(query = "") {
  const baseUrl = "https://fakestoreapi.com/products";
  const url = query ? `${baseUrl}${query}` : baseUrl;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { data, isLoading };
}

export default useGetProducts;
