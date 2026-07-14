import type { ReactNode } from "react"
import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"
import Translate, { translate } from "@docusaurus/Translate"
import MountainSvg from "@site/static/img/undraw_docusaurus_mountain.svg"
import TreeSvg from "@site/static/img/undraw_docusaurus_tree.svg"
import ReactSvg from "@site/static/img/undraw_docusaurus_react.svg"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: ReactNode
}

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: "homepage.easy.title",
      message: "Easy to Use",
      description: "The homepage Easy-to-Use Title",
    }),
    Svg: MountainSvg,
    description: (
      <Translate id="homepage.easy.text">
        O-Replay was designed from the ground up to display orienteering live
        results and be easily used by competitors, organizers and spectators.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.focus.title",
      message: "Focus on What Matters",
      description: "The homepage Focus-on-What-Matters Title",
    }),
    Svg: TreeSvg,
    description: (
      <Translate id="homepage.focus.text">
        O-Replay lets you focus on the competition, while we do the chores. Go
        ahead and create your orienteering events with clean results.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.powered.title",
      message: "Powered by Orienteers",
      description: "The homepage Powered-by-Orienteers Title",
    }),
    Svg: ReactSvg,
    description: (
      <Translate id="homepage.powered.text">
        As orienteers ourselves, we understand your needs. Help us create the
        results' website of the future for all orienteering disciplines.
      </Translate>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): ReactNode {
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
  )
}
