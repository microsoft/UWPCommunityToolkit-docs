---
permalink: /en-US/controls/responsivegridview.htm
title: ResponsiveGridView XAML Control for UWP Community Toolkit
description: The ResponsiveGridView Control presents content in a Grid View to fill available display space 
keywords: windows, app, toolkit, ResponsiveGridView, grid layout, UWP, XAML, Responsive Grid View, Control, grid control, form factors 
layout: default
search.product: eADQiWindows 10XVcnh
---

# ResponsiveGridView XAML Control 
The **ResponsiveGridView Control** presents content within a *Grid View* to fill the total available display space. It reacts to changes in both content and the layout, so it can adapt to different form factors automatically.

## Syntax
```xaml
<controls:ResponsiveGridView  Name="ResponsiveGridViewControl"
          ItemHeight="200"
          DesiredWidth="300"
          ItemTemplate="{StaticResource PhotosTemplate}">
</controls:ResponsiveGridView>
```

## Example Image
![ResponsiveGridView animation](/resources/images/Controls-ResponsiveGridView.gif "ResponsiveGridView")

## Example Code
[ResponsiveGridView Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/ResponsiveGridView)

## Default Template 
[ResponsiveGridView XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Controls/ResponsiveGridView/ResponsiveGridView.xaml) is the XAML template used in the toolkit for the default styling.

## Platforms 
Windows 10 SDK 10586 or higher

## API
* [ResponsiveGridView source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.UI.Controls/ResponsiveGridView)
* [ResponsiveGridView API documentation](../api/Microsoft_Toolkit_Uwp_UI_Controls_ResponsiveGridView.htm)
