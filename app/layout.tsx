import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '梧銘 woomin｜客製化遊戲製作',
  description:
    '面向大眾的客製化遊戲開發，讓遊戲成為日常生活的工具之一。',
  openGraph: {
    title: '梧銘 woomin｜客製化遊戲製作',
    description:
      '面向大眾的客製化遊戲開發，讓遊戲成為日常生活的工具之一。',
    type: 'website',
    images: [{ url: '/og.png', width: 1640, height: 624 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '梧銘 woomin｜客製化遊戲製作',
    description:
      '面向大眾的客製化遊戲開發，讓遊戲成為日常生活的工具之一。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
