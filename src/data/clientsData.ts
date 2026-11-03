import { REGULAR_CUSTOMERS } from './companyProfileData';

// Direct high-resolution client logo imports uploaded by the client into src/assets/images
import adcbLogo from '../assets/images/ADCB.png';
import adibLogo from '../assets/images/ADIB.png';
import alAhliLogo from '../assets/images/Al_Ahli_Diving_Center.png';
import alHabtoorLogo from '../assets/images/Al_Habtoor.png';
import alNaboodahLogo from '../assets/images/Al_Naboodah.png';
import appleLogo from '../assets/images/Apple.png';
import asterLogo from '../assets/images/Aster_DM_Healthcare.png';
import carrefourLogo from '../assets/images/Carrefour.png';
import creativeZoneLogo from '../assets/images/Creative_Zone.png';
import dewaLogo from '../assets/images/DEWA.png';
import dibLogo from '../assets/images/Dubai_Islamic_Bank.png';
import emaarLogo from '../assets/images/Emaar.png';
import emiratesNbdLogo from '../assets/images/Emirates_NBD.png';
import enocLogo from '../assets/images/ENOC.png';
import iranianHospitalLogo from '../assets/images/Iranian_Hospital_Dubai.png';
import kanooLogo from '../assets/images/Kanoo_Group.png';
import majidAlFuttaimLogo from '../assets/images/Majid_Al_Futtaim.png';
import marriottLogo from '../assets/images/Marriott.png';
import medcareLogo from '../assets/images/Medcare_Hospital.png';
import nandosLogo from '../assets/images/Nandos.png';
import nestleLogo from '../assets/images/Nestle.png';
import noonLogo from '../assets/images/Noon.png';
import riverlandLogo from '../assets/images/Riverland_Dubai.png';
import saudiGermanLogo from '../assets/images/Saudi_German_Hospital.png';
import sheratonLogo from '../assets/images/Sheraton.png';
import spinneysLogo from '../assets/images/Spinneys.png';
import talabatLogo from '../assets/images/Talabat.png';
import thumbayLogo from '../assets/images/Thumbay_Hospital.png';
import voxCinemasLogo from '../assets/images/VOX_Cinemas.png';

export interface ClientLogoItem {
  id: string;
  name: string;
  nameAr: string;
  sector: 'Hospitality' | 'Healthcare' | 'Banking & Finance' | 'Tech & E-Commerce' | 'Retail & Conglomerates' | 'Automotive & Government';
  sectorAr: string;
  logoUrl?: string;
  logoText: string;
  brandColor: string;
  taglineEn: string;
  taglineAr: string;
  servicesProvidedEn: string[];
  servicesProvidedAr: string[];
}

/**
 * Enterprise client logo mapping corresponding directly to the client filenames uploaded in src/assets/images
 */
export const CLIENT_LOGO_MAP: Record<string, string> = {
  'marriott': marriottLogo,
  'sheraton': sheratonLogo,
  'emaar': emaarLogo,
  'apple': appleLogo,
  'emirates-nbd': emiratesNbdLogo,
  'adcb': adcbLogo,
  'dubai-islamic-bank': dibLogo,
  'adib': adibLogo,
  'majid-al-futtaim': majidAlFuttaimLogo,
  'carrefour': carrefourLogo,
  'vox-cinemas': voxCinemasLogo,
  'talabat': talabatLogo,
  'noon': noonLogo,
  'spinneys': spinneysLogo,
  'nestle': nestleLogo,
  'nandos': nandosLogo,
  'aster-dm-healthcare': asterLogo,
  'medcare-hospital': medcareLogo,
  'thumbay-hospital': thumbayLogo,
  'saudi-german-hospital': saudiGermanLogo,
  'iranian-hospital': iranianHospitalLogo,
  'al-habtoor': alHabtoorLogo,
  'al-naboodah': alNaboodahLogo,
  'kanoo-group': kanooLogo,
  'enoc': enocLogo,
  'al-ahli-driving-center': alAhliLogo,
  'creative-zone': creativeZoneLogo,
  'riverland-dubai': riverlandLogo,
  'dewa': dewaLogo,
};

// Map all 29 enterprise clients with their genuine verified logos
export const CLIENT_LOGOS_DATA: ClientLogoItem[] = REGULAR_CUSTOMERS.map((client) => ({
  id: client.id,
  name: client.name,
  nameAr: client.nameAr,
  sector: client.sector,
  sectorAr: client.sectorAr,
  logoUrl: CLIENT_LOGO_MAP[client.id],
  logoText: client.logoText,
  brandColor: client.brandColor,
  taglineEn: client.taglineEn,
  taglineAr: client.taglineAr,
  servicesProvidedEn: client.servicesProvidedEn,
  servicesProvidedAr: client.servicesProvidedAr,
}));

/**
 * Filter clients by sector helper
 */
export const getClientsBySector = (sector: string): ClientLogoItem[] => {
  if (!sector || sector === 'all') return CLIENT_LOGOS_DATA;
  return CLIENT_LOGOS_DATA.filter((c) => c.sector === sector);
};
