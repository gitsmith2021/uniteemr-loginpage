import { HealthcareSlider } from './components/HealthcareSlider';
import { LoginForm } from './components/LoginForm';
import { Mail } from 'lucide-react';

// Import logos
import isoHippa from '../imports/iso_hippa2.svg';
import malaffiLogo from '../imports/malaffi_logo.png';
import rLogo from '../imports/rlogo-2.png';
import dhaLogo from '../imports/un_dha_logo.png';
import nabidhLogo from '../imports/un_nabidh_logo.png';

const YEAR = new Date().getFullYear();

export default function App() {
  return (
    <div className="min-h-screen lg:h-screen flex flex-col bg-[#f8fafc] lg:overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#00b8cd]/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#00b8cd]/10 blur-[100px]" />
      </div>

      {/* Mobile Header — visible below lg */}
      <div className="lg:hidden bg-[#00b8cd] py-4 sm:py-6 px-4 sm:px-6 text-center flex-shrink-0 relative z-10 shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-1 sm:mb-2">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-md flex items-center justify-center">
            <span className="text-[#00b8cd] font-bold text-sm sm:text-base">U</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-white">Unite EMR</span>
        </div>
        <p className="text-white/90 text-xs sm:text-sm">Smart Dashboards for Seamless Clinic Workflows</p>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 sm:p-6 lg:p-6 relative z-10 min-h-0 w-full max-w-7xl mx-auto overflow-y-auto lg:overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 sm:gap-8 lg:gap-16 lg:h-full">

          {/* Left Column: Slider + Logos at bottom */}
          <div className="order-2 lg:order-1 w-full lg:w-[60%] flex flex-col items-center lg:items-start lg:justify-between lg:py-6">
            {/* Slider */}
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm border border-gray-100 p-2.5 lg:p-3 lg:mt-auto">
              <HealthcareSlider />
            </div>

            {/* Logos — centered below slider, sits at bottom */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center w-full mt-6 lg:mt-auto lg:pb-2">
              <img src={malaffiLogo} alt="Malaffi" loading="lazy" decoding="async" className="h-7 sm:h-8 md:h-9 w-auto object-contain" />
              <img src={rLogo} alt="Partner" loading="lazy" decoding="async" className="h-6 sm:h-7 md:h-8 max-h-8 w-auto object-contain" />
              <img src={dhaLogo} alt="DHA" loading="lazy" decoding="async" className="h-7 sm:h-8 md:h-9 w-auto object-contain" />
              <img src={nabidhLogo} alt="NABIDH" loading="lazy" decoding="async" className="h-7 sm:h-8 md:h-9 w-auto object-contain" />
              <img src={isoHippa} alt="ISO & HIPAA Compliant" loading="lazy" decoding="async" className="h-7 sm:h-8 md:h-9 w-auto object-contain" />
            </div>
          </div>

          {/* Right Column: Login Form + Copyright at bottom */}
          <div className="order-1 lg:order-2 w-full lg:w-[40%] flex flex-col items-center lg:items-start lg:justify-between lg:py-6">
            {/* Login Form */}
            <div className="w-full max-w-md lg:mt-auto">
              <LoginForm />
            </div>

            {/* Copyright + Links — left-aligned, sits at bottom */}
            <div className="w-full max-w-md mt-6 lg:mt-auto lg:pb-2 flex flex-col items-center lg:items-start gap-1 text-[10px] sm:text-xs text-gray-400 px-4 sm:px-6 lg:px-8">
              <p>© {YEAR} Unitecare Software Solutions FZE. All rights reserved.</p>
              <div className="flex items-center gap-6 sm:gap-6 mt-4">
                <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
                <a href="mailto:support@unite.care" className="hover:text-gray-600 transition-colors flex items-center gap-1"><Mail className="h-3 w-3" />support@unite.care</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
