import React from 'react';




class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectImage: ''
        }
    }

    componentDidMount(){
        // will make call to WP api
    };

    render(){
        return(
          <section className="gallery-container">
            <div className="container">
              <div className="heading wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div className="row">
                  <div className="text-center col-sm-12">
                    <h2>Our gallery</h2>
                  </div>
                </div>
              </div> 
            </div>
            <div className="gallery-outer">
              <div className="col-md-6 col-sm-6 col-xs-12 left-gallery" data-wow-duration="1000ms" data-wow-delay="400ms">
                <div className="col-md-4 col-sm-4 col-xs-4 gallery-item">
                  <a href="javascript:;"><img src="images/gallery-big-right1.jpg" alt=""><i class="fa fa-plus" aria-hidden="true"></i></a>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 right-gallery wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                <div className="gallery-block-right gallery clearfix">
                  <a href='' rel="prettyPhoto[gallery1]"><img src={this.state.selectImage} alt=""><i class="fa fa-plus" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </section> 
        )
    }

}
export default Gallery;
