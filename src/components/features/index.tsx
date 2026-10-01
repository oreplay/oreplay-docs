import React, { PropsWithChildren } from "react"
import styles from "./styles.module.css"
import featureMetadata from "./progress"

type FeatureId = keyof typeof featureMetadata

export default function Feature({
  id,
  children,
}: PropsWithChildren<{ id: FeatureId }>) {
  return (
    <li className={styles.spacing} data-content={featureMetadata[id]}>
      {children}
    </li>
  )
}
