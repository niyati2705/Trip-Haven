import "./featured.css"
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
         src="https://upload.wikimedia.org/wikipedia/commons/3/34/Parvati_Valley_river_kasol.jpg" alt="kasol img" className="featuredImg"/>
        <div className="featuredTitle">
          <h1>Kasol</h1>
          <h2>100 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Dal_Lake_Hazratbal_Srinagar.jpg" alt="kasol img" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Kashmir</h1>
          <h2>150 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/f/fc/BeachFun.jpg" alt="kasol img" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Goa</h1>
          <h2>100 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Shyok_river_Ladakh.jpg" alt="kasol img" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Ladakh</h1>
          <h2>80 properties</h2>
        </div>
      </div>
      
    </div>
  )
}

export default Featured
