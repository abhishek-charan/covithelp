import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { CommonPopoverService } from "src/app/providers/common-popover/common-popover.service";
import { constants } from "src/app/constants/constants";
declare let google: any;
@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.scss"]
})
export class GoogleMapsComponent implements OnInit {
  // @ViewChild("search", { static: false }) searchElementRef: ElementRef;
  @ViewChild("gmap", { static: false }) gmapElement: any;
  map: any;
  marker: any;
  infoWindow: any;
  lat: any;
  lng: any;
  defaultLat: number = 28.6304;
  defaultLng: number = 77.2177;
  searchBox: any;
  @Input() isEdit: boolean;
  @Input() editData: any;
  @Input() searchPlace: any;
  @Output() getLatLng: EventEmitter<any> = new EventEmitter();
  constructor(private commonPopover: CommonPopoverService) {}
  showGeoLocationIcon: boolean = false;
  ngOnInit() {}
  ngAfterViewInit() {
    this.initMap();
    // setTimeout(() => {
    //   this.getCurrentPosition();
    // }, 100);
  }

  /**
   * Initise Map
   */
  initMap() {
    let mapProp = {
      center: new google.maps.LatLng(this.defaultLat, this.defaultLng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      myLocationButton: true
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    // Create the search-box & my-location and link them it to the UI element.
    // let input = document.getElementById("search-input");
    // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // let location = document.getElementById("my-location");
    // this.map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(location);
    // this.showGeoLocationIcon = true;
    this.marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.defaultLat, this.defaultLng),
      map: this.map
      // animation: google.maps.Animation.DROP
    });

    //Current location
    this.getCurrentPosition();

    //Create and open InfoWindow.
    this.infoWindow = new google.maps.InfoWindow();

    // This event listener calls addMarker() when the map is clicked.
    // this.map.addListener("click", event => {
    //   let myLatLng = event.latLng;
    //   this.addMarker(myLatLng);
    //   this.getPosition(myLatLng.lat(), myLatLng.lng());
    // });

    // this.searchBox = new google.maps.places.Autocomplete(
    //   this.searchElementRef.nativeElement
    // );
  }

  /**
   * Adds a marker to the map.
   * @param location
   */
  addMarker(location) {
    // if marker exists and has a .setMap method, hide it
    if (this.marker && this.marker.setMap) {
      this.marker.setMap(null);
    }
    // Add the marker at the clicked location
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      animation: google.maps.Animation.DROP
    });
  }

  /**
   * Get current position
   */
  getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.showPosition(
            position.coords.latitude,
            position.coords.longitude
          );
          // this.textAddressOfLocation(
          //   position.coords.latitude,
          //   position.coords.longitude
          // );
        },
        err => {
          this.commonPopover.toastPopOver(err);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  /**
   * Get formatted address of lat-lng
   * @param lat
   * @param lng
   */
  textAddressOfLocation(lat, lng) {
    let geocoder = new google.maps.Geocoder();
    let latlng = { lat: lat, lng: lng };
    let that = this;
    geocoder.geocode({ location: latlng }, function(results) {
      if (results[0]) {
        // that.zoom = 11;
        // that.currentLocation = results[0].formatted_address;
        // console.log(results[0]);
        return results[0].formatted_address;
      } else {
        // console.log("No results found");
        this.commonPopover.toastPopOver("No results found");
        return "";
      }
    });
  }

  /**
   * To show position
   * @param lat
   * @param lng
   */
  showPosition(lat, lng) {
    let location = new google.maps.LatLng(lat, lng);
    this.map.panTo(location);
    this.addMarker(location);
    this.getPosition(lat, lng);
    this.nearbySearch(lat, lng, [constants.googleMaps.places.HOSPITAL]);
    this.textSearch(lat, lng, constants.googleMaps.places.MARKET);
  }

  /**
   * Search location.
   */
  public searchAddress() {
    this.searchBox.addListener("place_changed", () => {
      // get the place result
      let place = this.searchBox.getPlace();

      //verify result
      if (place.geometry === undefined || place.geometry === null) {
        return;
      }
      this.lat = place.geometry.location.lat();
      this.lng = place.geometry.location.lng();
      let location = new google.maps.LatLng(this.lat, this.lng);
      this.map.panTo(location);
      this.addMarker(location);
      this.getPosition(this.lat, this.lng);
    });
  }

  /**
   * Emit to lat-lng to location screen
   * @param lat
   * @param lng
   */
  getPosition(lat, lng) {
    this.getLatLng.emit({ lat: lat, lng: lng });
  }

  /**
   * Search place by nearbySearch
   * https://developers.google.com/places/web-service/supported_types#table1
   * @param lat
   * @param lng
   * @param placeArray
   */
  nearbySearch(lat, lng, placeArray) {
    let pyrmont = { lat: lat, lng: lng };

    // Create the places service.
    let service = new google.maps.places.PlacesService(this.map);

    // Perform a nearby search.
    let request = {
      location: pyrmont,
      radius: constants.googleMaps.radius,
      types: placeArray // this is where you set the map to get the hospitals and health related places
    };
    let that = this;

    service.nearbySearch(request, function(results, status, pagination) {
      if (status !== "OK") return;
      that.createMarkers(results);
    });
  }

  /**
   * Search place by textSearch
   * https://developers.google.com/maps/documentation/javascript/places#TextSearchRequests
   * @param lat
   * @param lng
   * @param place
   */
  textSearch(lat, lng, place) {
    let pyrmont = { lat: lat, lng: lng };
    let that = this;
    // Create the places service.
    let service = new google.maps.places.PlacesService(this.map);
    let requests = {
      location: pyrmont,
      radius: constants.googleMaps.radius,
      query: place
    };

    service.textSearch(requests, function(results, status, pagination) {
      if (status !== "OK") return;
      that.createMarkers(results);
    });
  }

  /**
   * Create marker on map
   * @param places
   */
  createMarkers(places) {
    let bounds = new google.maps.LatLngBounds();
    let placesList = document.getElementById("places");

    for (let i = 0, place; (place = places[i]); i++) {
      let image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      let name = place.name;
      let address = place.formatted_address || place.vicinity;
      let mapUrl = `https://maps.google.com/?q=${name},${address}`;
      let contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">' +
        name +
        "</h1>" +
        '<div id="bodyContent">' +
        "<p>" +
        address +
        "</p>" +
        "<div class='view-link'><a target='_blank' href='" +
        mapUrl +
        "'><span>View On Map</span></a></div>";
      "</div>" + "</div>";

      let marker = new google.maps.Marker({
        map: this.map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });
      bounds.extend(place.geometry.location);
      google.maps.event.addListener(marker, "click", event => {
        this.infoWindow.setContent(contentString);
        this.infoWindow.open(this.map, marker);
      });
    }
    this.map.fitBounds(bounds);
  }
}
