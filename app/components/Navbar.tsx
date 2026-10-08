import { ArrowRight, Leaf, Menu } from "lucide-react";

const NavbarBar = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="BloomLife home">
          <span className="brand-mark"><Leaf size={19} strokeWidth={2} /></span>
          <span>Bloom<span className="brand-light">Life</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#programs">Programs</a>
          <a href="#coaching">Coaching</a>
          <a href="#nutrition">Nutrition</a>
          <a href="#mindfulness">Mindfulness</a>
        </nav>
        <a className="header-cta" href="#join">Start your journey <ArrowRight size={15} /></a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation" title="Open navigation"><Menu size={21} /></summary>
          <nav className="mobile-nav-panel" aria-label="Mobile navigation">
            <a href="#programs">Programs</a>
            <a href="#coaching">Coaching</a>
            <a href="#nutrition">Nutrition</a>
            <a href="#mindfulness">Mindfulness</a>
            <a href="#join">Start your journey <ArrowRight size={15} /></a>
          </nav>
        </details>
      </div>
    </header>
  );
};

export default NavbarBar;
