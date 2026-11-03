import React, { useState } from 'react';

// Direct high-resolution government department logos uploaded by the user to src/assets/images
import amerLogo from '../assets/images/amer.png';
import tasheelLogo from '../assets/images/Tasheel.png';
import salemMedicalLogo from '../assets/images/salem medical.png';
import ohcLogo from '../assets/images/OHC.png';
import dubaiMunicipalityLogo from '../assets/images/Dubai Municipality.png';
import detLogo from '../assets/images/DET.png';
import notaryCourtsLogo from '../assets/images/Notary & Courts.png';
import icpLogo from '../assets/images/ICP.png';
import rtaLogo from '../assets/images/RTA.png';
import tadbeerLogo from '../assets/images/Tadbeer services.png';
import zajelTawjeehLogo from '../assets/images/zajel & tawjeeh.png';
import atlasAttestationLogo from '../assets/images/atlas attestation.png';
import essLogo from '../assets/images/ess-logo-transparent.png';

export interface DepartmentLogoMeta {
  src: string;
  nameEn: string;
  nameAr: string;
}

export const DEPARTMENT_LOGOS: Record<string, DepartmentLogoMeta> = {
  amer: {
    src: amerLogo,
    nameEn: 'Amer (GDRFA Dubai Visa & Residency)',
    nameAr: 'مركز آمر (الإقامة وشؤون الأجانب - دبي)'
  },
  gdrfa: {
    src: amerLogo,
    nameEn: 'Amer (GDRFA Dubai Visa & Residency)',
    nameAr: 'مركز آمر (الإقامة وشؤون الأجانب - دبي)'
  },
  tasheel: {
    src: tasheelLogo,
    nameEn: 'Tasheel (MoHRE Labour & Work Permits)',
    nameAr: 'تسهيل - وزارة الموارد البشرية والتوطين'
  },
  mohre: {
    src: tasheelLogo,
    nameEn: 'Tasheel (MoHRE Labour & Work Permits)',
    nameAr: 'تسهيل - وزارة الموارد البشرية والتوطين'
  },
  salem: {
    src: salemMedicalLogo,
    nameEn: 'Salem Medical Fitness (KMFC / DHA Residency Medical)',
    nameAr: 'مركز الكرامة للياقة الطبية (سالم / هيئة الصحة بدبي)'
  },
  dha: {
    src: salemMedicalLogo,
    nameEn: 'Salem Medical Fitness (KMFC / DHA Residency Medical)',
    nameAr: 'مركز الكرامة للياقة الطبية (سالم / هيئة الصحة بدبي)'
  },
  kmfc: {
    src: salemMedicalLogo,
    nameEn: 'Karama Medical Fitness Center (KMFC)',
    nameAr: 'مركز الكرامة للياقة الطبية السريعة'
  },
  ohc: {
    src: ohcLogo,
    nameEn: 'Dubai Municipality Occupational Health Card (OHC)',
    nameAr: 'بطاقة الصحة المهنية (بلدية دبي OHC)'
  },
  municipality: {
    src: dubaiMunicipalityLogo,
    nameEn: 'Dubai Municipality (DM)',
    nameAr: 'بلدية دبي'
  },
  dm: {
    src: dubaiMunicipalityLogo,
    nameEn: 'Dubai Municipality (DM)',
    nameAr: 'بلدية دبي'
  },
  ded: {
    src: detLogo,
    nameEn: 'Dubai Economy & Tourism (DET Commercial Licensing)',
    nameAr: 'اقتصادية وسياحة دبي (DET / DED)'
  },
  det: {
    src: detLogo,
    nameEn: 'Dubai Economy & Tourism (DET Commercial Licensing)',
    nameAr: 'اقتصادية وسياحة دبي (DET / DED)'
  },
  notary: {
    src: notaryCourtsLogo,
    nameEn: 'Dubai Courts & Notary Public',
    nameAr: 'الكاتب العدل ومحاكم دبي'
  },
  courts: {
    src: notaryCourtsLogo,
    nameEn: 'Dubai Courts & Notary Public',
    nameAr: 'الكاتب العدل ومحاكم دبي'
  },
  icp: {
    src: icpLogo,
    nameEn: 'Federal Authority for Identity & Citizenship (ICP Emirates ID)',
    nameAr: 'الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ'
  },
  rta: {
    src: rtaLogo,
    nameEn: 'Roads and Transport Authority (RTA)',
    nameAr: 'هيئة الطرق والمواصلات بدبي'
  },
  tadbeer: {
    src: tadbeerLogo,
    nameEn: 'Tadbeer Domestic Workers Services',
    nameAr: 'خدمات تدبير للعمالة المساعدة'
  },
  tawjeeh: {
    src: zajelTawjeehLogo,
    nameEn: 'Zajel Courier & Tawjeeh Labour Guidance',
    nameAr: 'زاجل وتوجيه (توعية العمال وتوصيل المعاملات)'
  },
  zajel: {
    src: zajelTawjeehLogo,
    nameEn: 'Zajel Courier & Tawjeeh Labour Guidance',
    nameAr: 'زاجل وتوجيه (توعية العمال وتوصيل المعاملات)'
  },
  attestation: {
    src: atlasAttestationLogo,
    nameEn: 'Atlas Attestation & Legal Translation (MOFA & Embassies)',
    nameAr: 'أطلس لتصديق المستندات والترجمة القانونية (وزارة الخارجية)'
  },
  mofa: {
    src: atlasAttestationLogo,
    nameEn: 'Atlas Attestation & Legal Translation (MOFA & Embassies)',
    nameAr: 'أطلس لتصديق المستندات والترجمة القانونية (وزارة الخارجية)'
  },
  atlas: {
    src: atlasAttestationLogo,
    nameEn: 'Atlas Attestation & Legal Translation',
    nameAr: 'أطلس لتصديق المستندات والترجمة القانونية'
  },
  typing: {
    src: atlasAttestationLogo,
    nameEn: 'Government Typing & Legal Translation Desk',
    nameAr: 'مكتب الطباعة الحكومية والترجمة القانونية'
  },
  'vip-mobile': {
    src: essLogo,
    nameEn: 'VIP & Mobile Doorstep Government Van',
    nameAr: 'مجلس كبار الشخصيات والخدمة المتنقلة'
  },
  vip: {
    src: essLogo,
    nameEn: 'VIP & Mobile Doorstep Government Van',
    nameAr: 'مجلس كبار الشخصيات والخدمة المتنقلة'
  },
  tax: {
    src: essLogo,
    nameEn: 'Corporate Tax & FTA Desk',
    nameAr: 'مكتب ضريبة الشركات والهيئة الاتحادية للضرائب'
  }
};

export interface DepartmentLogoProps {
  deptId: string;
  className?: string;
  alt?: string;
  imgClassName?: string;
}

export const DepartmentLogo: React.FC<DepartmentLogoProps> = ({
  deptId,
  className = 'w-12 h-12',
  alt,
  imgClassName = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const normalizedId = (deptId || '').toLowerCase().trim();
  const logoInfo = DEPARTMENT_LOGOS[normalizedId] || DEPARTMENT_LOGOS['amer'];

  if (!hasError && logoInfo?.src) {
    return (
      <img
        src={logoInfo.src}
        alt={alt || logoInfo.nameEn}
        className={`${className} ${imgClassName} object-contain transition-transform duration-200`}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    );
  }

  // Fallback vector icon if asset fails
  return (
    <div
      className={`${className} flex items-center justify-center font-bold text-[10px] bg-teal-50 text-teal-800 rounded-lg border border-teal-200 uppercase tracking-wider p-1 text-center`}
      title={logoInfo?.nameEn || deptId}
    >
      {normalizedId.slice(0, 5)}
    </div>
  );
};
