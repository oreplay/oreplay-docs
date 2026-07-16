import React, { isValidElement, PropsWithChildren } from "react"
import { Children } from "react"
import styles from "./styles.module.css"
import featureMetadata from "./progress"

type FeatureId = keyof typeof featureMetadata

export function FeatureList({ children }: PropsWithChildren) {
  return <ul className={styles.list}>{children}</ul>
}

export function Feature({
  id,
  children,
}: PropsWithChildren<{ id: FeatureId }>) {
  const child = Children.toArray(children)[0]
  const is_paragraph =
    Children.count(children) == 1 && isValidElement(child) && child.type === "p"
  return (
    <li className={styles.spacing} data-content={featureMetadata[id]}>
      {is_paragraph ? children : <p>{children}</p>}
    </li>
  )
}
