Use this component to display the wolkenkit brand in applications or pages. The brand consists of the logo, typo and an optional suffix that can be used for products/module names e.g. `console` or `documentation`.

```js
<Button onClick={ () => alert('clicked') }>Click me!</Button>
```

## Adjusting to flex container

```js
<div>
  <div style={{ display: 'flex' }}>
    <Button adjust='flex'>flex</Button>
    <Button adjust='auto'>auto</Button>
    <Button adjust='auto'>auto</Button>
  </div>
</div>
```

## Sizes

```js
<div style={{ display: 'flex', alignItems: 'center' }}>
  <Button size='s'>Small Button</Button>
  <Button>Default Button</Button>
</div>
```

## Hints

Hints can be used for displaying keyboard shortcuts.

```js
<Button>Small Button <Button.Hint>[Ctrl+Enter]</Button.Hint></Button>
```
