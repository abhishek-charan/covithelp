import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
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
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.initMap();
    setTimeout(() => {
      if (this.isEdit) {
        if (this.editData && this.editData.alat && this.editData.alng) {
          this.showPosition(this.editData.alat, this.editData.alng);
        } else {
          this.showPosition(this.defaultLat, this.defaultLng);
        }
      } else {
        this.getCurrentPosition();
      }
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
    // var location = document.getElementById("my-location");
    // this.map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(location);

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
          this.showPosition(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        err => {
          console.log(err);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  /**
   * To show position
   * @param lat
   * @param lng
   */
  showPosition(lat, lng) {
    let location = new google.maps.LatLng(lat, lng);
    // this.map.panTo(location);
    this.addMarker(location);
    this.getPosition(lat, lng);
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
      // this.map.panTo(location);
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
}
