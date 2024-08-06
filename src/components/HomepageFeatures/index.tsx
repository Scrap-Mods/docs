import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Who are we?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We are a Scrap Mods, a group of modders who are dedicated to making
        Scrap Mechanic a better game for everyone.
      </>
    ),
  },
  {
    title: 'Our mission',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We aim to provide the best possible documentation for modding Scrap
        Mechanic, as well as create our own mods to enhance the game.
      </>
    ),
  },
  {
    title: 'Join us!',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        If you want to help us out, or just hang out with us, feel free to join
        our <a href="https://discord.gg/ahzyHPn3y2" target="_blank">Discord server</a> or check
        out our <a href="https://github.com/Scrap-Mods/" target="_blank">GitHub repo</a>!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
