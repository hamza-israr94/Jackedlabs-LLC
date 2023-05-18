import LoadingScreen from '@/components/atoms/LoadingScreen';
import Layout from '@/components/templates/layout/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  44;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasShownLoadingScreen = localStorage.getItem('hasShownLoadingScreen');
    if (hasShownLoadingScreen) {
      setLoading(false);
    } else {
      // Show the loading screen for 1 second
      const timeout = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasShownLoadingScreen', 'true');
      }, 6000);

      return () => clearTimeout(timeout);
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
