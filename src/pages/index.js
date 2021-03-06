import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Building made easy',
    imageUrl: 'img/ip_ic-launch.svg',
    description: (
      <>
        Get started quickly with powerful SDKs, comprehensive docs and handy tools that will jumpstart your paywall project.
      </>
    ),
  },
  {},
  {
    title: 'Complete monetisation platform',
    imageUrl: 'img/ip_ic-architect.svg',
    description: (
      <>
        No other solution comes close to the level of detail we offer.
        You can build close to any monetisation solution using our platform.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                alt="Docusaurus with Keytar"
                className={styles.heroLogo}
                src={useBaseUrl('img/inplayer-logo.png')}
              />
              Develop with{' '}
              <span className={styles.heroProjectKeywords}>ease</span>{' '}
              with InPlayer{' '}
              <span className={styles.heroProjectKeywords}>content monetization</span>{' '}tools
            </h1>
            <div className={styles.indexCtas}>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('docs/')}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
