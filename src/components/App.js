import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ListView from '../container/ListView';
import PropertyDetail from '../container/PropertyDetails';
import Header from './Header';

class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="row">
                        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <Route exact path="/" component={ListView} />
                            <Route path="/openhouse/:id" component={PropertyDetail}></Route>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
