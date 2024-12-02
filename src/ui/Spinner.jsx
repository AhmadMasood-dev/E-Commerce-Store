import { Bars } from "react-loader-spinner";
function Spinner() {
  return (
    <div className="flex justify-center w-full h-full text-center">
      <Bars
        height="100vh"
        width="80"
        color="#E74833"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
