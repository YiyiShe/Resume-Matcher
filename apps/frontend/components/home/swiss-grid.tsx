'use client';

import Image from 'next/image';
import Link from 'next/link';
import LayoutGrid from 'lucide-react/dist/esm/icons/layout-grid';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Target from 'lucide-react/dist/esm/icons/target';
import ListChecks from 'lucide-react/dist/esm/icons/list-checks';
import Settings from 'lucide-react/dist/esm/icons/settings';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import ArrowUpRight from 'lucide-react/dist/esm/icons/arrow-up-right';
import { useTranslations } from '@/lib/i18n';

export const SwissGrid = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslations();

  return (
    <div className="workspace-shell min-h-screen w-full">
      <aside className="workspace-sidebar" aria-label="Yilink workspace navigation">
        <Link href="/dashboard" className="workspace-brand">
          <span className="workspace-brand-mark">
            <Image src="/logo.svg" alt="Yilink" width={28} height={28} />
          </span>
          <span>
            <strong>Yilink</strong>
            <small>奕链接</small>
          </span>
        </Link>

        <div className="workspace-nav-label">{t('dashboard.selectModule')}</div>
        <nav className="workspace-nav">
          <Link href="/dashboard" className="workspace-nav-link is-active" aria-current="page">
            <LayoutGrid aria-hidden="true" />
            <span>{t('nav.dashboard')}</span>
          </Link>
          <Link href="/resume-wizard" className="workspace-nav-link">
            <FileText aria-hidden="true" />
            <span>{t('nav.builder')}</span>
          </Link>
          <Link href="/tailor" className="workspace-nav-link">
            <Target aria-hidden="true" />
            <span>{t('nav.tailor')}</span>
          </Link>
          <Link href="/tracker" className="workspace-nav-link">
            <ListChecks aria-hidden="true" />
            <span>{t('nav.applicationTracker')}</span>
          </Link>
        </nav>

        <div className="workspace-sidebar-tip">
          <Sparkles aria-hidden="true" />
          <span>{t('dashboard.createNew')}</span>
          <strong>{t('dashboard.createResume')}</strong>
          <Link href="/resume-wizard">
            {t('nav.builder')}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="workspace-sidebar-footer">
          <Link href="/settings" className="workspace-settings-link">
            <Settings aria-hidden="true" />
            <span>{t('nav.settings')}</span>
          </Link>
          <span className="workspace-footer-brand">Yilink · 奕链接</span>
        </div>
      </aside>

      <main className="workspace-main">
        <header className="workspace-topbar">
          <div>
            <div className="workspace-breadcrumb">
              Yilink <span>/</span> {t('nav.dashboard')}
            </div>
            <h1>{t('nav.dashboard')}</h1>
            <p>{t('dashboard.subtitle')}</p>
          </div>
          <Link href="/resume-wizard" className="workspace-topbar-cta">
            <span>+</span>
            {t('dashboard.createNew')}
          </Link>
        </header>

        <section className="workspace-start-panel" aria-labelledby="workspace-start-title">
          <div className="workspace-start-copy">
            <span className="workspace-eyebrow">YILINK WORKSPACE · 奕链接工作区</span>
            <h2 id="workspace-start-title">{t('dashboard.selectModule')}</h2>
            <p>{t('dashboard.subtitle')}</p>
          </div>
          <div className="workspace-start-actions">
            <Link
              href="/resume-wizard"
              className="workspace-action-card workspace-action-card-primary"
            >
              <span className="workspace-action-index">01</span>
              <FileText aria-hidden="true" />
              <strong>{t('nav.builder')}</strong>
              <span>{t('dashboard.createNew')}</span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/tailor" className="workspace-action-card workspace-action-card-secondary">
              <span className="workspace-action-index">02</span>
              <Target aria-hidden="true" />
              <strong>{t('nav.tailor')}</strong>
              <span>{t('dashboard.tailorResume')}</span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/tracker" className="workspace-action-card workspace-action-card-tertiary">
              <span className="workspace-action-index">03</span>
              <ListChecks aria-hidden="true" />
              <strong>{t('nav.applicationTracker')}</strong>
              <span>{t('dashboard.subtitle')}</span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="workspace-resumes" aria-labelledby="workspace-resumes-title">
          <div className="workspace-section-heading">
            <div>
              <span className="workspace-eyebrow">{t('dashboard.lastModified')}</span>
              <h2 id="workspace-resumes-title">{t('dashboard.myResumes')}</h2>
            </div>
            <Link href="/resume-wizard" className="workspace-section-link">
              {t('dashboard.createNew')}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="workspace-card-grid">{children}</div>
        </section>
      </main>
    </div>
  );
};
