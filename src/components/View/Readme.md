Use this component as a basic building block to create application layouts using the power of flexbox.

```js
<View orientation='vertical' justifyContent='center' style={{ height: '200px' }}>
  <View style={{ background: 'gold' }}>View</View>
  <View style={{ background: 'orange' }}>View</View>
  <View style={{ background: 'green' }}>View</View>
</View>
```

```js
<View orientation='vertical' style={{ height: '200px' }}>
  <View adjust='flex' style={{ background: 'gold' }}>View(adjust: flex)</View>
  <View style={{ background: 'orange' }}>View</View>
  <View style={{ background: 'green' }}>View</View>
</View>
```

```js
<View orientation='horizontal'>
  <View adjust='flex' style={{ background: 'gold' }}>adjust:flex</View>
  <View style={{ background: 'orange' }}>adjust:auto</View>
  <View adjust='flex' style={{ background: 'green' }}>adjust:flex</View>
</View>
```

## Scrolling

```js
<View orientation='vertical' style={{ height: '40%', height: '20%'  }}>
  <View adjust='flex' style={{ background: 'gold' }}>View(adjust: flex)</View>
  <View style={{ background: 'orange' }}>View</View>
  <View style={{ background: 'green' }}>View</View>
</View>
```
