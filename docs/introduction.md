## Installation

```shell
$ npm install wolkenkit-ux
```

## Setting up

How to setup wolkenkit-ux depends on whether you want to render on the server- or on the client-side.

### Rendering on the server-side

Add the following code to your application:

```javascript static
const { setup } = require('wolkenkit-ux');

// Somewhere later, e.g. in your Express application...

res.send(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf8" />

      ${setup.server.head()}

      <!-- Your application's head -->
    </head>

    <body>
      ${setup.server.body()}

      <!-- Your application's body -->
    </body>
  </html>`);
```

### Rendering on the client-side

Add the following code to your application. Please note that the call to `setup.client` should happen as early as possible to avoid flickering:

```javascript static
const { setup } = require('wolkenkit-ux');

// Somewhere later, in your code...

setup.client();
```

## Using components

To use components, you first need to integrate them into your React application. E.g., to load the `Brand` component, use the following line of code:

```javascript static
const { Brand } = require('wolkenkit-ux');
```

Then, you can use it later on:

```jsx static
<Brand />
```
