import React, { Component } from 'react'
import Newsiteam from './Newsiteam'
import PropTypes from 'prop-types'


export default class Newshome extends Component {
    static defaultProps ={
        contry:"in",
        pagesize: 8,
        category:"sport"
    }
    static propTypes = {
        contry:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string
    }
    art =[ ]
    constructor()
    {
        super();
        
        this.art = [];
        this.state = {
            art:this.art,
            loding:false,
            page:1
        }
    }
    async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=b745d938890540eb8b3f0a788966644b&page=1&pagesize=${this.props.pagesize}`;
        this.setState({loding : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({art : parsedData.articles, 
            totalresult: parsedData.totalResults,
            loding:false})

    }
    handalnextclick =async ()=> {

            let url =`https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=b745d938890540eb8b3f0a788966644b&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
            this.setState({loding : true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                 page: this.state.page + 1,
                art : parsedData.articles,
                loding : false
            })
    }
    handalprevclick =async ()=>{

        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=b745d938890540eb8b3f0a788966644b&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
        this.setState({loding : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            art : parsedData.articles,
            loding : false
        })
    }
  render() {
    return (
      <div className="container my-3">
            <h2 className="text-center">Top News </h2>
            {this.state.loding && <div className="text-center">
                <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" title="loding" className="giphy-embed" allowFullScreen></iframe>
            </div>}
            <div className="row">
            { !this.state.loding &&
                this.state.art.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <Newsiteam titale={element.title ?element.title:""} disc={element.description?element.description:""} imgurl={element.urlToImage} readmore={element.url} auther={element.author} date={element.publishedAt}/>
                </div>
            })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark"onClick={this.handalprevclick}>&larr; Previous</button>
            <button disabled={(this.state.page + 1) > Math.ceil(this.state.totalresult/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handalnextclick}>Next &rarr;</button>
            </div>
      </div>
    )
  }
}
