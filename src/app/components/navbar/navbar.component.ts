import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isShrink = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isShrink = window.scrollY > 0;
  }
}
