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
declare var google: any;
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
  lat: any;
  lng: any;
  defaultLat: number = 38.889931;
  defaultLng: number = -77.009003;
  searchBox: any;
  @Input() isEdit: boolean;
  @Input() editData: any;
  @Input() searchPlace: any;
  @Output() getLatLng: EventEmitter<any> = new EventEmitter();
  constructor(private commonPopover: CommonPopoverService) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.initMap();
    setTimeout(() => {
      this.getCurrentPosition();
    }, 500);
  }

  /**
   * Initise Map
   */
  initMap() {
    var mapProp = {
      center: new google.maps.LatLng(this.defaultLat, this.defaultLng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      myLocationButton: true
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    // Create the search-box & my-location and link them it to the UI element.
    // var input = document.getElementById("search-input");
    // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    var location = document.getElementById("my-location");
    this.map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(location);

    this.marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.defaultLat, this.defaultLng),
      map: this.map,
      animation: google.maps.Animation.DROP
    });

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
          console.log("pos", position);

          this.showPosition(
            position.coords.latitude,
            position.coords.longitude
          );
          this.textAddressOfLocation(
            position.coords.latitude,
            position.coords.longitude
          );
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

  textAddressOfLocation(lat, lng) {
    let geocoder = new google.maps.Geocoder();
    let latlng = { lat: lat, lng: lng };
    let that = this;
    geocoder.geocode({ location: latlng }, function(results) {
      if (results[0]) {
        // that.zoom = 11;
        // that.currentLocation = results[0].formatted_address;
        console.log(results[0]);
        return results[0].formatted_address;
      } else {
        console.log("No results found");
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
    this.findPin(lat, lng, ["hospital"]);
    // this.findPin(lat, lng, ["grocery_or_supermarket"]);
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

  findPin(lat, lng, placeArray) {
    var pyrmont = { lat: lat, lng: lng };

    // Create the places service.
    var service = new google.maps.places.PlacesService(this.map);
    var getNextPage = null;
    // var moreButton = document.getElementById('more');
    // loadMore = function() {
    //   // moreButton.disabled = true;
    //   if (getNextPage) getNextPage();
    // };

    // Perform a nearby search.
    var request = {
      location: pyrmont,
      radius: "2000",
      types: placeArray // this is where you set the map to get the hospitals and health related places
    };
    let that = this;

    service.nearbySearch(request, function(results, status, pagination) {
      if (status !== "OK") return;

      that.createMarkers(results);
      console.log("result", results);
      // moreButton.disabled = !pagination.hasNextPage;
      getNextPage =
        pagination.hasNextPage &&
        function() {
          pagination.nextPage();
        };
    });

    // var requests = {
    //   location: pyrmont,
    //   radius: '2000',
    //   query: 'hospital'
    // };

    // service.textSearch(requests,  function(results, status, pagination) {
    //   if (status !== "OK") return;

    //   that.createMarkers(results);
    //   console.log("result", results);
    //   // moreButton.disabled = !pagination.hasNextPage;
    //   getNextPage =
    //     pagination.hasNextPage &&
    //     function() {
    //       pagination.nextPage();
    //     };
    // });

    // google.maps.event.addListener(map, 'zoom_changed', function() {
    //   var zoom = map.getZoom();
    //   console.log(zoom);
    //   // if (zoom < 14) {
    //   loadMore();
    //   // }
    // });
  }

  createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
    var placesList = document.getElementById("places");

    for (var i = 0, place; (place = places[i]); i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      var marker = new google.maps.Marker({
        map: this.map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      var li = document.createElement("li");
      li.textContent = place.name;
      // placesList.appendChild(li);

      bounds.extend(place.geometry.location);
    }
    this.map.fitBounds(bounds);
  }
}
