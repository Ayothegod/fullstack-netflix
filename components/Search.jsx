

const Search = ({searchData}) => {
  return (
    <div className="fixed top-20">
        <p>Search Results</p>
        <div className="grid grid-cols-2 gap-8">
            {
                searchData.map(data => (
                    <div key={data.title}>
                        <p>{data.title}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Search