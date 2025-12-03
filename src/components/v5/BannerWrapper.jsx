'use client';

import dynamic from 'next/dynamic';

const PromoBanner = dynamic(() => import('./PromoBanner'), { ssr: false });

export default function BannerWrapper() {
  return <PromoBanner />;
}
