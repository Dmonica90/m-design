import { SiteFooter } from 'web-app';

export const Default = () => (
  <SiteFooter>© 2026 Monica Vázquez. Built with curiosity.</SiteFooter>
);

export const WithInlineLink = () => (
  <SiteFooter>
    © 2026 Monica Vázquez ·{' '}
    <a href="https://www.linkedin.com/in/mvrldesign" className="text-primary hover:underline">
      LinkedIn
    </a>
  </SiteFooter>
);

export const Bilingual = () => (
  <SiteFooter>
    Hecho en Ciudad de México — made in Mexico City.
  </SiteFooter>
);
