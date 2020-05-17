import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import PropTypes from "prop-types";

function ConstellationSimple({ color, dotColor, height, width, style }) {
  return (
    <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
      <Path
        fill={color}
        d="M470.71 0c-22.768 0-41.29 18.523-41.29 41.29 0 3.702.498 7.288 1.415 10.705l-59.788 29.894c-7.565-9.625-19.301-15.825-32.465-15.825-22.768 0-41.29 18.523-41.29 41.29 0 16.773 10.058 31.232 24.456 37.689l-15.486 69.685c-.238-.004-.473-.018-.712-.018-19.905 0-36.566 14.159-40.439 32.934l-183.36.095c-3.838-18.824-20.52-33.03-40.459-33.03C18.522 214.71 0 233.232 0 256c0 22.086 17.431 40.176 39.259 41.239l20.666 134.775c-15.688 5.857-26.893 20.99-26.893 38.696 0 22.768 18.522 41.29 41.29 41.29s41.29-18.522 41.29-41.29c0-1.678-.112-3.33-.308-4.956l121.462-40.488c7.148 12.343 20.49 20.669 35.75 20.669 22.768 0 41.29-18.522 41.29-41.29 0-16.773-10.058-31.232-24.456-37.689l15.486-69.685c.238.004.473.018.712.018 22.768 0 41.29-18.522 41.29-41.29 0-16.773-10.058-31.232-24.456-37.689l15.484-69.685c.238.004.473.018.712.018 22.768 0 41.29-18.523 41.29-41.29 0-3.702-.498-7.288-1.415-10.705l59.788-29.894c7.567 9.627 19.302 15.827 32.466 15.827 22.768 0 41.29-18.523 41.29-41.29C512 18.523 493.478 0 470.71 0zM16.516 256c0-13.661 11.113-24.774 24.774-24.774 13.661 0 24.774 11.113 24.774 24.774 0 13.661-11.113 24.774-24.774 24.774-13.661 0-24.774-11.113-24.774-24.774zm57.807 239.484c-13.661 0-24.774-11.113-24.774-24.774 0-13.661 11.113-24.774 24.774-24.774 13.661 0 24.774 11.113 24.774 24.774 0 13.661-11.113 24.774-24.774 24.774zm156.903-90.839c0 1.678.112 3.33.308 4.956l-121.462 40.488c-6.845-11.821-19.373-19.955-33.827-20.621L55.586 294.736c13.236-4.9 23.297-16.398 26.165-30.482l183.321-.095c2.658 13.208 11.643 24.147 23.642 29.529l-15.486 69.685c-.238-.004-.473-.018-.712-.018-22.768 0-41.29 18.522-41.29 41.29zm66.064 0c0 13.661-11.114 24.774-24.774 24.774s-24.774-11.113-24.774-24.774c0-13.661 11.114-24.774 24.774-24.774s24.774 11.113 24.774 24.774zM330.323 256c0 13.661-11.114 24.774-24.774 24.774S280.775 269.661 280.775 256c0-13.661 11.114-24.774 24.774-24.774 13.659 0 24.774 11.113 24.774 24.774zm8.258-123.871c-13.66 0-24.774-11.114-24.774-24.774s11.114-24.774 24.774-24.774 24.774 11.114 24.774 24.774-11.114 24.774-24.774 24.774zM470.71 66.065c-13.66 0-24.774-11.114-24.774-24.774s11.114-24.774 24.774-24.774 24.774 11.114 24.774 24.774c0 13.659-11.114 24.774-24.774 24.774z"
      />
      <Circle fill={dotColor} cx={50.099} cy={50.099} r={8.809} />
      <Circle fill={dotColor} cx={83.131} cy={83.131} r={8.809} />
      <Circle fill={dotColor} cx={149.196} cy={149.196} r={8.809} />
      <Circle fill={dotColor} cx={248.292} cy={83.131} r={8.809} />
      <Circle fill={dotColor} cx={461.901} cy={461.901} r={8.809} />
      <Circle fill={dotColor} cx={461.901} cy={263.708} r={8.809} />
      <Circle fill={dotColor} cx={428.869} cy={296.74} r={8.809} />
    </Svg>
  );
}

ConstellationSimple.defaultProps = {
  height: 120,
  width: 120,
  color: "#fbf1e2",
  dotColor: "#f4d8a5",
};

ConstellationSimple.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default ConstellationSimple;
