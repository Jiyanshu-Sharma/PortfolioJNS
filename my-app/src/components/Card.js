import './Styles/Card.css'
function Card(props){
    return(
      <div>
        <div className="card">
            <div className="card-icon">
                <img src={props.icon} alt="" />
            </div>
              <div className="card-head">
                <h1>{props.heading}</h1>
              </div>
              <div className="card-description">{props.description}</div>
              <div className="card-link"><a href="google.com">
                  <p>{props.link}</p>
                </a></div>

          </div>
      </div>
    );
}
export default Card;