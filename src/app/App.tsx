import { Toaster } from 'sonner';

import { EnhancedHeader } from '@/app/components/enhanced-header';
import { EnhancedHero } from '@/app/components/enhanced-hero';
import { EnhancedServices } from '@/app/components/enhanced-services';
import { EnhancedProjects } from '@/app/components/enhanced-projects';
import { EnhancedContact } from '@/app/components/enhanced-contact';
import { EnhancedFooter } from '@/app/components/enhanced-footer';
import { ScrollToTop } from '@/app/components/scroll-to-top';
import { PageLoader } from '@/app/components/page-loader';

// ✅ ABOUT TEASER (HOME PAGE)
import { AboutTeaser } from "../sections/about-teaser";


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <PageLoader />
      <Toaster position="top-right" richColors />
      <ScrollToTop />

      {/* Header */}
      <EnhancedHeader />

      <main>
        {/* Hero Section */}
        <EnhancedHero />

        {/* ✅ ABOUT TEASER (SHORT & POWERFUL) */}
        <AboutTeaser />

        {/* Services */}
        <EnhancedServices />

        {/* Projects */}
        <EnhancedProjects />

        {/* Contact */}
        <EnhancedContact />
      </main>

      {/* Footer */}
      <EnhancedFooter />
    </div>
  );
}
