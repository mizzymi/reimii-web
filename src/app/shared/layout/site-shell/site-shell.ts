import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-site-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './site-shell.html',
  styleUrl: './site-shell.scss',
})
export class SiteShell {
  readonly year = new Date().getFullYear();
  mobileOpen = false;

  @ViewChild('burgerBtn', { static: false }) burgerBtn?: ElementRef<HTMLElement>;
  @ViewChild('mobileNav', { static: false }) mobileNav?: ElementRef<HTMLElement>;

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile() {
    this.mobileOpen = false;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 900) this.mobileOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.mobileOpen) return;

    const target = event.target as Node;

    const clickedBurger = this.burgerBtn?.nativeElement?.contains(target) ?? false;
    const clickedMenu = this.mobileNav?.nativeElement?.contains(target) ?? false;

    if (!clickedBurger && !clickedMenu) {
      this.mobileOpen = false;
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.mobileOpen) this.mobileOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.mobileOpen) this.mobileOpen = false;
  }
}
