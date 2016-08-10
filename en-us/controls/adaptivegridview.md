---
permalink: /en-US/controls/adaptivegridview.htm
title: AdaptiveGridView XAML Control
description: The AdaptiveGridView Control presents content in a Grid View to fill available display space 
keywords: windows, app, toolkit, AdaptiveGridView, grid layout, UWP, XAML, Adaptive Grid View, Control, grid control, form factors 
layout: default
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# AdaptiveGridView XAML Control 

The **AdaptiveGridView Control** presents items in a evenly-spaced set of columns to fill the total available display space. It reacts to changes in the layout as well as the content so it can adapt to different form factors automatically.

## Syntax

```xaml
<controls:AdaptiveGridView  Name="AdaptiveGridViewControl"
          ItemHeight="200"
          DesiredWidth="300"
          ItemTemplate="{StaticResource PhotosTemplate}">
</controls:AdaptiveGridView>
```

## Example Image

![AdaptiveGridView animation]({{site.baseurl}}/resources/images/Controls-AdaptiveGridView.gif "AdaptiveGridView")

## Example Code

[AdaptiveGridView Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/AdaptiveGridView)

## Default Template 

[AdaptiveGridView XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Controls/AdaptiveGridView/AdaptiveGridView.xaml) is the XAML template used in the toolkit for the default styling.

## Platforms 

Windows 10 SDK 10586 or higher

## API

* [AdaptiveGridView source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.UI.Controls/AdaptiveGridView)
* [AdaptiveGridView API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Controls_AdaptiveGridView.htm)

