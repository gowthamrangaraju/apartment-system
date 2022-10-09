import { Component } from '@angular/core';

@Component({
  selector: 'apartment-system-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss'],
})

export class SpinnerComponent {

  loading = false;

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }
}
