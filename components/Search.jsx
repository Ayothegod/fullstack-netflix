import Image from "next/image"
import IndMovie from "./IndMovie"


const Search = ({searchData}) => {
  return (
    <div className="fixed top-10 p-4">
        <p>Search Results</p>
        <div className=" grid grid-col-1 sm:grid-col-3 md:grid-cols-4 gap-4">
            {
                searchData.map(data => (
                    <div key={data.title}>
                        {/* <Image/> */}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Search