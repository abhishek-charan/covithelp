import { Injectable } from "@angular/core";
import { CommonPopoverService } from "../common-popover/common-popover.service";
declare var google: any;

@Injectable({
  providedIn: "root"
})
export class GoogleMapsService {
  constructor(private commonPopover: CommonPopoverService) {}

  /**
   * Get current position
   */
  async getCurrentPosition() {
    return new Promise<any>((resolve, reject) => {
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(
          position => {
            this.textAddressOfLocation(
              position.coords.latitude,
              position.coords.longitude
            )
              .then(data => resolve(data))
              .catch(err => reject(err));
          },
          err => {
            this.commonPopover.toastPopOver(err);
            reject({});
          },
          { enableHighAccuracy: true }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
  }

  /**
   * Find formatted address of lat-lng
   * @param lat
   * @param lng
   */
  async textAddressOfLocation(lat, lng) {
    return new Promise<any>((resolve, reject) => {
      let geocoder = new google.maps.Geocoder();
      let latlng = { lat: lat, lng: lng };
      let that = this;
      geocoder.geocode({ location: latlng }, function(results) {
        if (results[0]) {
          let data = {
            lat: lat,
            lng: lng,
            formattedAddress: results[0].formatted_address
          };
          resolve(data);
        } else {
          console.log("No results found");
          this.commonPopover.toastPopOver("No results found");
          reject({});
        }
      });
    });
  }
}
