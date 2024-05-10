# React Library Icons Component

This is an icon library developed to provide an easy and standardized way to use icons in your projects. The icons are provided as React components, enabling seamless integration with your applications.

## Installation

You can install the library via npm or yarn:

```bash
npm install react-lib-icons-component
```

or

```bash
yarn add react-lib-icons-component
```

## Usage

To use an icon in your project, simply import the desired icon component and include it in your JSX code. For example:

```jsx
import React from 'react';
import { Bell } from 'my-icons-library';

const App = () => {
  return (
    <div>
      <h1>My Application</h1>
      <Bell stroke="black" />
    </div>
  );
};

export default App;
```

## Available Icons

Currently, the library provides the following icons:

- `Bell`: A bell icon.
- `Circle`: A circle icon.
- `Chevron`: A chevron icon.
- `Close`: A close icon.
- `Find`: A find icon.
- `ShoppingBag`: A shopping bag icon.
- `Star`: A star icon.
- `Wifi`: A wifi icon.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
