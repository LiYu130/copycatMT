//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    imgArr: [
      [
        { url: '/images/图层-0.png', word: '美食' }, { url: '/images/图层-0.png', word: '美食' },
        { url: '/images/图层-0.png', word: '美食' }, { url: '/images/图层-0.png', word: '美食' },
        { url: '/images/图层-0.png', word: '美食' }, { url: '/images/图层-0.png', word: '美食' },
        { url: '/images/图层-0.png', word: '美食' }, { url: '/images/图层-0.png', word: '美食' },
        { url: '/images/图层-0.png', word: '美食' }, { url: '/images/图层-0.png', word: '美食' }],
      [
        { url: '/images/图层-0.png', word: '美食' }, { url: '/images/图层-0.png', word: '美食' },
        { url: '/images/图层-0.png', word: '美食' }, { url: '/images/图层-0.png', word: '美食' },
        { url: '/images/图层-0.png', word: '美食' }, { url: '/images/图层-0.png', word: '美食' },
        { url: '/images/图层-0.png', word: '美食' }, { url: '/images/图层-0.png', word: '美食' },
        { url: '/images/图层-0.png', word: '美食' }, { url: '/images/图层-0.png', word: '美食' }
      ]
    ],
    prePriceArr: [
      { url: '/images/图层-0.png', name: '脆皮烧鸡饭', newprice: "16.84", oldprice: "31" },
      { url: '/images/图层-0.png', name: '脆皮烧鸡饭', newprice: "16.84", oldprice: "31" },
      { url: '/images/图层-0.png', name: '脆皮烧鸡饭', newprice: "16.84", oldprice: "31" },
      { url: '/images/图层-0.png', name: '脆皮烧鸡饭', newprice: "16.84", oldprice: "31" },
      { url: '/images/图层-0.png', name: '脆皮烧鸡饭', newprice: "16.84", oldprice: "31" },
      { url: '/images/图层-0.png', name: '脆皮烧鸡饭', newprice: "16.84", oldprice: "31" }
    ],
    chooseGoodsArr: [
      { url: '/images/图层-0.png', name: '绿茶餐厅(广州天河城店)', reason: "江浙菜中的点评人气餐厅" },
      { url: '/images/图层-0.png', name: '绿茶餐厅(广州天河城店)', reason: "江浙菜中的点评人气餐厅" },
      { url: '/images/图层-0.png', name: '绿茶餐厅(广州天河城店)', reason: "江浙菜中的点评人气餐厅" },
      { url: '/images/图层-0.png', name: '绿茶餐厅(广州天河城店)', reason: "江浙菜中的点评人气餐厅" },
      { url: '/images/图层-0.png', name: '绿茶餐厅(广州天河城店)', reason: "江浙菜中的点评人气餐厅" },
      { url: '/images/图层-0.png', name: '绿茶餐厅(广州天河城店)', reason: "江浙菜中的点评人气餐厅" }
    ],
    lunArr: [
      { url: '/images/lun.png', href: '' }, { url: '/images/lun.png', href: '' },
      { url: '/images/lun.png', href: '' }, { url: '/images/lun.png', href: '' }
    ],
    nearArr: [
      { url: '/images/shop.png', title: '翻滚吧！麻辣香锅(淘金店)', appraise: '4.8', buy_num: '9999+',      distance: '6.0km', time: '48', shop_name: '麻辣香锅', less_money: '20', new_runMoney: '6', old_runMoney: '9', average_money: '23', preferenceArr: { money: ['30减12', '48减15', '68减20'], quality: ['支持自取'] } },
      { url: '/images/shop.png', title: '翻滚吧！麻辣香锅(淘金店)', appraise: '4.8', buy_num: '9999+', distance: '6.0km', time: '48', shop_name: '麻辣香锅', less_money: '20', new_runMoney: '6', old_runMoney: '9', average_money: '23', preferenceArr: { money: ['30减12', '48减15', '68减20'], quality: ['支持自取'] } },
      { url: '/images/shop.png', title: '翻滚吧！麻辣香锅(淘金店)', appraise: '4.8', buy_num: '9999+', distance: '6.0km', time: '48', shop_name: '麻辣香锅', less_money: '20', new_runMoney: '6', old_runMoney: '9', average_money: '23', preferenceArr: { money: ['30减12', '48减15', '68减20'], quality: ['支持自取'] } },
      { url: '/images/shop.png', title: '翻滚吧！麻辣香锅(淘金店)', appraise: '4.8', buy_num: '9999+', distance: '6.0km', time: '48', shop_name: '麻辣香锅', less_money: '20', new_runMoney: '6', old_runMoney: '9', average_money: '23', preferenceArr: { money: ['30减12', '48减15', '68减20'], quality: ['支持自取'] } }
    ],
    fixedEl: false,
    fixedNear: false
  },
  onLoad() {

  },
  onPageScroll: function (e) {
    // console.log(e);//{scrollTop:99}
    if (e.scrollTop > 0) {
      this.setData({
        fixedEl: true
      })
    } else {
      this.setData({
        fixedEl: false
      })
    }
    if ((e.scrollTop > 650)) {
      this.setData({
        fixedNear: true
      })
    } else {
      this.setData({
        fixedNear: false
      })
    }
  },
  aaa(e){
    console.log(e)
  }
})
