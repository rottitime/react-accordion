import { createElement, Fragment, useId, useState } from 'react'
import type { Props } from './types'
import styled from 'styled-components'
import Arrow from '../Arrow/Arrow'

const Wrapper = styled.div`
  --ac-padding: 20px;
  .heading {
    display: flex;
    border: 1px solid #ccc;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    margin: 0;
    button {
      border: 0;
      padding: var(--ac-padding);
      cursor: pointer;
      background-color: transparent;
      text-align: left;
      flex-grow: 1;

      &[aria-expanded='true'] + svg {
        transform: rotate(180deg);
      }
    }
    svg {
      transition: all 0.3s ease-out;
      margin-right: var(--ac-padding);
    }
  }

  [role='region'] {
    padding: var(--ac-padding);
    background-color: #f9f9f9;
  }
`

//document.getElementById('sect1').scrollHeight

export default function Accordion({
  headingLevel = 1,
  defaultOpen = 0,
  list,
  ...props
}: Props) {
  const [opened, setOpened] = useState(defaultOpen)
  const id = useId()

  return (
    <Wrapper {...props}>
      {list.map(({ title, content }, i) => {
        const headId = `${id}-${i}`
        const sectId = `sect${i + 1}`
        const isOpen = opened === i
        return (
          <Fragment key={title}>
            {createElement(
              `h${headingLevel}`,
              { className: 'heading' },
              <>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={sectId}
                  id={headId}
                  onClick={() => {
                    setOpened(i)
                  }}
                >
                  {title}
                </button>
                <Arrow />
              </>
            )}
            <div id={sectId} role="region" aria-labelledby={headId} hidden={!isOpen}>
              <div>{content}</div>
            </div>
          </Fragment>
        )
      })}
    </Wrapper>
  )
}
