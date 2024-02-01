import "./searchItem.css";

const SearchItem = () => {
  return (
   <div className="searchItem">
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/square600/366674996.webp?k=3523315823bcc574d84e0bcf13e6160681491632f3854fd9b58b3010a636b693&o=" 
        alt="" className="siImg" />
        <div className="siDesc">
            <h2 className="siTitle">Tower Street Apartments</h2>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning </span>
            <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today! </span>
        </div>
        <div className="siDetails"> 
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailsTexts">
                <span className="siPrice">$112</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
   </div>
  )
}

export default SearchItem
