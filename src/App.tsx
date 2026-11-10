import React, { useState, useEffect } from 'react';
import { Language, ServiceItem, PageView } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DepartmentsGrid } from './components/DepartmentsGrid';
import { ServiceFinder } from './components/ServiceFinder';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { VipExperience } from './components/VipExperience';
import { FeeCalculator } from './components/FeeCalculator';
import { BookingModal } from './components/BookingModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ClientLogoCarousel } from './components/ClientLogoCarousel';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CustomerSupportBar } from './components/CustomerSupportBar';
import { DepartmentPage } from './components/DepartmentPage';
import { SingleServicePage } from './components/SingleServicePage';
import { AboutPage } from './components/AboutPage';
import { DepartmentsServicesPage } from './components/DepartmentsServicesPage';
import { GalleryPage } from './components/GalleryPage';
import { FaqPage } from './components/FaqPage';
import { ContactPage } from './components/ContactPage';
import { OurTeamPage } from './components/OurTeamPage';
import { CeoPage } from './components/CeoPage';
import { BlogPage } from './components/BlogPage';
import { SingleArticlePage } from './components/SingleArticlePage';
import { AwardsPage } from './components/AwardsPage';
import { ClientsPage } from './components/ClientsPage';
import { EventsPage } from './components/EventsPage';
import { PriceListPage } from './components/PriceListPage';
import { SERVICES } from './data/departmentsData';
import { applyRouteSeo } from './utils/routeSeo';
import { resolveRoute, getDepartmentPath, getServicePath } from './utils/router';

