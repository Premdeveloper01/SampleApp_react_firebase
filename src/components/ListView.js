import React from 'react';
import JSON from '../config/sliderImage.json';
// Component
import CardView from './CardView';
import Gallery from './MainSlider';

class ListView extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imgList: JSON,
            search:''    //search variable added here
        };
    }
    onChangeEvent=e=>{
        this.setState({search:e.target.value})  // event handler for the search property
    }

    UNSAFE_componentWillMount() {   //the method has been changes in this verison of react@16.12.0
        const Uid = Math.floor(Math.random() * 100000);
        localStorage.setItem('userId', Uid)
        localStorage.getItem('userId') ? localStorage.getItem('userId') : localStorage.setItem('userId', Uid)
    }

    componentDidMount() {
        this.props.fetchProperty();
    }
    render() {
        const { list } = this.props; //list of properties which are coming from api backend
        const { search }=this.state;  //search functinality here
        const filterList=list.filter(item=>item.address.crossStreet.toLowerCase().indexOf(search.toLowerCase())!==-1); //here we are filtering the list of properties according to the search term
        return (
            <div>
               <br/>
                <Gallery listImage={this.state.imgList}></Gallery>
                <br />
                <input type="text" name="search" icon="search" placeholder="Search..." onChange={this.onChangeEvent}/>
                {/* here we have designed the search bar for searching properties*/}
                <CardView propertyData={filterList}></CardView>
            </div>
        );
    }
}
export default ListView;