import React from 'react'

import {Link} from 'react-router-dom'

const Card=(props)=>{


    return(
        <>
        <div className="col-md-4 col-10 mx-auto">
                    <div class="card" >
       <img src={props.imgsrc}
        className="card-img-top"
         alt="..."/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">
    Some quick example text to build on the
     card title and make up the bulk of the card's content.</p>
     <Link   to={{pathname:"https://en.wikipedia.org/wiki/Web_development"}} target="_blank"  className="btn btn-outline-primary">Learn More</Link>

  </div>
  </div>
 </div>
 </>
    )

}
export default Card