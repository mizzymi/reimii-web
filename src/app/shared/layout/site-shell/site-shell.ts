import { NgIf } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-site-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './site-shell.html',
  styleUrl: './site-shell.scss',
})
export class SiteShell {
  readonly year = new Date().getFullYear();

  private readonly isBrowser: boolean;

  mobileOpen = false;

  @ViewChild('burgerBtn', { static: false }) burgerBtn?: ElementRef<HTMLElement>;
  @ViewChild('mobileNav', { static: false }) mobileNav?: ElementRef<HTMLElement>;

  langOpen = false;
  activeLang: 'es' | 'en' = 'es';

  @ViewChild('langBtn', { static: false }) langBtn?: ElementRef<HTMLElement>;
  @ViewChild('langMenu', { static: false }) langMenu?: ElementRef<HTMLElement>;

  constructor(
    private transloco: TranslocoService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    const stored = this.isBrowser ? (localStorage.getItem('lang') as 'es' | 'en' | null) : null;
    const initial = (stored || (this.transloco.getActiveLang() as any) || 'es') as 'es' | 'en';

    this.activeLang = initial;
    this.transloco.setActiveLang(initial);
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    if (this.mobileOpen) this.langOpen = false;
  }

  closeMobile() {
    this.mobileOpen = false;
  }

  toggleLangMenu() {
    this.langOpen = !this.langOpen;
    if (this.langOpen) this.mobileOpen = false;
  }

  setLang(lang: 'es' | 'en') {
    this.activeLang = lang;
    this.transloco.setActiveLang(lang);

    if (this.isBrowser) localStorage.setItem('lang', lang);

    this.langOpen = false;
    this.mobileOpen = false;
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.isBrowser) return;

    if (window.innerWidth > 900) {
      this.mobileOpen = false;
      this.langOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isBrowser) return;

    const target = event.target as Node;

    if (this.mobileOpen) {
      const clickedBurger = this.burgerBtn?.nativeElement?.contains(target) ?? false;
      const clickedMenu = this.mobileNav?.nativeElement?.contains(target) ?? false;

      if (!clickedBurger && !clickedMenu) {
        this.mobileOpen = false;
      }
    }

    if (this.langOpen) {
      const clickedLangBtn = this.langBtn?.nativeElement?.contains(target) ?? false;
      const clickedLangMenu = this.langMenu?.nativeElement?.contains(target) ?? false;

      if (!clickedLangBtn && !clickedLangMenu) {
        this.langOpen = false;
      }
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.isBrowser) return;

    if (this.mobileOpen) this.mobileOpen = false;
    if (this.langOpen) this.langOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (!this.isBrowser) return;

    if (this.mobileOpen) this.mobileOpen = false;
    if (this.langOpen) this.langOpen = false;
  }
}
