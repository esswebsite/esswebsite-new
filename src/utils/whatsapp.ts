/**
 * WhatsApp & Phone Communication Utilities
 * Official Contact: Karama Business Center & Emirates Secretarial Services
 * Phone / WhatsApp: +971 4 342 6666 (International: 97143426666)
 */

export const OFFICIAL_PHONE = '+971 4 342 6666';
export const OFFICIAL_PHONE_TEL = 'tel:+97143426666';
export const OFFICIAL_WA_NUMBER = '97143426666';

/**
 * Builds an official WhatsApp link with optional pre-filled encoded text
 */
export const getWhatsAppUrl = (message?: string): string => {
  if (!message || !message.trim()) {
    return `https://wa.me/${OFFICIAL_WA_NUMBER}`;
  }
  return `https://wa.me/${OFFICIAL_WA_NUMBER}?text=${encodeURIComponent(message.trim())}`;
};

/**
 * Safely opens WhatsApp in a new tab/window
 */
export const openWhatsApp = (message?: string): void => {
  const url = getWhatsAppUrl(message);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

export interface BookingDetailsPayload {
  referenceNumber: string;
  departmentName?: string;
  serviceTitle: string;
  serviceId?: string;
  channel?: 'flagship' | 'vip_majlis' | 'doorstep_van';
  date?: string;
  timeSlot?: string;
  fullName: string;
  phone: string;
  email?: string;
  companyName?: string;
  address?: string;
  notes?: string;
}

/**
 * Formats appointment/service booking into a structured WhatsApp message
 */
export const formatBookingWhatsAppMessage = (b: BookingDetailsPayload): string => {
  const channelLabel =
    b.channel === 'vip_majlis'
      ? 'VIP Executive Majlis'
      : b.channel === 'doorstep_van'
      ? 'Doorstep Mobile Government Van'
      : 'Karama Flagship Center';

  const lines = [
    '🏛️ *APPOINTMENT & SERVICE BOOKING*',
    '--------------------------------------',
    `📋 *Reference:* ${b.referenceNumber}`,
    b.departmentName ? `🏢 *Department:* ${b.departmentName}` : '',
    `📌 *Service:* ${b.serviceTitle}`,
    b.date ? `📅 *Preferred Date:* ${b.date}` : '',
    b.timeSlot ? `⏰ *Time Slot:* ${b.timeSlot}` : '',
    `🚗 *Service Channel:* ${channelLabel}`,
    '--------------------------------------',
    '👤 *APPLICANT DETAILS*',
    `• *Name:* ${b.fullName}`,
    `• *Phone / WhatsApp:* ${b.phone}`,
    b.email ? `• *Email:* ${b.email}` : '',
    b.companyName ? `• *Company:* ${b.companyName}` : '',
    b.address ? `• *Address / Location:* ${b.address}` : '',
    b.notes ? `• *Special Notes:* ${b.notes}` : '',
    '--------------------------------------',
    'Please confirm availability and document requirements. Thank you!',
  ].filter(Boolean);

  return lines.join('\n');
};

export interface ContactFormPayload {
  name: string;
  phone: string;
  email?: string;
  serviceType?: string;
  channel?: string;
  message?: string;
}

/**
 * Formats contact page inquiry into a structured WhatsApp message
 */
export const formatContactWhatsAppMessage = (c: ContactFormPayload): string => {
  const serviceLabels: Record<string, string> = {
    'golden-visa': '10-Year Golden Visa',
    'trade-license': 'DED / DET Instant License & Company Setup',
    'tasheel-labor': 'MoHRE Tasheel Labor & Work Permits',
    'dha-medical': 'DHA Medical Fitness (4-Hour Express / Salem)',
    'emirates-id': 'ICP Emirates ID & Biometrics',
    'notary-attestation': 'Notary Public & MOFA Attestation',
    'doorstep-van': 'Doorstep Mobile Government Van',
  };

  const channelLabels: Record<string, string> = {
    flagship: 'Karama Flagship Center',
    vip_majlis: 'VIP Executive Majlis',
    doorstep_van: 'Doorstep Mobile Van',
  };

  const serviceText = c.serviceType ? serviceLabels[c.serviceType] || c.serviceType : 'General Government Service';
  const channelText = c.channel ? channelLabels[c.channel] || c.channel : 'Karama Flagship Center';

  const lines = [
    '📩 *NEW DIRECT INQUIRY - ESS & KBC*',
    '--------------------------------------',
    `👤 *Name:* ${c.name}`,
    `📞 *Phone / WhatsApp:* ${c.phone}`,
    c.email ? `✉️ *Email:* ${c.email}` : '',
    `🏛️ *Service of Interest:* ${serviceText}`,
    `🚗 *Preferred Channel:* ${channelText}`,
    c.message ? `📝 *Message / Requirements:*\n${c.message}` : '',
    '--------------------------------------',
    'Kindly review my request and contact me on WhatsApp/Phone. Thank you!',
  ].filter(Boolean);

  return lines.join('\n');
};

/**
 * Formats callback request into a structured WhatsApp message
 */
export const formatCallbackWhatsAppMessage = (name: string, phone: string): string => {
  const lines = [
    '⚡ *PRIORITY 15-MIN CALLBACK REQUEST*',
    '--------------------------------------',
    `👤 *Applicant Name:* ${name || 'Prospective Client'}`,
    `📞 *Phone Number:* ${phone}`,
    '⏱️ *Requested Action:* Please call me back within 15 minutes regarding government transactions.',
    '--------------------------------------',
    'Karama Business Center & Emirates Secretarial Services',
  ];
  return lines.join('\n');
};