const parseRoute = (): PageView => {
  // Check if 404 fallback stored a redirect path in sessionStorage or in ?p= query param
  let redirectTarget: string | null = null;
  try {
    const stored = sessionStorage.getItem('ess_redirect_path');
    if (stored) {
      sessionStorage.removeItem('ess_redirect_path');
      redirectTarget = stored;
    }
  } catch (e) {
    // sessionStorage might be restricted in some iframe contexts
  }

  if (!redirectTarget && window.location.search) {
    const urlParams = new URLSearchParams(window.location.search);
    const p = urlParams.get('p');
    if (p) {
      redirectTarget = p;
    } else if (window.location.search.startsWith('?/')) {
      redirectTarget = window.location.search.substring(1);
    }
  }

  if (redirectTarget) {
    // Restore the clean target path in the browser address bar without reloading
    const cleanTarget = redirectTarget.startsWith('/') ? redirectTarget : '/' + redirectTarget;
    window.history.replaceState(null, '', cleanTarget);
  }

  // Normalize /index.html in URL bar to clean /
  if (window.location.pathname === '/index.html') {
    window.history.replaceState(null, '', '/');
  }

  const res = resolveRoute(window.location.pathname, window.location.hash);
  if (res.isLegacyRedirect && res.canonicalPath && window.location.pathname !== res.canonicalPath) {
    window.history.replaceState(null, '', res.canonicalPath);
  }

  return res.pageView.type === 'not_found' ? { type: 'home' } : res.pageView;
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [pageView, setPageView] = useState<PageView>(parseRoute());
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedBookingService, setPreselectedBookingService] = useState<ServiceItem | null>(null);
  const [bookingChannel, setBookingChannel] = useState<'flagship' | 'vip_majlis' | 'doorstep_van'>('flagship');

  // Detail Modal State
  const [detailService, setDetailService] = useState<ServiceItem | null>(null);

  // Search & Filter State
  const [serviceSearchQuery, setServiceSearchQuery] = useState('');
  const [selectedDeptId, setSelectedDeptId] = useState<string | undefined>(undefined);

  // Fee Calculator Preselection
  const [calculatorServiceId, setCalculatorServiceId] = useState<string>(SERVICES[0].id);

  // Sync RTL/LTR with HTML root document
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Sync document title, meta description, keywords, OpenGraph and Twitter tags on route navigation
  useEffect(() => {
    applyRouteSeo(window.location.pathname);
    // Push pageview event to Google Tag Manager (GTM-WC8PTH7G)
    try {
      const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'page_view',
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
      });
    } catch {
      // Safe fallback
    }
  }, [pageView]);

  // Handle URL navigation and browser back/forward buttons
  useEffect(() => {
    // Clean up internal query tokens if present in URL
    if (window.location.search && window.location.search.includes('__aistudio_auth_token')) {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.delete('__aistudio_auth_token');
      const newSearch = urlParams.toString() ? `?${urlParams.toString()}` : '';
      const cleanUrl = `${window.location.pathname}${newSearch}`;
      window.history.replaceState(null, '', cleanUrl);
    }

    const handleLocationChange = () => {
      setPageView(parseRoute());
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const navigateTo = (path: string, newPageView: PageView) => {
    if (window.location.pathname !== path || window.location.hash) {
      window.history.pushState(null, '', path);
    }
    setPageView(newPageView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => navigateTo('/', { type: 'home' });
  const navigateToAbout = () => navigateTo('/about', { type: 'about' });
  const navigateToDepartments = () => navigateTo('/departments', { type: 'departments' });
  const navigateToGallery = () => navigateTo('/gallery', { type: 'gallery' });
  const navigateToFaq = () => navigateTo('/faq', { type: 'faq' });
  const navigateToContact = () => navigateTo('/contact', { type: 'contact' });
  const navigateToTeam = () => navigateTo('/team', { type: 'team' });
  const navigateToCeo = () => navigateTo('/ceo', { type: 'ceo' });
  const navigateToBlog = (slug?: string) =>
    navigateTo(slug ? `/knowledge-hub/${slug}` : '/knowledge-hub', { type: 'blog', postSlug: slug });
  const navigateToArticle = (slug: string) =>
    navigateTo(`/knowledge-hub/${slug}`, { type: 'blog', postSlug: slug });
  const navigateToAwards = () => navigateTo('/awards', { type: 'awards' });
  const navigateToClients = () => navigateTo('/clients', { type: 'clients' });
  const navigateToEvents = () => navigateTo('/events', { type: 'events' });
  const navigateToPriceList = () => navigateTo('/pricelist', { type: 'pricelist' });
  const navigateToDepartment = (deptId: string) => {
    const path = getDepartmentPath(deptId, language);
    navigateTo(path, { type: 'department', deptId });
  };
  const navigateToService = (serviceId: string) => {
    const path = getServicePath(serviceId, undefined, language);
    const service = SERVICES.find((s) => s.id === serviceId);
    navigateTo(path, { type: 'service', serviceId, deptId: service?.departmentId });
  };

  const handleNavigatePage = (page: string) => {
    if (page === 'home') {
      navigateToHome();
    } else if (page === 'about') {
      navigateToAbout();
    } else if (page === 'departments' || page === 'services') {
      navigateToDepartments();
    } else if (page === 'gallery') {
      navigateToGallery();
    } else if (page === 'faq') {
      navigateToFaq();
    } else if (page === 'contact') {
      navigateToContact();
    } else if (page === 'team') {
      navigateToTeam();
    } else if (page === 'ceo') {
      navigateToCeo();
    } else if (page === 'blog') {
      navigateToBlog();
    } else if (page === 'awards' || page === 'certificates') {
      navigateToAwards();
    } else if (page === 'clients' || page === 'customers') {
      navigateToClients();
    } else if (page === 'events') {
      navigateToEvents();
    } else if (page === 'pricelist' || page === 'prices' || page === 'pricing' || page === 'calculator') {
      navigateToPriceList();
    } else if (page.startsWith('department/')) {
      navigateToDepartment(page.replace('department/', ''));
    } else if (page.startsWith('service/')) {
      navigateToService(page.replace('service/', ''));
    } else if (page === 'vip-mobile') {
      if (pageView.type !== 'home') {
        navigateToHome();
        setTimeout(() => {
          const el = document.getElementById(page);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(page);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigateToHome();
    }
  };

  const handleHeroSearch = (query: string) => {
    setServiceSearchQuery(query);
    setSelectedDeptId(undefined);
    navigateToDepartments();
  };

  const handleSelectDepartment = (deptId: string) => {
    setSelectedDeptId(deptId);
    setServiceSearchQuery('');
    navigateToDepartments();
  };

  const handleOpenBooking = (service?: ServiceItem, channel: 'flagship' | 'vip_majlis' | 'doorstep_van' = 'flagship') => {
    setPreselectedBookingService(service || null);
    setBookingChannel(channel);
    setIsBookingOpen(true);
  };

  const handleBookMajlis = () => {
    const goldenVisa = SERVICES.find((s) => s.id === 'golden-visa-10yr') || SERVICES[0];
    handleOpenBooking(goldenVisa, 'vip_majlis');
  };

  const handleBookMobileVan = () => {
    const mobileService = SERVICES.find((s) => s.id === 'vip-mobile-government-van' || s.id === 'ess-doorstep-mobile-van') || SERVICES[0];
    handleOpenBooking(mobileService, 'doorstep_van');
  };

  const handleCalculateFeeFromService = (service: ServiceItem) => {
    setCalculatorServiceId(service.id);
    navigateToPriceList();
  };

  const handleBookWithEstimate = (service: ServiceItem, channel: 'flagship' | 'vip_majlis' | 'doorstep_van') => {
    handleOpenBooking(service, channel);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-white text-neutral-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
      {/* Official Multi-Page Navigation Header */}
      <Header
        language={language}
        onLanguageToggle={toggleLanguage}
        onOpenBooking={() => handleOpenBooking()}
        currentPage={pageView.type}
        onNavigate={handleNavigatePage}
        onNavigateToDepartment={navigateToDepartment}
        onNavigateToService={navigateToService}
        isSubpage={pageView.type !== 'home'}
        onBackToHome={navigateToHome}
      />

      <main className="flex-1">
        {pageView.type === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              language={language}
              onSearchSubmit={handleHeroSearch}
              onOpenBooking={() => handleOpenBooking()}
              onOpenMobileBooking={handleBookMobileVan}
            />

            {/* Authorized Government Departments Grid */}
            <DepartmentsGrid
              language={language}
              selectedDepartmentId={selectedDeptId}
              onSelectDepartment={handleSelectDepartment}
              onOpenDepartmentPage={navigateToDepartment}
            />

            {/* Comprehensive Services Catalog */}
            <ServiceFinder
              language={language}
              initialQuery={serviceSearchQuery}
              selectedDepartmentId={selectedDeptId}
              onClearDeptFilter={() => setSelectedDeptId(undefined)}
              onOpenDetails={(service) => setDetailService(service)}
              onOpenServicePage={navigateToService}
              onBookService={(service) => handleOpenBooking(service)}
            />

            {/* Why Choose Us Section */}
            <WhyChooseUs
              language={language}
              onOpenBooking={() => handleOpenBooking()}
              onNavigateToDepartments={navigateToDepartments}
              onNavigateToAbout={navigateToAbout}
            />

            {/* Real Google Reviews Slider & Rating Section (4 per row, 12 reviews, Google branding) */}
            <GoogleReviewsSection language={language} />

            {/* Sliding Carousel of Regular Corporate Clients */}
            <ClientLogoCarousel
              language={language}
              onNavigateToClients={navigateToClients}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* 2026 Executive Experience: VIP Majlis & Mobile Doorstep Van */}
            <VipExperience
              language={language}
              onBookMajlis={handleBookMajlis}
              onBookMobileVan={handleBookMobileVan}
            />

            {/* Official Help & Frequently Asked Questions */}
            <FaqSection language={language} />
          </>
        )}

        {pageView.type === 'about' && (
          <AboutPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToDepartments={navigateToDepartments}
            onNavigateToContact={navigateToContact}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {pageView.type === 'departments' && (
          <DepartmentsServicesPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToDepartment={navigateToDepartment}
            onNavigateToService={navigateToService}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {pageView.type === 'team' && (
          <OurTeamPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToCeo={navigateToCeo}
            onNavigateToContact={navigateToContact}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {pageView.type === 'ceo' && (
          <CeoPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToTeam={navigateToTeam}
            onNavigateToContact={navigateToContact}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {pageView.type === 'blog' && pageView.postSlug && (
          <SingleArticlePage
            slug={pageView.postSlug}
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToKnowledgeHub={() => {
              navigateToBlog();
            }}
            onNavigateToArticle={navigateToArticle}
            onNavigateToService={navigateToService}
            onNavigateToDepartment={navigateToDepartment}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {pageView.type === 'blog' && !pageView.postSlug && (
          <BlogPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToService={navigateToService}
            onNavigateToArticle={navigateToArticle}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {pageView.type === 'awards' && (
          <AwardsPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToContact={navigateToContact}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {pageView.type === 'clients' && (
          <ClientsPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToContact={navigateToContact}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {pageView.type === 'events' && (
          <EventsPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToContact={navigateToContact}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {pageView.type === 'gallery' && (
          <GalleryPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToContact={navigateToContact}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {pageView.type === 'faq' && (
          <FaqPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToContact={navigateToContact}
            onOpenBooking={() => handleOpenBooking()}
            onNavigateToDepartment={navigateToDepartment}
            onNavigateToService={navigateToService}
          />
        )}

        {pageView.type === 'contact' && (
          <ContactPage
            language={language}
            onNavigateToHome={navigateToHome}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {pageView.type === 'department' && (
          <DepartmentPage
            deptId={pageView.deptId}
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToService={navigateToService}
            onNavigateToDepartment={navigateToDepartment}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {pageView.type === 'service' && (
          <SingleServicePage
            serviceId={pageView.serviceId}
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToDepartment={navigateToDepartment}
            onNavigateToService={navigateToService}
            onOpenBooking={handleOpenBooking}
            onCalculateFee={handleCalculateFeeFromService}
          />
        )}

        {pageView.type === 'pricelist' && (
          <PriceListPage
            language={language}
            onNavigateToHome={navigateToHome}
            onNavigateToContact={navigateToContact}
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Official Footer with Deep Multi-Page Linking */}
      <Footer
        language={language}
        onNavigatePage={handleNavigatePage}
        onNavClick={handleNavigatePage}
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToDepartment={navigateToDepartment}
        onNavigateToService={navigateToService}
      />

      {/* Non-intrusive Floating Support Bar (WhatsApp & Callback) */}
      <CustomerSupportBar language={language} />

      {/* Service Detail Modal */}
      {detailService && (
        <ServiceDetailModal
          service={detailService}
          language={language}
          onClose={() => setDetailService(null)}
          onBookService={(service) => handleOpenBooking(service)}
          onCalculateFee={handleCalculateFeeFromService}
          onOpenServicePage={navigateToService}
        />
      )}

      {/* Appointment & Doorstep Van Booking Modal */}
      {isBookingOpen && (
        <BookingModal
          isOpen={isBookingOpen}
          language={language}
          onClose={() => setIsBookingOpen(false)}
          preselectedService={preselectedBookingService}
          initialChannel={bookingChannel}
        />
      )}
    </div>
  );
}
