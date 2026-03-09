/**
 * Navigation item model used by the site header and footer.
 */
export interface SiteNavItem {
    label: string;
    route: string;
}

/**
 * Basic project card contract for static content.
 */
export interface SiteProjectItem {
    title: string;
    description: string;
    category: string;
    meta: string;
    route: string;
}

/**
 * Site-wide configuration object.
 */
export const SITE_CONFIG = {
    brandName: 'Reimii',
    brandSubtitle: 'Games & Apps Studio',
    siteTitle: 'Reimii',
    siteDescription: 'Independent studio focused on polished games, useful apps, and premium digital interfaces.',
    navigation: [
        { label: 'Home', route: '/' },
        { label: 'Games', route: '/games' },
        { label: 'Apps', route: '/apps' },
        { label: 'Studio', route: '/studio' },
    ] satisfies SiteNavItem[],
};