import Image from "next/image";
import IndMovie from "./IndMovie";

const Search = ({ searchData }) => {
  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";

  return (
    <div className="fixed top-10 p-4">
      <p>Search Results</p>
      <div className=" grid grid-col-1 sm:grid-col-3 md:grid-cols-4 gap-4 ">
        {searchData.map((data) => (
          <div key={data.title} className=" aspect-w-4 aspect-h-4">
            <Image
              src={imgPath + data.poster_path}
              alt={data.title}
              fill
              placeholder="blur"
              blurDataURL="https://placehold.co"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
