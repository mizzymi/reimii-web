import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_CONFIG } from '../config/site.config';

/**
 * Service responsible for updating document title and meta tags.
 */
@Injectable({
    providedIn: 'root',
})
export class SeoService {
    constructor(
        private readonly title: Title,
        private readonly meta: Meta,
        @Inject(DOCUMENT) private readonly document: Document,
    ) { }

    /**
     * Sets the document title and description.
     *
     * @param pageTitle Specific page title.
     * @param description Specific page description.
     */
    setPageMeta(pageTitle: string, description: string): void {
        const fullTitle = pageTitle ? `${pageTitle} | ${SITE_CONFIG.siteTitle}` : SITE_CONFIG.siteTitle;

        this.title.setTitle(fullTitle);

        this.meta.updateTag({
            name: 'description',
            content: description,
        });

        this.meta.updateTag({
            property: 'og:title',
            content: fullTitle,
        });

        this.meta.updateTag({
            property: 'og:description',
            content: description,
        });

        this.meta.updateTag({
            property: 'og:type',
            content: 'website',
        });

        this.document.documentElement.lang = 'en';
    }
}