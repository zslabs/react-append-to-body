[![Build Status](https://travis-ci.org/jpgorman/react-append-to-body.svg?branch=master)](https://travis-ci.org/jpgorman/react-append-to-body)

#React higher order component append to body
[React] Higher order component that allows you to attach components to the DOM outside of the main app.

[React]: https://facebook.github.io/react/

#Installation
```sh
npm i react-append-to-body --save-dev
```

#Example
```js
import {componentWillAppendToBody} from "react-append-to-body"

/* Some component that you want to attach to the DOM */
function MyComponent({children}) {
  return (
    <div className="myClassName">
      {children}
    </div>
  )
}

const AppendedModal = componentWillAppendToBody(Modal)

class MyApp extends React.Component {
  render () {
    return (
      <div>
        Some content on my page // this content will be rendered in the main app
        <AppendedModal>The content for my appended component</AppendedModal> // this content will be rendered outside of the main app
      </div>
    )
  }
}

```

```html
/* template */
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width,initial-scale=1" name="viewport">
</head>
<body class="body">
  <div id="my-app"></div>
  <div id="append-element-container"></div>
  <script src="/app.js"></script>
</html>
```

## Appending to a named DOM node

```html
/* template */
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width,initial-scale=1" name="viewport">
</head>
<body class="body">
  <div id="my-app"></div>
  <div id="my-named-element-to-append-with"></div>
  <script src="/app.js"></script>
</html>
```

```js
const AppendedModal = componentWillAppendToBody(Modal)
class MyApp extends React.Component {
  render () {
    return (
      <div>
        Some content on my page // this content will be rendered in the main app
        <AppendedModal appendElementContainer={"#my-named-element-to-append-with"}>The content for my appended component</AppendedModal> // this content will be rendered outside of the main app
      </div>
    )
  }
}
```

See [React] docs for examples for your environment.
