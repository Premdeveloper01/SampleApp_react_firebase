import React, { Component } from 'react';

class PropertyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: this.props.details,
        };
    }

    componentWillMount() {
        localStorage.setItem('mlsId', this.props.match.params.id);
    }

    componentDidMount() {
        this.props.fetchDetails(this.props.match.params.id);
    }

    detailview = ({ details }) => {
        if (details) {
            return (
                <div>
                    <center>
                        <h1>{details.address.crossStreet.toUpperCase()}</h1>
                    </center>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={details.photos[0]} alt="details" />
                        </div>
                        <div className="col-md-6">
                            <br />
                            <p className="side_text">{details.privateRemarks}</p>
                            <i className="fa fa-city"></i> {details.address.city}   &nbsp;&nbsp;&nbsp;
                            <i className="far fa-flag"></i> {details.address.country}<br />
                            <i className="fas fa-dollar-sign"></i> {details.listPrice}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                           <div className="div_padding"><i className="fas fa-building"></i>   {details.property.stories} &nbsp;&nbsp;&nbsp;</div> 
                        <div className="div_padding"><i className="fas fa-bed"></i>   {details.property.bedrooms} &nbsp;&nbsp;&nbsp;</div>
                       <div className="div_padding"><i className="fa fa-bath"></i> {details.property.bathsFull} &nbsp;&nbsp;&nbsp;</div> 

                      <div className="div_padding"> <i className="fa fa-toilet"></i> {details.property.bathsHalf} &nbsp;&nbsp;&nbsp;</div>  
                       <div className="div_padding"> <i className="fas fa-school"></i>   {details.school.highSchool} &nbsp;&nbsp;&nbsp;</div> 
                        <br />
                           
                       <div className="div_padding"> MLSID:   {details.mlsId} &nbsp;&nbsp;&nbsp;</div> <i className="fa fa-calendar"></i>   {details.listDate}
                            <br />
                          <div  className="div_padding"> <i className="fas fa-school"></i>   {details.school.highSchool} &nbsp;&nbsp;&nbsp;</div>  
                       <div className="div_padding"> <i className="fa fa-handshake"></i> {details.agreement}   &nbsp;&nbsp;&nbsp;</div> 
                       <div className="div_padding"> <i className="fas fa-male"></i> {details.agent.firstName} &nbsp;&nbsp;&nbsp;</div> 
                        <div className="div_padding"><i className="fas fa-shopping-cart"></i> {details.geo.marketArea} &nbsp;&nbsp;&nbsp;</div>
                      <div className="div_padding"><i className="fa fa-money"></i> {details.association.fee}</div>  
                            <hr />
                            <br />
                        </div>
                    </div>
                    <hr />
                    <p>**{details.disclaimer}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.detailview(this.props)}
            </div>
        );
    }
}

export default PropertyDetail;