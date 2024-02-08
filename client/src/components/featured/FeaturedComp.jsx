import "./featured.css"
import useFetch from "../../hooks/useFetch";

const Featured = () => {

  const {data, loading, error} = useFetch("hotels/countByCity?cities=Kasol,Kashmir,Manali");
  // console.log(data);

  return (

    <div className="featured">
      {loading 
        ?("Loading please wait") 
        :( 
      <>
      <div className="featuredItem">
        <img
         src="https://upload.wikimedia.org/wikipedia/commons/3/34/Parvati_Valley_river_kasol.jpg" alt="kasol img" className="featuredImg"/>
        <div className="featuredTitle">
          <h1>Kasol</h1>
          {/* set data from  API here */}
          <h2>{data[0]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Dal_Lake_Hazratbal_Srinagar.jpg" alt="kasol img" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Kashmir</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/f/fc/BeachFun.jpg" alt="kasol img" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Manali</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>

      {/* <div className="featuredItem">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Shyok_river_Ladakh.jpg" alt="kasol img" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Ladakh</h1>
          <h2>80 properties</h2>
        </div>
      </div>  */}
      
      </>)
      }
    </div>
  )
}

export default Featured
