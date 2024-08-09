import { Component, inject, Renderer2 } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule, NgIf } from '@angular/common';
import { images } from '@Constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarComponent, CommonModule, NgIf],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly images = images;
  private renderer = inject(Renderer2);
  mode: string | undefined;
  
  ngOnInit(): void {
    this.mode = localStorage.getItem('mode')?.toString();
    this.updateBodyClass();
  }

  toggleMode() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('mode', this.mode);
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.mode === 'light') {
      this.renderer.removeClass(document.body, 'dark-mode');
    } else {
      this.renderer.addClass(document.body, 'dark-mode');
    }
  }
}
