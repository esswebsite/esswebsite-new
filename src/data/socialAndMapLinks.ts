/**
 * Official verified social media channels, Google Business Profile, and Google Maps embed configuration
 * for Karama Business Center (KBC) & Emirates Secretarial Services (ESS) / KMFC.
 */

export const OFFICIAL_SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/karamacenter.ae/',
  facebook: 'https://www.facebook.com/karamabusiness.ae/',
  linkedin: 'https://www.linkedin.com/company/karamacenter-ae/posts/?viewAsMember=true',
  tiktok: 'https://www.tiktok.com/@karamabusinesscenter',
} as const;

export const OFFICIAL_MAPS = {
  shareUrl: 'https://share.google/Ya8WtwPIaBYSwUKQ7',
  embedIframeUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.823654789384!2d55.309525!3d25.2453731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d5daeab927%3A0xfdc87d85f9e5af4e!2sKarama%20Medical%20Fitness%20Express%20service%20Center%20-%20KMFC!5e1!3m2!1sen!2sae!4v1792662438593!5m2!1sen!2sae',
  placeName: 'Karama Medical Fitness Express service Center - KMFC',
  locationDetailsEn: 'Al Karama, Next to Karama Post Office, Dubai, United Arab Emirates',
  locationDetailsAr: 'منطقة الكرامة، بجوار مكتب بريد الكرامة، دبي، الإمارات العربية المتحدة',
  coordinates: {
    latitude: 25.2453731,
    longitude: 55.309525,
  },
} as const;

export const OFFICIAL_CONTACT = {
  phonePrimary: '04-342-6666',
  phonePrimaryIntl: '+97143426666',
  whatsappIntl: '+97143426666',
  whatsappUrl: 'https://wa.me/97143426666',
  email: 'info@ess.ae',
  website: 'https://ess.ae',
} as const;

/**
 * Array of official sameAs profile links for Schema.org LocalBusiness & Organization
 */
export const OFFICIAL_SAME_AS: readonly string[] = [
  OFFICIAL_MAPS.shareUrl,
  OFFICIAL_SOCIAL_LINKS.instagram,
  OFFICIAL_SOCIAL_LINKS.facebook,
  OFFICIAL_SOCIAL_LINKS.linkedin,
  OFFICIAL_SOCIAL_LINKS.tiktok,
  OFFICIAL_CONTACT.website,
];
