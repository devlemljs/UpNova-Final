
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Mockups } from './components/Mockups';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Team } from './components/Team';
import { Story } from './components/Story';
import { Modal, ContactModalContent, ProcessModalContent } from './components/Modal';

export default function App() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'subscribe' | 'contact' | 'process' | null>(null);
  const [view, setView] = useState<'main' | 'team' | 'story'>('main');

  const openModal = (type: 'privacy' | 'terms' | 'contact' | 'process') => setModalType(type);
  const closeModal = () => setModalType(null);

  const navigateTo = (newView: 'main' | 'team' | 'story', sectionId?: string) => {
    setView(newView);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const renderContent = () => {
    if (view === 'team') {
      return (
        <>
          <Navbar onHomeClick={() => navigateTo('main')} onGetStarted={() => openModal('process')} />
          <Team onBack={() => navigateTo('main', 'about')} onStoryClick={() => navigateTo('story')} />
        </>
      );
    }

    if (view === 'story') {
      return (
        <>
          <Navbar onHomeClick={() => navigateTo('main')} onGetStarted={() => openModal('process')} />
          <Story onBack={() => navigateTo('main', 'about')} />
        </>
      );
    }

    return (
      <>
        <Navbar onHomeClick={() => navigateTo('main')} onGetStarted={() => openModal('process')} />
        <main>
          <Hero onLearnMore={() => openModal('contact')} />
          <div className="relative z-10 bg-white">
            <About onTeamClick={() => navigateTo('team')} onStoryClick={() => navigateTo('story')} />
            <Services />
          </div>
          <CTA onContactClick={() => openModal('contact')} />
          <div className="relative z-20 bg-white">
            <Pricing onSubscribe={() => {}} />
            <Mockups />
            <Contact />
          </div>
        </main>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-orange/10">
      {renderContent()}
      <Footer onOpenModal={openModal} />

      <Modal isOpen={modalType === 'privacy'} onClose={closeModal} title="Privacy Policy">
        <div className="space-y-4 text-slate-600">
          <section>
            <h4 className="text-slate-900 font-bold mb-2">1. Information We Collect</h4>
            <p>We only collect personal information that you voluntarily provide, such as your name, email address, and business details, through our contact forms.</p>
          </section>
          <section>
            <h4 className="text-slate-900 font-bold mb-2">2. Purpose of Collection</h4>
            <p>This data is used solely to communicate with you regarding your project and to provide the requested web services.</p>
          </section>
          <section>
            <h4 className="text-slate-900 font-bold mb-2">3. Data Storage</h4>
            <p>Your data is stored securely and will never be sold or shared with third parties for marketing purposes.</p>
          </section>
          <section>
            <h4 className="text-slate-900 font-bold mb-2">4. Your Rights</h4>
            <p>Under the Philippine Data Privacy Act of 2012, you have the right to access, correct, or request the deletion of your personal data at any time.</p>
          </section>
          <section>
            <h4 className="text-slate-900 font-bold mb-2">5. Contact Us</h4>
            <p>For any privacy concerns, please contact us at upnova@gmail.com.</p>
          </section>
        </div>
      </Modal>

      <Modal isOpen={modalType === 'terms'} onClose={closeModal} title="Terms of Service">
        <div className="space-y-4 text-slate-600">
          <section>
            <h4 className="text-slate-900 font-bold mb-2">1. Scope of Work</h4>
            <p>UpNova will provide a One-Page Landing Page/Website as described in the project proposal. Any extra pages or features requested after signing will be charged as "Additional Work."</p>
          </section>
          <section>
            <h4 className="text-slate-900 font-bold mb-2">2. Domain & Hosting</h4>
            <p><span className="font-bold">Client Responsibility:</span> The Client is responsible for purchasing and renewing their own domain name (e.g., .com) and any third-party hosting fees.</p>
            <p><span className="font-bold">Non-Payment:</span> If the Client fails to renew their domain, UpNova is not responsible for the website going offline.</p>
          </section>
          <section>
            <h4 className="text-slate-900 font-bold mb-2">3. Payment Terms</h4>
            <p><span className="font-bold">Downpayment:</span> A non-refundable 50% downpayment is required to start the project.</p>
            <p><span className="font-bold">Final Payment:</span> The remaining 50% is due upon completion and before the website is "turned over" to the Client’s domain.</p>
          </section>
          <section>
            <h4 className="text-slate-900 font-bold mb-2">4. Termination</h4>
            <p>Either party may end this agreement with 7 days' notice. If the Client cancels, UpNova will keep the downpayment as a "kill fee" for work already started.</p>
          </section>
          <section>
            <h4 className="text-slate-900 font-bold mb-2">5. Ownership</h4>
            <p>Once the final payment is made, the Client owns the website's content. UpNova retains the right to display the site in its portfolio.</p>
          </section>
        </div>
      </Modal>

      <Modal isOpen={modalType === 'contact'} onClose={closeModal} title="Contact Us" hideHeader>
        <ContactModalContent onClose={closeModal} />
      </Modal>

      <Modal isOpen={modalType === 'process'} onClose={closeModal} title="Our Process">
        <ProcessModalContent onClose={closeModal} />
      </Modal>
    </div>
  );
}
