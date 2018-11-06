import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { darken, lighten } from "@material-ui/core/styles/colorManipulator";
import { connect } from 'react-redux';
import { CircleMarker, FeatureGroup, LayersControl, Map, Marker, Popup, TileLayer, Circle} from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  leafletContainer: {
    width: '570px',
    height: '340px',
  },
});

class MapWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }
  }

  tileLayer = this.props.config.tileLayers.find((layer) => layer.name === this.props.tileLayer);

  render() {
    const { classes, theme } = this.props;
    const { data } = this.state;

    const position = [this.state.lat, this.state.lng];

    return (
      <div className={classes.root}>
        <div>
          <Map className={classes.leafletContainer} center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution={this.tileLayer.attribution}
              url={this.tileLayer.url}
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    )
  }
}

MapWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    config: state.config.config,
  }
};

MapWidget = withStyles(styles, { withTheme: true })(MapWidget);
export default connect(mapStateToProps)(MapWidget);
