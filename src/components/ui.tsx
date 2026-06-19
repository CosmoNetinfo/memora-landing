import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

export function BackLink({ fallback = '/', label = 'Indietro' }: { fallback?: string; label?: string }) {
  const navigate = useNavigate();

  const handleBack = () => {
    const idx = (window.history.state as { idx?: number } | null)?.idx;
    if (typeof idx === 'number' && idx > 0) navigate(-1);
    else navigate(fallback);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-memora-primary transition-colors mb-8 group"
    >
      <ArrowLeft
        className="w-4 h-4 motion-safe:group-hover:-translate-x-0.5 transition-transform"
        aria-hidden="true"
      />
      {label}
    </button>
  );
}

export function PageHero({
  badge,
  title,
  accent,
  subtitle,
  children,
}: {
  badge?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {badge && (
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-memora-primary/10 text-memora-primary font-medium text-sm mb-6">
          {badge}
        </div>
      )}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
        {title}
        {accent && (
          <>
            <br />
            <span className="text-memora-primary">{accent}</span>
          </>
        )}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{subtitle}</p>
      )}
      {children && <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">{children}</div>}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {eyebrow && (
        <div className="inline-block px-4 py-2 rounded-full bg-memora-primary/10 text-memora-primary font-medium text-sm mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function PrimaryButton({
  href,
  to,
  children,
  external,
}: {
  href?: string;
  to?: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-memora-primary text-white font-medium text-lg hover:bg-memora-primary-dark transition-all shadow-lg hover:shadow-xl motion-safe:hover:-translate-y-0.5';

  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={className}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return null;
}

export function SecondaryButton({
  to,
  href,
  children,
  onDark = false,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  onDark?: boolean;
}) {
  const className = onDark
    ? 'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-medium text-lg hover:bg-white/10 transition-all'
    : 'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-memora-primary border-2 border-memora-primary/20 font-medium text-lg hover:bg-memora-bg transition-all';

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to!} className={className}>
      {children}
    </Link>
  );
}

/** Card feature / audience — radius 24px (app --card-radius-lg) */
export function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 card-shadow hover:card-shadow transition-shadow">
      <div className="w-14 h-14 bg-memora-bg rounded-2xl flex items-center justify-center mb-6" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export function AppScreenshot({
  src,
  title,
  subtitle,
  step,
  alt,
}: {
  src: string;
  title: string;
  subtitle: string;
  step?: number;
  alt?: string;
}) {
  return (
    <figure className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-[168px] sm:max-w-[180px] lg:max-w-[196px] mx-auto">
        {step != null && (
          <span
            className="absolute -top-2 -left-2 z-10 w-7 h-7 rounded-full bg-memora-primary text-white text-xs font-bold flex items-center justify-center shadow-md"
            aria-hidden="true"
          >
            {step}
          </span>
        )}
        <div className="rounded-[22px] overflow-hidden card-shadow ring-[3px] ring-gray-200/90 bg-white">
          <img
            src={src}
            alt={alt ?? `Schermata ${title} — Memora`}
            className="block w-full h-auto"
            loading="lazy"
            width={470}
            height={1024}
            decoding="async"
          />
        </div>
      </div>
      <figcaption className="mt-3 text-center px-1">
        <h4 className="font-bold text-sm text-gray-900">{title}</h4>
        <p className="text-xs text-gray-600 leading-snug mt-0.5">{subtitle}</p>
      </figcaption>
    </figure>
  );
}

export function AppScreenshotGallery({
  screens,
}: {
  screens: readonly { step: number; src: string; title: string; subtitle: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 items-start justify-items-center">
      {screens.map((screen) => (
        <AppScreenshot key={screen.src} {...screen} />
      ))}
    </div>
  );
}
