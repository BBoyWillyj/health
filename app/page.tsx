import Image from "next/image";
import {
  Activity,
  Apple,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  ChevronRight,
  CircleCheck,
  Dumbbell,
  Heart,
  Leaf,
  Sparkles,
  Wind,
} from "lucide-react";

const programs = [
  {
    id: "coaching",
    icon: Dumbbell,
    eyebrow: "Move with confidence",
    title: "Fitness coaching",
    description:
      "Customized movement plans that adapt to your fitness level, schedule, and available equipment.",
    className: "program-card-sage",
  },
  {
    id: "nutrition",
    icon: Apple,
    eyebrow: "Nourish, don't restrict",
    title: "Everyday nutrition",
    description:
      "Build a more supportive relationship with food through practical ideas that work in real life.",
    className: "program-card-peach",
  },
  {
    id: "mindfulness",
    icon: Brain,
    eyebrow: "Make room to reset",
    title: "Mindful moments",
    description:
      "Find approachable breathing, reflection, and sleep routines to make space in a busy day.",
    className: "program-card-lilac",
  },
  {
    id: "tracking",
    icon: Activity,
    eyebrow: "Notice your progress",
    title: "Health tracking",
    description:
      "Bring everyday habits into view and notice the patterns that matter to you.",
    className: "program-card-yellow",
  },
];

export default function Home() {
  return (
    <main id="main">
      <section className="hero section-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark"><Leaf size={14} /></span> A softer way to feel well</p>
          <h1 id="hero-title">Find your rhythm.<br /><em>Feel like you.</em></h1>
          <p className="hero-description">
            Wellness isn&apos;t one-size-fits-all. Find thoughtful support for
            movement, nourishment, and the moments in between.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#programs">
              Explore the programs <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href="#how-it-works">
              See how it works <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-reassurance">
            <span className="reassurance-icon"><CircleCheck size={18} /></span>
            <span>Small steps, expert guidance, your pace.</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="A calm, sunlit movement practice">
          <div className="hero-photo-frame">
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=85"
              alt="A woman practicing yoga in a bright, peaceful studio"
              fill
              priority
              sizes="(max-width: 760px) 90vw, 48vw"
              className="hero-photo"
            />
          </div>
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="floating-note glass-card">
            <span className="floating-note-icon"><Sparkles size={18} /></span>
            <span><strong>Your kind of progress</strong><small>Built around real life</small></span>
          </div>
          <div className="photo-caption"><span className="caption-dot" /> Make wellness feel like yours</div>
        </div>
      </section>

      <section className="intro-band" aria-label="BloomLife approach">
        <div className="intro-band-inner">
          <span>More than a plan</span><i aria-hidden="true" />
          <span>Support for the whole you</span><i aria-hidden="true" />
          <span>Progress at your pace</span>
        </div>
      </section>

      <section className="proof-section section-shell" aria-labelledby="proof-title">
        <div className="proof-copy">
          <p className="eyebrow">Good habits grow together</p>
          <h2 id="proof-title">Wellness that fits <em>your real life.</em></h2>
          <p>Find a starting point that feels doable, then keep building from there.</p>
        </div>
        <div className="proof-stat glass-card">
          <div className="stat-topline"><span className="stat-icon"><Heart size={18} /></span><span>Community rhythm</span></div>
          <strong className="stat-number">98<small>%</small></strong>
          <p className="stat-label">Weekly engagement</p>
          <p className="stat-description">Users out of 10 engage weekly to build lasting wellness habits.</p>
          <span className="stat-decoration" aria-hidden="true">✳</span>
        </div>
        <div className="proof-points">
          <div className="proof-point"><span className="proof-point-icon"><Check size={16} /></span><span><strong>Made personal</strong><small>Plans shaped around you</small></span></div>
          <div className="proof-point"><span className="proof-point-icon"><Check size={16} /></span><span><strong>Expert supported</strong><small>Guidance from real people</small></span></div>
          <div className="proof-point"><span className="proof-point-icon"><Check size={16} /></span><span><strong>Progress over pressure</strong><small>Room to find your own pace</small></span></div>
        </div>
      </section>

      <section className="program-section" id="programs" aria-labelledby="program-title">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Find your feel-good</p>
              <h2 id="program-title">A little support goes <em>a long way.</em></h2>
            </div>
            <p className="section-heading-copy">Explore the parts of wellness that matter to you. Start with one, or let them work together.</p>
          </div>
          <div className="program-grid">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <article className={`program-card ${program.className}`} id={program.id} key={program.id}>
                  <div className="program-card-top"><span className="program-icon"><Icon size={23} strokeWidth={1.7} /></span><span className="program-index">0{index + 1}</span></div>
                  <p className="program-eyebrow">{program.eyebrow}</p>
                  <h3>{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  <a className="program-link" href="#how-it-works">Explore this program <ChevronRight size={16} /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="approach-section section-shell" id="how-it-works" aria-labelledby="approach-title">
        <div className="approach-art" aria-hidden="true">
          <div className="approach-art-circle"><Leaf size={54} strokeWidth={1.15} /></div>
          <span className="approach-spark spark-a">✳</span><span className="approach-spark spark-b">✳</span>
          <div className="approach-stamp"><span>YOUR</span><strong>wellness<br />journey</strong><span>STARTS HERE</span></div>
        </div>
        <div className="approach-copy">
          <p className="eyebrow">No perfect starting point needed</p>
          <h2 id="approach-title">A good day can start <em>small.</em></h2>
          <p className="approach-description">Skip the all-or-nothing mindset. BloomLife helps you make space for steady, sustainable care that belongs in your everyday.</p>
          <ol className="steps-list">
            <li><span className="step-number">01</span><span><strong>Choose what matters today</strong><small>Movement, food, mindset, or a mix.</small></span></li>
            <li><span className="step-number">02</span><span><strong>Get support that meets you there</strong><small>Explore guidance designed for real life.</small></span></li>
            <li><span className="step-number">03</span><span><strong>Keep finding your rhythm</strong><small>Notice the wins, and take your time.</small></span></li>
          </ol>
          <a className="button button-dark" href="#join">Find your starting point <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="testimonial-section" aria-labelledby="testimonial-title">
        <div className="testimonial-inner section-shell">
          <div className="testimonial-lead">
            <p className="eyebrow">A little note from Sarah</p>
            <h2 id="testimonial-title">Real life.<br /><em>Real momentum.</em></h2>
          </div>
          <figure className="testimonial-card">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>The fitness tracking and coaching transformed how I view my health. I&apos;m not just losing weight; I feel stronger and more focused than I have in a decade.</blockquote>
            <figcaption>
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                alt="Sarah Lawson"
                width={56}
                height={56}
                sizes="56px"
                className="testimonial-avatar"
              />
              <span><strong>Sarah Lawson</strong><small>Lost 15lbs &amp; increased energy</small></span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="join-section section-shell" id="join" aria-labelledby="join-title">
        <div className="join-panel">
          <div className="join-decoration" aria-hidden="true"><Wind size={98} strokeWidth={0.7} /></div>
          <div className="join-content">
            <p className="eyebrow">Your next chapter can be gentle</p>
            <h2 id="join-title">Ready to feel more <em>at home in you?</em></h2>
            <p>Explore the support that feels right for where you are today.</p>
            <a className="button button-light" href="#programs">Explore BloomLife <ArrowRight size={18} /></a>
          </div>
          <div className="join-badge"><span>YOUR PACE</span><Heart size={21} fill="currentColor" /></div>
        </div>
      </section>
    </main>
  );
}
