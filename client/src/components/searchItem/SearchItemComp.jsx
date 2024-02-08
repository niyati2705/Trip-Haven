import "./searchItem.css";
import {Link} from "react-router-dom";

const SearchItem = ({item}) => { 
  return (
   <div className="searchItem">
        <img 
        src={item.photos[0]}
        // src="https://cf.bstatic.com/xdata/images/hotel/square600/366674996.webp?k=3523315823bcc574d84e0bcf13e6160681491632f3854fd9b58b3010a636b693&o=" 
        alt="" className="siImg" />
        <div className="siDesc">
            <h2 className="siTitle">{item.name}</h2>
            {/* <span className="siDistance">500m from center</span> */}
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning </span>
            <span className="siFeatures">
                {item.desc}
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today! </span>
        </div>
        <div className="siDetails"> 
            {item.rating && <div className="siRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailsTexts">
                <span className="siPrice">Rs.{item.cheapestPrice}</span>
                <span className="siTaxOp">Includes taxes and fees</span>

                <Link to={`/hotels/${item._id}`}>
                <button className="siCheckButton">See availability</button>
                </Link>
            </div>
        </div>
   </div>
  )
}

export default SearchItem
