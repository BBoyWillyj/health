import { ArrowUpRight, Leaf } from "lucide-react";

const FooterSec = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="#top" aria-label="BloomLife home">
              <span className="brand-mark"><Leaf size={16} strokeWidth={2} /></span>
              <span>Bloom<span className="brand-light">Life</span></span>
            </a>
            <p>Building a world where personalized wellness feels more accessible, whatever your starting point.</p>
            <a className="footer-note-link" href="#join">Find your next step <ArrowUpRight size={15} /></a>
          </div>
          <div className="footer-links-column">
            <h2>Explore</h2>
            <a href="#programs">Programs</a>
            <a href="#coaching">Fitness coaching</a>
            <a href="#nutrition">Nutrition</a>
            <a href="#mindfulness">Mindfulness</a>
          </div>
          <div className="footer-links-column">
            <h2>Your journey</h2>
            <a href="#how-it-works">How it works</a>
            <a href="#tracking">Health tracking</a>
            <a href="#testimonial-title">Member story</a>
            <a href="#join">Get started</a>
          </div>
          <div className="footer-signoff">
            <span className="footer-flower" aria-hidden="true">✳</span>
            <p>Grow at<br /><em>your own pace.</em></p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 BloomLife. All rights reserved.</span>
          <span className="affiliate-note">BloomLife may earn a commission from recommended services.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSec;
