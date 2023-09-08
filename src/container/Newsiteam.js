import React, { Component } from 'react'

export default class Newsiteam extends Component {
    
    render() {
        let {titale,disc,imgurl,readmore,auther,date} = this.props;
        return (
      <div className="my-3">
        <div className="card">
            <img src={imgurl?imgurl:"https://images.moneycontrol.com/static-mcnews/2017/08/Electricity-770x433.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{titale}</h5>
                <p className="card-text">{disc}</p>
                <p className="card-text"><small className="text-body-secondary">by {!auther ? "Unknow":auther} on {new Date(date).toGMTString()}</small></p>
                <a href={readmore}  target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}
