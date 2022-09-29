function Card(props){
return(
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.card.planName}</h5>
            <h6 className="card-price text-center">${props.card.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
                {
                    props.card.features.map((item)=>{
                        return<li>{item.name}</li>
                    })
                }
              {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.card.name}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.card.features.name}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.card.features.name2}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.card.features.name3}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.card.features.name4}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.card.features.name5}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.card.features.name6}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.card.features.name7}</li> */}
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
            </div>
            </div>
            </div>
);
}
export default Card;