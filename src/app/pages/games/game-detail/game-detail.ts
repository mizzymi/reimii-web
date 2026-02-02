import { NgFor, NgIf, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';

import { gamesFeatured } from '../data/games.data';
import { AppExtended } from '../../../shared/models/featured-item';

@Component({
  selector: 'game-game-detail',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, TranslocoPipe],
  templateUrl: './game-detail.html',
  styleUrl: './game-detail.scss',
})
export class GameDetail implements AfterViewInit, OnDestroy {
  private readonly isBrowser: boolean;

  game?: AppExtended;

  @ViewChild('carousel', { static: false })
  carousel?: ElementRef<HTMLElement>;

  activeIndex = 0;

  private programmaticScrolling = false;
  private scrollSnapTimer: ReturnType<typeof setTimeout> | null = null;
  private unlockScrollTimer: ReturnType<typeof setTimeout> | null = null;

  lightboxOpen = false;
  lightboxIndex = 0;

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private doc: Document
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    const id = this.route.snapshot.paramMap.get('id');
    this.game = gamesFeatured.find((a) => a.id === id);

    const len = this.game?.screenshots.length ?? 0;
    this.activeIndex = len >= 2 ? 1 : 0;
  }

  ngAfterViewInit() {
    // SSR: no DOM, no scroll
    if (!this.isBrowser) return;

    // Espera a que el carrusel exista en el DOM
    setTimeout(() => this.centerActive(false), 0);
  }

  ngOnDestroy() {
    if (this.scrollSnapTimer) clearTimeout(this.scrollSnapTimer);
    if (this.unlockScrollTimer) clearTimeout(this.unlockScrollTimer);

    if (this.isBrowser) {
      this.doc.body.style.overflow = '';
    }
  }

  // ---- Carousel ----
  onCarouselScroll() {
    if (!this.isBrowser) return;
    if (this.programmaticScrolling) return;

    this.updateActiveFromCenter();

    if (this.scrollSnapTimer) clearTimeout(this.scrollSnapTimer);
    this.scrollSnapTimer = setTimeout(() => {
      this.centerActive(true);
    }, 120);
  }

  selectIndex(index: number, smooth = true) {
    const len = this.game?.screenshots.length ?? 0;
    if (!len) return;

    this.activeIndex = ((index % len) + len) % len;
    this.centerActive(smooth);
  }

  prevShot() {
    this.selectIndex(this.activeIndex - 1, true);
  }

  nextShot() {
    this.selectIndex(this.activeIndex + 1, true);
  }

  private centerActive(smooth: boolean) {
    if (!this.isBrowser) return;

    const el = this.carousel?.nativeElement;
    if (!el) return;

    const shots = el.querySelectorAll<HTMLElement>('.shot');
    const child = shots?.[this.activeIndex];
    if (!child) return;

    this.programmaticScrolling = true;

    const childCenter = child.offsetLeft + child.clientWidth / 2;
    const targetLeft = Math.max(0, childCenter - el.clientWidth / 2);

    el.scrollTo({
      left: targetLeft,
      behavior: smooth ? 'smooth' : 'auto',
    });

    if (this.unlockScrollTimer) clearTimeout(this.unlockScrollTimer);
    this.unlockScrollTimer = setTimeout(
      () => (this.programmaticScrolling = false),
      smooth ? 280 : 0
    );
  }

  private updateActiveFromCenter() {
    if (!this.isBrowser) return;

    const el = this.carousel?.nativeElement;
    if (!el) return;

    const children = Array.from(el.querySelectorAll<HTMLElement>('.shot'));
    if (!children.length) return;

    const centerX = el.scrollLeft + el.clientWidth / 2;

    let bestIndex = this.activeIndex;
    let bestDist = Infinity;

    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - centerX);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    });

    this.activeIndex = bestIndex;
  }

  // ---- Lightbox ----
  openLightbox(index: number) {
    this.lightboxIndex = index;
    this.lightboxOpen = true;

    if (this.isBrowser) {
      this.doc.body.style.overflow = 'hidden';
    }
  }

  closeLightbox() {
    this.lightboxOpen = false;

    if (this.isBrowser) {
      this.doc.body.style.overflow = '';
    }
  }

  lightboxPrev(e: Event) {
    e.stopPropagation();

    const len = this.game?.screenshots.length ?? 0;
    if (!len) return;

    this.lightboxIndex = (this.lightboxIndex - 1 + len) % len;
  }

  lightboxNext(e: Event) {
    e.stopPropagation();

    const len = this.game?.screenshots.length ?? 0;
    if (!len) return;

    this.lightboxIndex = (this.lightboxIndex + 1) % len;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (!this.isBrowser) return;
    if (this.lightboxOpen) this.closeLightbox();
  }

  @HostListener('document:keydown.arrowleft')
  onLeft() {
    if (!this.isBrowser) return;

    if (this.lightboxOpen) this.lightboxPrev(new Event('keydown'));
    else this.prevShot();
  }

  @HostListener('document:keydown.arrowright')
  onRight() {
    if (!this.isBrowser) return;

    if (this.lightboxOpen) this.lightboxNext(new Event('keydown'));
    else this.nextShot();
  }

  isSoon(item: AppExtended) {
    return item.availability === 'featured.availability.comingSoon';
  }

  isBeta(item: AppExtended) {
    return item.availability === 'featured.availability.beta';
  }
}
