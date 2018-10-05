---
path: "/formik-material-ui-checkbox"
date: "2018-09-28T07:08:48.353Z"
title: "formik-material-uiでのCheckboxの初期値"
tags: ["formik", "material-ui"]
---

material-uiとformikを苦労なくつなぎこみたい場合、以下のモジュールがあります。

https://github.com/stackworx/formik-material-ui

ただ2018/09の時点ではcheckboxの振る舞いで初期値にチェックがつけることができなそうです。

手元では修正しましたのでここに載せておきます。

Before: 2018/09の時点でのソース

`gist:ta-toshio/723b712a37fcc171c18815477cec18f0#Checkbox.tsx`

After: 修正したファイル

`gist:ta-toshio/723b712a37fcc171c18815477cec18f0#Checkbox.js`

使用例:

`gist:ta-toshio/723b712a37fcc171c18815477cec18f0#sample-use.js`


2018/10時点ではいつ取り込まれるのか分かりませんがPRがありますね。

https://github.com/stackworx/formik-material-ui/pull/27/files

`gist:ta-toshio/723b712a37fcc171c18815477cec18f0#PRCheckbox.tsx`

`FormControlLabel` が追加されていて、valueに `field.name`が設定されていますね。

以下のようにfield.nameの値がPOSTされるような形なのでしょうか。
```
[
  'someCheckboxFieldName' => 'someCheckboxFieldName'
]
```
どのような挙動になるか確かではありませんが、面白いですね。

以上です。
