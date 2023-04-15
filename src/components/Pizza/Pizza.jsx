import React,{useState} from 'react'


const Pizza = ({ pizza }) => {
  const {name, img_url,description,isVeg, rating,price} = pizza
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler =(e)=>{
  e.preventDefault();
  setIsVisible(!isVisible);
  }
  return (
    <>
      <div>
        <h2>{name}</h2>
        <img src={img_url} alt="" width="200px" height="200px" />
        <p>{description}</p>
        <div className="isveg">
          <div className={`type ${isVeg ? "veg" : "non-veg"}`}></div>
          <span>{isVeg ? "VEG" : "NON-VEG"}</span>
        </div>
        <h3>Price : ₹{price}</h3>
        <button onClick={clickHandler}>ADD</button>
      </div>
    </>
  );
}

export default Pizza