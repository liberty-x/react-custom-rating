var React = require('react');

var Chart = React.createClass({

  render: function () {
    var imageBar = {
      clear: "both",
      width: "100%",
      display: "WebkitFlex", /* Safari */
      display: "flex",
    };

    var shadedImageDiv = {
      opacity: "0.3",
      height: "inherit",
      WebkitFlex: "0.5",  /* Safari 6.1+ */
      msFlex: "0.5",  /* IE 10 */
        flex: "0.5",
    };

    var imageDiv = {
      height: "inherit",
      WebkitFlex: "0.5",  /* Safari 6.1+ */
        msFlex: "0.5",  /* IE 10 */
        flex: "0.5",
    };

    var imageTag = {
      height: "100%",
      width: "100%",
    };

    var chartProps  = {
      image: this.props.image,
      maxRating: this.props.maxRating,
      rating: this.props.rating,
      animation: this.props.animation
    };

    var image     = this.props.image;
    var maxRating = this.props.maxRating;
    var rating    = this.props.rating;

    var arr = [];
    for (i=0; i<maxRating; i++){
      if (i < rating) {
        arr[i] = imageDiv;
      } else {
        arr[i] = shadedImageDiv;
      }
    }

    var printImages = arr.map(function(el,i){
      return (
              <div style = {el} >
                <img key={'image'+i} style={imageTag} src={image}></img>
              </div>
      );
    });

    return (
        <div style = {imageBar}>
        {printImages}
        </div>
    )
  }
});

module.exports = Chart;
