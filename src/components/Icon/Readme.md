In order to use icons you need to include `Symbols` at the start of your page. They include all the icons paths that the `Icon` component will use.

```js
<Icon name='heart' />
```

## Sizes

```js
<div>
  <Icon name='heart' size='xs' />
  <Icon name='heart' size='s' />
  <Icon name='heart' size='m' />
  <Icon name='heart' size='l' />
</div>
```

## Colors

```js
<div>
  <Icon name='heart' color='highlight' />
</div>
```

## Inline

```js
<div>
  <p style={{ fontSize: 20 }}>
    This is an icon embedded in a text <Icon name='heart' type='inline' /> it should align with the typo.
  </p>
  <p style={{ fontSize: 30 }}>
    This is an icon embedded in a text <Icon name='heart' type='inline' /> it should align with the typo.
  </p>
</div>
```

## Flex-centered

```js
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'gray', width: 100, height: 100 }}>
  <Icon name='heart' type='flex-auto' />
</div>
```

## All icons

```js
<div>
  <p><Icon name='arrow-wide-west' type='inline' size='m' /> arrow-wide-west</p>
  <p><Icon name='breadcrumb-separator' type='inline' size='m' /> breadcrumb-separator</p>
  <p><Icon name='checkmark' type='inline' size='m' /> checkmark</p>
  <p><Icon name='chevron' type='inline' size='m' /> chevron</p>
  <p><Icon name='expand' type='inline' size='m' /> expand</p>
  <p><Icon name='heart' type='inline' size='m' /> heart</p>
  <p><Icon name='github' type='inline' size='m' /> github</p>
  <p><Icon name='nav' type='inline' size='m' /> nav</p>
  <p><Icon name='twitter' type='inline' size='m' /> twitter</p>

  <p><Icon name='cloud-medium' type='inline' size='xl' /> cloud-medium</p>
  <p><Icon name='cqrs-medium' type='inline' size='xl' /> cqrs-medium</p>
  <p><Icon name='event-sourcing-medium' type='inline' size='xl' /> event-sourcing-medium</p>
  <p><Icon name='notebook-medium' type='inline' size='xl' /> notebook-medium</p>
  <p><Icon name='open-source-medium' type='inline' size='xl' /> open-source-medium</p>
  <p><Icon name='server-medium' type='inline' size='xl' /> server-medium</p>
  <p><Icon name='phone-medium' type='inline' size='xl' /> phone-medium</p>
  <p><Icon name='plus-medium' type='inline' size='xl' /> plus-medium</p>
  <p><Icon name='stackoverflow-medium' type='inline' size='xl' /> stackoverflow-medium</p>
</div>
