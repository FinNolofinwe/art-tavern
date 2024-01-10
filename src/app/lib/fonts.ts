import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['500', '600', '700'],
  adjustFontFallback: false,
});

export { montserrat };
