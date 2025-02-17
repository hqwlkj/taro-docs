---
title: PickerView
sidebar_label: PickerView
---

嵌入页面的滚动选择器
其中只可放置 picker-view-column 组件，其它节点不会显示

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="字节跳动小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html)

## 类型

```tsx
ComponentType<PickerViewProps>
```

## 示例代码

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[
  {
    "label": "React",
    "value": "React"
  },
  {
    "label": "Vue",
    "value": "Vue"
  }
]}>
<TabItem value="React">

```tsx
export default class Picks extends Component {

  constructor () {
    super(...arguments)
    const date = new Date()
    const years = []
    const months = []
    const days = []
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }
    this.state = {
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1]
    }
  }

  onChange = e => {
    const val = e.detail.value
    this.setState({
      year: this.state.years[val[0]],
      month: this.state.months[val[1]],
      day: this.state.days[val[2]],
      value: val
    })
  }

  render() {
    return (
      <View>
        <View>{this.state.year}年{this.state.month}月{this.state.day}日</View>
        <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>
          <PickerViewColumn>
            {this.state.years.map(item => {
              return (
                <View>{item}年</View>
              );
            })}
          </PickerViewColumn>
          <PickerViewColumn>
            {this.state.months.map(item => {
              return (
                <View>{item}月</View>
              )
            })}
          </PickerViewColumn>
          <PickerViewColumn>
            {this.state.days.map(item => {
              return (
                <View>{item}日</View>
              )
            })}
          </PickerViewColumn>
        </PickerView>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="taro-example">
  <view>{{year}}年{{month}}月{{day}}日</view>
  <picker-view indicator-style="height: 30px;" style="width: 100%; height: 300px;" :value="value" @change="onChange">
    <picker-view-column>
      <view v-for="(item, index) in years" :key="index">{{item}}年</view>
    </picker-view-column>
    <picker-view-column>
      <view v-for="(item, index) in months" :key="index">{{item}}月</view>
    </picker-view-column>
    <picker-view-column>
      <view v-for="(item, index) in days" :key="index">{{item}}日</view>
    </picker-view-column>
  </picker-view>
</view>
</template>

<script>
  export default {
    name: "Index",
    data() {
      const date = new Date()
      const years = []
      const months = []
      const days = []
      for (let i = 1990; i <= date.getFullYear(); i++) {
        years.push(i)
      }
      for (let i = 1; i <= 12; i++) {
        months.push(i)
      }
      for (let i = 1; i <= 31; i++) {
        days.push(i)
      }
      return {
        years: years,
        year: date.getFullYear(),
        months: months,
        month: 2,
        days: days,
        day: 2,
        value: [3, 1, 1]
      }
    },

    methods: {
      onChange: function(e) {
        const val = e.detail.value
        console.log(val)
        this.year = this.years[val[0]]
        this.month = this.months[val[1]]
        this.day = this.days[val[2]]
      }
    }
  }
</script>
```
</TabItem>
</Tabs>

## PickerViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| value | `number[]` |  | 否 | 数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。 |
| indicatorStyle | `string` |  | 否 | 设置选择器中间选中框的样式 |
| indicatorClass | `string` |  | 否 | 设置选择器中间选中框的类名 |
| maskStyle | `string` |  | 否 | 设置蒙层的样式 |
| maskClass | `string` |  | 否 | 设置蒙层的类名 |
| immediateChange | `boolean` | `false` | 否 | 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件。 |
| onChange | `CommonEventFunction<onChangeEventDetail>` |  | 否 | 当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始） |
| onPickStart | `CommonEventFunction` |  | 否 | 当滚动选择开始时候触发事件 |
| onPickEnd | `CommonEventFunction` |  | 否 | 当滚动选择结束时候触发事件 |
| title | `string` |  | 否 | 选择器标题，建议标题控制在 12 个中文汉字长度内，避免出现截断现象, 截断部分将以 ... 形式展示 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onPickerStart | `CommonEventFunction` |  | 否 | 当滚动选择开始时候触发事件。 |
| onPickerEnd | `CommonEventFunction` |  | 否 | 当滚动选择结束时候触发事件。 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| PickerViewProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| PickerViewProps.indicatorStyle | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| PickerViewProps.indicatorClass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| PickerViewProps.maskStyle | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| PickerViewProps.maskClass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| PickerViewProps.immediateChange | ✔️ |  |  | ✔️ |  |  |  |  |  |
| PickerViewProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| PickerViewProps.onPickStart | ✔️ |  |  | ✔️ | ✔️ |  |  |  |  |
| PickerViewProps.onPickEnd | ✔️ |  |  | ✔️ | ✔️ |  |  |  |  |
| PickerViewProps.title |  | ✔️ |  |  |  |  |  |  |  |
| PickerViewProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |
| PickerViewProps.onPickerStart |  |  | ✔️ |  |  |  |  |  |  |
| PickerViewProps.onPickerEnd |  |  | ✔️ |  |  |  |  |  |  |

### onChangeEventDetail

| 参数 | 类型 |
| --- | --- |
| value | `number[]` |
