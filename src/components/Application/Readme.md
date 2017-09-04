Use the `Application` component as your root component when you want to build a flexobx based application layout. Scrolling is not handled by the `Application`, it should be handled inside the the `Views` of your application. An application is positioned absolute inside its parent so make sure to set `position` of the parent to `relative`.

```js
<div style={{ position: 'relative', width: 640, height: 480 }}>
  <Application>
    <View style={{ background: 'gold', width: 64 }}>My left panel</View>
    <View adjust='flex' style={{ background: 'orange' }}>My content panel</View>
  </Application>
</div>
```
