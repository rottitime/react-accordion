<p align="center">
  <a href="https://github.com/rottitime/govuk-design-react">
    <img src="https://rottitime.github.io/react-accordion/doc/logo.png" alt="logo for React Govuk Design System " width="400" />
  </a>
</p>


# React Accordion

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Related Links](#related-links)

## Introduction

Simple easy React Accordion

- Default theme (optional)
- Unstyled React accordion components
- WAI-ARIA compliant
- Keyboard navigation enabled
- Animation support
- Ability to expand/collapse specific items or all items

## Demo

Check out the live example at https://rottitime.github.io/react-accordion/?path=/docs/accordion--docs

## Getting Started

### Installation

Install the library via npm or yarn:

```bash
npm install @rottitime/react-accordion
```

### Usage

```jsx
import { ThemeProvider, Accordion } from '@rottitime/react-accordion'

export default function App() {
  return (
    <ThemeProvider>
      <Accordion
        list={[
          { title: 'Title 1', content: 'Content 1' },
          { title: 'Title 2', content: 'Content 2' },
          { title: 'Title 3', content: 'Content 3' }
        ]}
      />
    </ThemeProvider>
  )
}
```

### Customise theme

The `<ThemeProvider>` can take a prop called `theme` with the following value:

```javascript
{
  backgroundLight: string,
  backgroundDark: string,
  textLight: string,
  textDark: string,
  primaryLight: string,
  primaryDark: string,
  secondaryLight: string,
  secondaryDark: string,
  accentLight: string,
  accentDark: string,
  errorLight: string,
  errorDark: string,
  warningLight: string,
  warningDark: string,
  infoLight: string,
  infoDark: string,
  successLight: string,
  successDark: string,
  fontFamily: string,
  fontSize: string,
  fontWeightNormal: string,
  fontWeightBold: string,
  spacingSmall: string,
  spacingMedium: string,
  spacingLarge: string,
  borderRadiusSmall: string,
  borderRadiusMedium: string,
  borderRadiusLarge: string
}
```

## Exercise

This package was created as part of a coding exercise

### Focus

- Auto-generated pull request description
- Versioning
- Accessibility tags
- Keyboard usage
- Theme file with fallback
- Global theme file for dark/light mode
- Theme config type setup
  - Avoid Enums
  - Recycle existing const object
- CSS split into global (for future components) and component-based
- CSS animation examples
- Unit tests
- Linting
- Prettier
- VS Code extension list
- CI pipeline
  - Deploy versioning
  - Unit test check
  - Linting check
  - Storybook deployment

### Out of scope/ Future release 

- Opening multiple accordion sections at once [#9](https://github.com/rottitime/react-accordion/issues/9)
- Extra animation on expanding/collpasing [#9](https://github.com/rottitime/react-accordion/issues/8)
- Bug: Fix types on rollout [#9](https://github.com/rottitime/react-accordion/issues/7)

## Contributing

We welcome contributions from the community! If you'd like to contribute, please check out our [contributing guidelines](https://github.com/rottitime/react-accordion/blob/main/CONTRIBUTING.md) for more information on how to get started.

---

If you have any questions or need further assistance, please don't hesitate to reach out via our [GitHub issues](https://github.com/rottitime/react-accordion/issues) page.

---

If you have any questions or need further assistance, please don't hesitate to reach out via our [GitHub issues](https://github.com/rottitime/react-accordion/issues) page.
