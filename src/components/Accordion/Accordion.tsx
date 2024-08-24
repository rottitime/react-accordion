import { createElement, Fragment, useId } from 'react'
import type { Props } from './types'

export default function Accordion({ headingLevel = 1, list, ...props }: Props) {
  const id = useId()

  return (
    <div {...props}>
      {list.map(({ title, content, open }, i) => {
        const headId = `${id}-${i}`
        const sectId = `sect${i + 1}`
        const isOpen = !!open
        return (
          <Fragment key={title}>
            {createElement(
              `h${headingLevel}`,
              {},
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={sectId}
                id={headId}
              >
                {title}
              </button>
            )}
            <div id={sectId} role="region" aria-labelledby={headId} hidden={!isOpen}>
              {content}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
