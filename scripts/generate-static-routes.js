import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const sitemapFile = path.resolve(rootDir, 'public', 'sitemap.xml');
const templateHtmlFile = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templateHtmlFile)) {
  console.error('Error: dist/index.html does not exist. Run "vite build" first.');
  process.exit(1);
}

if (!fs.existsSync(sitemapFile)) {
  console.error('Error: public/sitemap.xml does not exist.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(templateHtmlFile, 'utf-8');
const sitemapContent = fs.readFileSync(sitemapFile, 'utf-8');

// Extract all <loc> URLs from sitemap.xml
const locRegex = /<loc>(https:\/\/ess\.ae(\/[^<]*))<\/loc>/g;
const routes = new Set();
let match;

while ((match = locRegex.exec(sitemapContent)) !== null) {
  let route = match[2];
  if (!route || route === '' || route === '/') {
    continue; // root already has dist/index.html
  }
  // Remove any trailing slash
  route = route.replace(/\/+$/, '');
  if (route) {
    routes.add(route);
  }
}

// Specific metadata for core pages
const CORE_PAGES_META = {
  '/about': {
    title: 'About Us | Emirates Secretarial Services (ESS) & Karama Business Center Dubai',
    desc: 'Over 20 years of authorized UAE government document processing at Karama Business Center (ESS). Amer License #772, Tasheel #4108, DET #902, and DHA Salem medical fitness under one roof.',
    keywords: 'About ESS Dubai, Karama Business Center history, Emirates Secretarial Services Karama, Amer License 772, Tasheel 4108, DET 902, Dubai PRO center Al Karama, authorized government typing Dubai',
  },
  '/departments': {
    title: 'Authorized Government Departments & Counters | ESS & Karama Business Center',
    desc: 'Access 14 official government departments under one roof at Karama Business Center: Amer GDRFA, DET DED, Tasheel MOHRE, ICP Emirates ID, DHA Salem, Notary Public, and RTA.',
    keywords: 'Government departments Dubai, Amer Center Karama, DET licensing Dubai, Tasheel MOHRE Dubai, ICP Emirates ID typing, DHA Salem medical fitness Karama, Dubai Municipality Ejari, Dubai Notary Public',
  },
  '/pricelist': {
    title: 'Official Government Fees & Price List 2026 | ESS & Karama Business Center',
    desc: 'Transparent official government tariffs and typing fees for UAE residency visas, Golden Visas, trade licenses, work permits, and DHA Salem medical fitness testing in Dubai.',
    keywords: 'UAE visa fees 2026, Dubai Golden Visa price, trade license fee Dubai, Tasheel work permit cost, Salem medical test fee, Amer center charges Karama, ESS price list Dubai, official government fees',
  },
  '/knowledge-hub': {
    title: 'Knowledge Hub & UAE Government Regulations Guide 2026 | ESS Dubai',
    desc: 'Authoritative guides, immigration rules, visa renewal procedures, labor laws, and corporate setup regulations in Dubai and the UAE by certified PROs.',
    keywords: 'UAE visa guide, Dubai residence renewal guide, Golden Visa eligibility rules, Emirates ID renewal steps, Dubai corporate tax guide, MOHRE labor regulations, ESS knowledge hub',
  },
  '/faq': {
    title: 'Frequently Asked Questions (FAQ) | Government Services & Medical Fitness | ESS Dubai',
    desc: 'Detailed answers to over 50 frequently asked questions covering Amer residency visas, Golden Visas, DET commercial licenses, Tasheel labor permits, and DHA Salem medical tests.',
    keywords: 'Dubai visa FAQ, Amer center FAQ, Golden Visa questions Dubai, Salem medical fitness test FAQ, trade license renewal FAQ, Tasheel labor contract FAQ, Karama business center questions',
  },
  '/contact': {
    title: 'Contact Us & Karama Center Location | Emirates Secretarial Services Dubai',
    desc: 'Visit Emirates Secretarial Services & Karama Business Center next to Karama Post Office, Dubai. Call +971 4 342 6666, WhatsApp support, or book VIP Majlis and doorstep mobile van.',
    keywords: 'Contact ESS Dubai, Karama Business Center location, Karama post office typing center, Amer center phone number, DHA Salem Karama contact, government services Karama Dubai, ESS WhatsApp',
  },
  '/team': {
    title: 'Executive Leadership & Certified PRO Team | ESS Karama Dubai',
    desc: 'Meet our certified PROs, legal advisors, immigration specialists, and executive leadership team at Emirates Secretarial Services & Karama Business Center Dubai.',
    keywords: 'ESS team Dubai, certified PRO Dubai, government liaison officers, immigration consultants Karama, Karama Business Center management, corporate PRO team',
  },
  '/ceo': {
    title: 'CEO Message & Strategic Vision | Emirates Secretarial Services Dubai',
    desc: 'A message from the CEO of Emirates Secretarial Services & Karama Business Center on delivering premier, zero-delay government transactions and medical fitness in Dubai.',
    keywords: 'CEO Emirates Secretarial Services, Karama Business Center leadership, Dubai government services vision, ESS corporate governance, executive message ESS',
  },
  '/awards': {
    title: 'Government Accreditations, Awards & Certifications | ESS Dubai',
    desc: 'Official commendations, GDRFA Amer excellence ratings, DHA Salem accreditations, and ISO quality awards earned by Emirates Secretarial Services & Karama Business Center.',
    keywords: 'GDRFA awards, Amer center accreditation, DHA approved center Dubai, ESS certifications, Karama business center awards, government excellence Dubai',
  },
  '/clients': {
    title: 'Corporate Clients & Enterprise Partners | ESS Dubai',
    desc: 'Trusted corporate PRO partner for multinational corporations, semi-government entities, hospitality groups, and top businesses across Dubai and the UAE.',
    keywords: 'Corporate PRO Dubai, enterprise immigration management, group visa processing Dubai, corporate secretarial services UAE, enterprise government liaison',
  },
  '/events': {
    title: 'Community Events & Corporate Milestone Gallery | ESS Dubai',
    desc: 'Community outreach, government delegation visits, corporate milestones, and service innovation events at Emirates Secretarial Services & Karama Business Center.',
    keywords: 'ESS events Dubai, government delegations Karama, community initiatives Dubai, business center milestones, corporate events ESS',
  },
  '/gallery': {
    title: 'Center Gallery, VIP Majlis & Mobile Van Facilities | ESS Dubai',
    desc: 'Take a photo tour of our modern 14-counter hall, luxury VIP Majlis lounge, DHA Salem blood collection rooms, ICP biometric booths, and mobile government van.',
    keywords: 'Karama business center photo gallery, Amer center Karama photos, VIP Majlis lounge Dubai, mobile government van UAE, Salem medical fitness center interior',
  },
};

// Specific metadata for 14 authorized departments
const DEPARTMENTS_META = {
  amer: {
    title: 'Amer Center Karama Dubai (Lic. #772) | Residency Visas & Entry Permits | ESS',
    desc: 'Authorized Amer Center (Lic. #772) in Al Karama, Dubai. Fast-track UAE residency visa issuance, renewals, Golden Visas, family sponsorship, visit visas, and status change.',
    keywords: 'Amer Center Karama, Amer Dubai, Amer License 772, GDRFA Dubai, residence visa renewal, Dubai entry permit, family visa Dubai, visit visa extension Karama, Golden Visa Amer',
  },
  ded: {
    title: 'DET Dubai Economy & Tourism Services | Trade Licenses & Business Setup | ESS',
    desc: 'Authorized DET / DED commercial center at Karama Business Center. New commercial, professional & industrial licenses, Instant license, e-Trader, trade name reservation, and Ejari.',
    keywords: 'DET Dubai, DED Dubai license renewal, instant license Dubai, e-trader license, trade name reservation, MOA signing Dubai, business setup Karama, commercial permit DET',
  },
  tasheel: {
    title: 'Tasheel Center Karama Dubai (#4108) | MOHRE Labor & Work Permits | ESS',
    desc: 'Authorized Tasheel Center (#4108) in Karama. Electronic work permits, MOHRE offer letters, unified labor contracts, quota applications, establishment cards, and labor cancellations.',
    keywords: 'Tasheel Karama, Tasheel center Dubai, MOHRE work permit, electronic work permit renewal, labor contract Dubai, quota application, company establishment card MOHRE',
  },
  icp: {
    title: 'ICP Federal Authority Services Karama | Emirates ID Typing & Biometrics | ESS',
    desc: 'Official ICP typing and biometric guidance at Karama Business Center. New Emirates ID application, renewal, replacement, fast biometric slot booking, and Zajel courier delivery.',
    keywords: 'ICP Dubai, Emirates ID renewal, new Emirates ID, Emirates ID urgent biometrics, ICP smart services, lost Emirates ID replacement, Zajel passport delivery, ICP Karama',
  },
  municipality: {
    title: 'Dubai Municipality & DLD Ejari Services Karama | Property & Health Permits | ESS',
    desc: 'Dubai Municipality & Dubai Land Department authorized center. Official Ejari tenancy registration & cancellation, Montaji product approval, Foodwatch, signage & fit-out permits.',
    keywords: 'Ejari registration Karama, DLD Ejari cancellation, Dubai Municipality permits, Montaji registration, Foodwatch Dubai, fitout permit Dubai, advertising signage permit DM',
  },
  ohc: {
    title: 'OHC Occupational Health Card Services Dubai | Food Handlers & Salons | ESS',
    desc: 'Occupational Health Card (OHC) authorized typing and medical processing for Dubai food handlers, restaurant staff, salon & spa therapists, and RTA commercial drivers.',
    keywords: 'OHC card Dubai, occupational health card Karama, food handlers card Dubai, salon health card, DHA occupational health screening, driver health card Dubai',
  },
  attestation: {
    title: 'MOFA & Embassy Document Attestation Services Dubai | Atlas Center | ESS',
    desc: 'Official UAE Ministry of Foreign Affairs (MOFA) attestation, global embassy & consulate legalization, apostille, educational degree equivalency, and vital certificates.',
    keywords: 'MOFA attestation Dubai, certificate attestation Karama, embassy legalization Dubai, apostille UAE, degree equivalency MOE, marriage certificate attestation, birth certificate attestation',
  },
  notary: {
    title: 'Dubai Courts & Notary Public Legal Services | Power of Attorney & MOA | ESS',
    desc: 'Certified Dubai Courts & Private Notary services. General & Special Power of Attorney (POA), corporate MOA amendments, local service agent agreements, and non-Muslim wills.',
    keywords: 'Dubai notary public, private notary Karama, Power of Attorney Dubai, POA typing, MOA notary signing, legal declaration, Dubai courts civil suit, non muslim wills Dubai',
  },
  typing: {
    title: 'MOJ Certified Legal Translation & PRO Typing Services Dubai | ESS',
    desc: 'Ministry of Justice (MOJ) certified legal translation into 30+ languages, government NOC petition drafting, corporate board resolutions, and embassy visa application dockets.',
    keywords: 'Legal translation Dubai, MOJ certified translation Karama, Arabic translation Dubai, government NOC typing, embassy visa application, court document translation, corporate PRO typing',
  },
  salem: {
    title: 'DHA Salem Medical Fitness Testing Karama (KMFC) | 2Hr, 6Hr & 24Hr Results | ESS',
    desc: 'Co-located Karama Medical Fitness Express Service Center (KMFC / DHA Salem). Instant visa medical screening with VIP 2-hour, Urgent 6-hour, and Standard 24-hour result delivery.',
    keywords: 'DHA Salem Karama, Karama medical fitness center, KMFC Dubai, visa medical test Karama, express medical fitness 2 hours, blood test x ray residency Dubai, DHA Salem VIP medical',
  },
  rta: {
    title: 'RTA Dubai Transport & Traffic Services | Driving License & Mulkiya Renewal | ESS',
    desc: 'Official RTA typing counter at Karama Business Center. UAE driving license renewal, International Driving Permits (IDP), vehicle Mulkiya registration renewal, and traffic fine payments.',
    keywords: 'RTA Karama, driving license renewal Dubai, vehicle Mulkiya renewal, international driving permit IDP, traffic fine inquiry Dubai, car ownership transfer, RTA Dubai services',
  },
  tawjeeh: {
    title: 'Tawjeeh Center Karama Dubai | Mandatory Worker Awareness Classes | ESS',
    desc: 'Authorized Tawjeeh Center in Al Karama. Mandatory worker awareness training sessions in 16 languages, UAE labor law orientation, and secure Emirates ID/passport handover.',
    keywords: 'Tawjeeh Karama, Tawjeeh center Dubai, worker awareness class MOHRE, UAE labor law orientation, worker education certificate Dubai, labor rights UAE',
  },
  tadbeer: {
    title: 'Tadbeer Domestic Worker Services Dubai | Housemaid & Nanny Sponsorship | ESS',
    desc: 'Licensed Tadbeer services at Karama Business Center. Private sponsorship of housemaids, nannies, and domestic workers, Tadbeer center sponsorship, medicals, and maid visa renewal.',
    keywords: 'Tadbeer Karama, housemaid visa Dubai, nanny visa sponsorship, domestic worker visa UAE, Tadbeer maid contract renewal, maid medical test Karama, domestic labor Dubai',
  },
  'vip-mobile': {
    title: 'VIP Government Concierge & Mobile Doorstep Van Dubai | ESS',
    desc: 'Executive VIP Majlis lounge service and state-of-the-art mobile government van bringing Amer, Tasheel, Emirates ID biometrics, and Salem medical blood collection to your doorstep.',
    keywords: 'VIP mobile government van Dubai, doorstep visa service Dubai, VIP Majlis government service, executive corporate PRO concierge, mobile biometric van Dubai, ESS doorstep service',
  },
};

function getServiceSeo(serviceSlug) {
  const cleanName = serviceSlug.replace(/^(amer|det|tasheel|icp|dm|ohc|atlas|notary|typing|salem|rta|tawjeeh|tadbeer|vip|courts)-/, '');
  const titleWords = cleanName.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  if (serviceSlug.includes('golden-visa')) {
    return {
      title: 'UAE Golden Visa (10-Year Residency) Application Dubai | ESS & Amer Lic. #772',
      desc: 'Apply for official UAE 10-Year Golden Visa in Dubai for property investors, entrepreneurs, scientists, and executives. Pre-nomination vetting, ICP biometrics & DHA Salem medical under one roof.',
      keywords: 'UAE Golden Visa Dubai, 10 year Golden Visa, real estate Golden Visa AED 2M, Golden Visa requirements Dubai, Amer Golden Visa Karama, executive Golden Visa UAE, Golden Visa nominations',
    };
  }

  if (serviceSlug.startsWith('salem-')) {
    if (serviceSlug.includes('2hr') || serviceSlug.includes('vip')) {
      return {
        title: 'VIP Express DHA Salem Medical Fitness (2-Hour Results) | KMFC Karama Dubai',
        desc: 'Ultra-fast VIP 2-hour DHA Salem medical fitness results with luxury VIP lounge hospitality, priority phlebotomy, and rapid chest X-ray processing at Karama Medical Center (KMFC).',
        keywords: 'VIP medical fitness Dubai, 2 hour visa medical test, VIP Salem medical test Karama, luxury visa medical lounge, KMFC VIP medical, DHA express results',
      };
    }
    if (serviceSlug.includes('6hr') || serviceSlug.includes('urgent')) {
      return {
        title: 'Urgent DHA Salem Medical Fitness Test (6-Hour Results) | KMFC Karama Dubai',
        desc: 'Fast-track DHA Salem medical fitness test delivering official ministry-certified results within 6 hours. Same-day medical certificate for urgent residency stamping.',
        keywords: 'Urgent medical fitness Dubai, 6 hour Salem medical test, fast visa medical Karama, express DHA medical screening, KMFC urgent medical, DHA Salem 6hr',
      };
    }
    return {
      title: `${titleWords} | DHA Salem Medical Fitness Karama (KMFC) | ESS Dubai`,
      desc: `Official DHA Salem medical fitness examination for UAE residency visa stamping at Karama Medical Fitness Express Service Center (KMFC). Fast certified results with direct DHA sync.`,
      keywords: `DHA Salem medical test, Karama medical center, KMFC Dubai, visa medical fitness Karama, blood test chest x-ray residency, ${titleWords} Dubai`,
    };
  }

  if (serviceSlug.startsWith('amer-')) {
    return {
      title: `${titleWords} | Official Amer Center Karama Dubai (Lic. #772) | ESS`,
      desc: `Official GDRFA Dubai processing for ${titleWords}. Fast-track document audit, electronic application lodgement, and status tracking at authorized Amer Center Karama.`,
      keywords: `Amer Center Karama, Amer Dubai, GDRFA ${titleWords}, Amer License 772, residency visa Dubai, ${titleWords} requirements, Amer center fees Dubai`,
    };
  }

  if (serviceSlug.startsWith('det-')) {
    return {
      title: `${titleWords} | DET Dubai Economy & Tourism Counter Karama | ESS`,
      desc: `Official Dubai Department of Economy and Tourism (DET) commercial processing for ${titleWords}. Fast mainland trade licensing, MOA signing, and instant regulatory clearances.`,
      keywords: `DET Dubai, DED ${titleWords}, Dubai commercial license, business setup Karama, mainland license Dubai, ${titleWords} cost, trade license registration`,
    };
  }

  if (serviceSlug.startsWith('tasheel-')) {
    return {
      title: `${titleWords} | Tasheel Center Karama Dubai (#4108) | ESS`,
      desc: `Authorized MOHRE labor processing for ${titleWords}. Electronic work permit lodgement, quota verification, unified contracts, and establishment compliance at Tasheel Karama.`,
      keywords: `Tasheel Karama, MOHRE ${titleWords}, electronic work permit Dubai, Tasheel 4108, labor quota Dubai, employment contract MOHRE, ${titleWords} processing`,
    };
  }

  if (serviceSlug.startsWith('icp-')) {
    return {
      title: `${titleWords} | ICP Federal Authority Counter Karama | ESS Dubai`,
      desc: `Official ICP Federal Authority for Identity, Citizenship, Customs and Port Security processing for ${titleWords}. Fast typing, biometric appointments, and express card delivery.`,
      keywords: `ICP Dubai, Emirates ID ${titleWords}, ICP smart services, Emirates ID typing Karama, biometric appointment Dubai, ${titleWords} requirements`,
    };
  }

  if (serviceSlug.startsWith('dm-')) {
    return {
      title: `${titleWords} | Dubai Municipality & DLD Ejari Services Karama | ESS`,
      desc: `Official Dubai Municipality and Dubai Land Department processing for ${titleWords}. Certified Ejari registration, building permits, product registration, and health compliance.`,
      keywords: `Dubai Municipality, DLD Ejari ${titleWords}, Ejari registration Karama, Montaji registration, Foodwatch Dubai, ${titleWords} permit`,
    };
  }

  if (serviceSlug.startsWith('ohc-')) {
    return {
      title: `${titleWords} | OHC Occupational Health Card Karama Dubai | ESS`,
      desc: `Authorized DHA Occupational Health Card (OHC) typing and medical testing for ${titleWords} in Dubai. Required screening for food handlers, salon staff, and commercial drivers.`,
      keywords: `OHC card Dubai, occupational health card Karama, DHA OHC ${titleWords}, food handlers medical, salon health card, driver health screening Dubai`,
    };
  }

  if (serviceSlug.startsWith('atlas-')) {
    return {
      title: `${titleWords} | MOFA & Embassy Document Attestation Dubai | ESS`,
      desc: `Official document attestation, MOFA authentication, and foreign embassy legalization for ${titleWords}. Safe courier handling, apostille, and educational equivalency in Dubai.`,
      keywords: `MOFA attestation Dubai, embassy legalization, certificate attestation Karama, ${titleWords} attestation, apostille UAE, degree verification Dubai`,
    };
  }

  if (serviceSlug.startsWith('notary-') || serviceSlug.startsWith('courts-')) {
    return {
      title: `${titleWords} | Dubai Courts & Private Notary Public Karama | ESS`,
      desc: `Certified Dubai Courts and Private Notary legal typing and notarization for ${titleWords}. Power of Attorney (POA), corporate MOA amendments, and legal declarations.`,
      keywords: `Dubai notary public, private notary Karama, Power of Attorney Dubai, POA typing, ${titleWords} notarization, Dubai courts legal typing`,
    };
  }

  if (serviceSlug.startsWith('typing-')) {
    return {
      title: `${titleWords} | MOJ Certified Legal Translation & Typing Dubai | ESS`,
      desc: `Ministry of Justice (MOJ) certified legal translation and official typing for ${titleWords}. Professional drafting of government NOC letters, board resolutions, and legal petitions.`,
      keywords: `Legal translation Dubai, MOJ translation Karama, ${titleWords} typing, Arabic translation Dubai, court legal translation, government petition drafting`,
    };
  }

  if (serviceSlug.startsWith('rta-')) {
    return {
      title: `${titleWords} | RTA Dubai Transport Services Counter Karama | ESS`,
      desc: `Official RTA Dubai processing for ${titleWords}. Driving license renewal, vehicle registration Mulkiya renewal, and international driving permit (IDP) issuance at Karama Center.`,
      keywords: `RTA Karama, RTA ${titleWords}, driving license renewal Dubai, vehicle Mulkiya renewal, international driving permit, traffic fine inquiry Dubai`,
    };
  }

  if (serviceSlug.startsWith('tawjeeh-')) {
    return {
      title: `${titleWords} | Tawjeeh Center Karama Dubai | MOHRE Worker Awareness | ESS`,
      desc: `Authorized Tawjeeh processing for ${titleWords}. Mandatory worker awareness training in 16 languages, labor contract explanation, and UAE labor law orientation.`,
      keywords: `Tawjeeh Karama, Tawjeeh center Dubai, worker awareness class MOHRE, ${titleWords}, UAE labor law orientation, worker education Dubai`,
    };
  }

  if (serviceSlug.startsWith('tadbeer-')) {
    return {
      title: `${titleWords} | Tadbeer Domestic Worker Services Karama | ESS Dubai`,
      desc: `Authorized Tadbeer processing for ${titleWords}. Domestic worker visa sponsorship, housemaid visa issuance, contracts, and medical fitness in Dubai.`,
      keywords: `Tadbeer Karama, domestic worker visa Dubai, housemaid visa, nanny sponsorship UAE, ${titleWords}, maid visa renewal Karama`,
    };
  }

  if (serviceSlug.startsWith('vip-')) {
    return {
      title: `${titleWords} | VIP Majlis & Mobile Government Concierge Dubai | ESS`,
      desc: `Exclusive executive concierge and doorstep mobile van processing for ${titleWords}. Private biometric typing and blood collection at your home or office.`,
      keywords: `VIP government service Dubai, doorstep visa van, VIP Majlis Karama, ${titleWords}, executive PRO concierge Dubai, mobile biometric unit`,
    };
  }

  return {
    title: `${titleWords} | Government Services Processing Dubai | ESS Karama`,
    desc: `Official government transaction processing for ${titleWords} at Karama Business Center under Emirates Secretarial Services (ESS). Fast-track audit and approved submission.`,
    keywords: `${titleWords} Dubai, government services Karama, ESS Dubai, typing center Al Karama, ${titleWords} requirements, authorized government processing`,
  };
}

function getArticleSeo(slug) {
  const cleanTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${cleanTitle} Guide 2026 | Knowledge Hub | ESS Dubai`,
    desc: `Comprehensive official guide on ${cleanTitle}. Detailed step-by-step procedure, required documents, government authority fees, and tips for fast approval in Dubai.`,
    keywords: `${cleanTitle}, UAE government guide, Dubai visa procedure, Emirates ID guide, trade license steps Dubai, ESS knowledge hub, official regulations 2026`,
  };
}

function getMetadataForRoute(route) {
  const canonicalUrl = `https://ess.ae${route}`;

  // 1. Core pages match
  if (CORE_PAGES_META[route]) {
    const meta = CORE_PAGES_META[route];
    return {
      title: meta.title,
      description: meta.desc,
      keywords: meta.keywords,
      canonicalUrl,
    };
  }

  // 2. Department pages (/department/:id)
  if (route.startsWith('/department/')) {
    const deptId = route.replace('/department/', '').trim();
    if (DEPARTMENTS_META[deptId]) {
      const meta = DEPARTMENTS_META[deptId];
      return {
        title: meta.title,
        description: meta.desc,
        keywords: meta.keywords,
        canonicalUrl,
      };
    }
  }

  // 3. Service pages (/service/:id)
  if (route.startsWith('/service/')) {
    const serviceId = route.replace('/service/', '').trim();
    const meta = getServiceSeo(serviceId);
    return {
      title: meta.title,
      description: meta.desc,
      keywords: meta.keywords,
      canonicalUrl,
    };
  }

  // 4. Knowledge hub articles (/knowledge-hub/:slug)
  if (route.startsWith('/knowledge-hub/')) {
    const slug = route.replace('/knowledge-hub/', '').trim();
    const meta = getArticleSeo(slug);
    return {
      title: meta.title,
      description: meta.desc,
      keywords: meta.keywords,
      canonicalUrl,
    };
  }

  // Fallback
  const parts = route.split('/').filter(Boolean);
  const fallbackTitle = parts.length > 0
    ? `${parts[parts.length - 1].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} | ESS Dubai`
    : 'Emirates Secretarial Services (ESS) | Government Services & Medical Fitness Dubai';

  return {
    title: fallbackTitle,
    description: 'Emirates Secretarial Services (ESS) & Karama Business Center (KBC). Authorized private center for Amer (Lic. #772), Tasheel (#4108), DET (#902), DLD Ejari, and DHA Salem medical fitness in Dubai.',
    keywords: 'Emirates Secretarial Services, ESS Dubai, Karama Business Center, KBC, Amer Center Karama, Tasheel Dubai, DHA Salem medical fitness, Golden Visa Dubai',
    canonicalUrl,
  };
}

console.log(`Starting physical HTML folder generation for ${routes.size} routes...`);

let generatedCount = 0;

for (const route of routes) {
  const targetDir = path.join(distDir, route);
  fs.mkdirSync(targetDir, { recursive: true });

  const seo = getMetadataForRoute(route);

  // Customize title, description, keywords, canonical URL, and OG metadata for this physical route
  let pageHtml = templateHtml;

  // Replace Title
  pageHtml = pageHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${seo.title}</title>`
  );

  // Replace Meta Description
  if (pageHtml.includes('name="description"')) {
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${seo.description.replace(/"/g, '&quot;')}" />`
    );
  } else {
    pageHtml = pageHtml.replace(
      '</head>',
      `  <meta name="description" content="${seo.description.replace(/"/g, '&quot;')}" />\n  </head>`
    );
  }

  // Replace Meta Keywords
  if (pageHtml.includes('name="keywords"')) {
    pageHtml = pageHtml.replace(
      /<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i,
      `<meta name="keywords" content="${seo.keywords.replace(/"/g, '&quot;')}" />`
    );
  } else {
    pageHtml = pageHtml.replace(
      '</head>',
      `  <meta name="keywords" content="${seo.keywords.replace(/"/g, '&quot;')}" />\n  </head>`
    );
  }

  // Replace Canonical Link
  if (pageHtml.includes('<link rel="canonical"')) {
    pageHtml = pageHtml.replace(
      /<link rel="canonical" href=".*?" \/>/i,
      `<link rel="canonical" href="${seo.canonicalUrl}" />`
    );
  } else {
    pageHtml = pageHtml.replace(
      '</head>',
      `  <link rel="canonical" href="${seo.canonicalUrl}" />\n  </head>`
    );
  }

  // Replace og:url
  pageHtml = pageHtml.replace(
    /<meta property="og:url" content=".*?" \/>/i,
    `<meta property="og:url" content="${seo.canonicalUrl}" />`
  );

  // Replace og:title
  pageHtml = pageHtml.replace(
    /<meta property="og:title" content=".*?" \/>/i,
    `<meta property="og:title" content="${seo.title.replace(/"/g, '&quot;')}" />`
  );

  // Replace og:description
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${seo.description.replace(/"/g, '&quot;')}" />`
  );

  // Replace twitter:title
  pageHtml = pageHtml.replace(
    /<meta name="twitter:title" content=".*?" \/>/i,
    `<meta name="twitter:title" content="${seo.title.replace(/"/g, '&quot;')}" />`
  );

  // Replace twitter:description
  pageHtml = pageHtml.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${seo.description.replace(/"/g, '&quot;')}" />`
  );

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, pageHtml, 'utf-8');
  generatedCount++;
}

console.log(`Successfully generated physical index.html with custom meta heading, description & keywords for ${generatedCount} routes in dist/!`);
