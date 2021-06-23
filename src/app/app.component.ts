import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-interface';
  public slides = [
    { src: "https://www.rheumatology.org/portals/0/Images/Health%20Care%20Team/Patient-Role.jpg" },
    { src: "https://starhospitals.in/img/internationalpatients/IN-Patient-Guide.jpg" },
    { src: "https://www.euractiv.com/wp-content/uploads/sites/2/2019/09/shutterstock_645685942-800x450.jpg" },
    { src: "https://www.nursingworld.org/~4ad751/globalassets/practiceandpolicy/workforce/what-is-nursing/largeimage-anais-42.jpg" }
  ];
}
