import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { images } from '@Constants';
import { FooterComponent } from '../footer/footer.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FooterComponent, RouterModule, NgFor, NgIf],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  readonly images = images;
  private router = inject(Router);
  routeName: string[] | undefined;
  lastRoute: string | undefined;
  mode: string | undefined;
  user: string | undefined;

  ngOnInit(): void {
    const activeRoute = this.router.url.slice(1);
    this.routeName = (activeRoute == 'home')?[]:activeRoute.split('/');
    this.mode = localStorage.getItem('mode')?.toString();
    this.user = localStorage.getItem('nombrePersona')?.toString();
    // if (this.routeName.length > 0) {
      this.lastRoute = (activeRoute == 'home')?'Panel de Control | Lista de Módulos':this.routeName[this.routeName.length - 1];
    // }
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
