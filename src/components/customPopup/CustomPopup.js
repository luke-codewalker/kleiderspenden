import "./customPopup.css";

const CustomPopup = props => {
  let gmapsDestination = "";

  if (props.category === "container") {
    gmapsDestination = [
      props.location.gps_location.coordinates[1],
      props.location.gps_location.coordinates[0]
    ].join(",");
  } else {
    gmapsDestination = [
      props.location.street,
      props.location.zipcode,
      props.location.city
    ].join(",");
  }

  return `<div className="CustomPopup">
        <span>${props.name}</span>
        <div class="CustomPopup__options">
        
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.google.com/maps/dir/?api=1&destination=${gmapsDestination}&travelmode=bicycling"
            title="Google Maps Route"
            class="CustomPopup__route"
          >
            ➥
          </a>${
            props.url
              ? `<a  target="_blank"
            rel="noreferrer noopener"
            href="${props.url}">Website</a>`
              : ""
          }
        </div>
      </div>`;
};

export default CustomPopup;
