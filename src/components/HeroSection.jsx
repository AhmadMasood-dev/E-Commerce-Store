import Button from "./generic/Button";

function HeroSection() {
  return (
    <div class=" mx-auto backImg bg-[#D4D2D3] py-24">
      {/* <img src="/slider-bg.jpg" alt="" /> */}
      <div className="">
        <div className="flex flex-col gap-4 px-10 pl-36 text-start">
          <h1 className="font-serif font-bold text-7xl text-primary ">
            <span className="">Sale 20% Off</span>
          </h1>
          <h2 className="font-serif text-6xl font-bold text-dark">On</h2>
          <h2 className="mb-5 font-serif text-6xl font-bold text-dark">
            Everything
          </h2>
          <p className="w-1/3 font-serif text-lg leading-relaxed text-dark">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <Button
            name="Shop Now → "
            styles={
              "text-white hover:text-dark py-2 px-3 w-36  rounded bg-primary hover:bg-secondary transition ease-in-out duration-300 border-1 hover:border-medium border-primary font-semibold text-lg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
