The `Sidebar` should be used to handle navigation when building an application layout using the `Application` component. Its also responsible for applying a consistent branding across wolkenkit applications.

```js
<div style={{ position:'relative', width: 640, height: 480 }}>
  <Application>
    <Sidebar>
      <Brand size='s' suffix='my-app' />
    </Sidebar>
    <View adjust='flex' style={{ background: 'lightgrey' }}>My content panel</View>
  </Application>
</div>
```
