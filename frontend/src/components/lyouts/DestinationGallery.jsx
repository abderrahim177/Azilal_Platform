import DestinationCard from "./CardDistination";

const destinations = [
  {
    image: "/public/images/pexels-mographe-30374223.jpg",
  },
  {
    image: "/public/images/pexels-kaeciine-33282224.jpg",
  },
  {
    image: "/public/images/pexels-aysegul-aytoren-46790226-36819950.jpg",
  },
];

export default function DestinationGallery() {
  return (
    <div
      id="destinations"
      className="absolute z-20 right-6 md:right-14
      top-24 bottom-20 hidden md:flex
      items-center gap-3 w-[46%] max-w-[650px]"
    >

      {/* Main Card */}
      <DestinationCard
        {...destinations[0]}
        className="flex-1 h-[78%]"
      />

      {/* Right Cards */}
      <div className="flex flex-col gap-3 w-[32%] h-[92%]">

        <DestinationCard
          {...destinations[1]}
          className="flex-1"
        />

        <DestinationCard
          {...destinations[2]}
          className="flex-1"
        />

      </div>

    </div>
  );
}