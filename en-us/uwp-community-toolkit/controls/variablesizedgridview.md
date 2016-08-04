---
permalink: /en-US/controls/variablesizedgridview.htm
title: VariableSizedGridView XAML Control
description: The VariableSizedGridView Control displays items that have different width and height values
keywords: windows, app, toolkit, Variable Sized, gridview control, grid view, VariableSizedGridView, XAML, UWP, ratio
layout: default
search.product: eADQiWindows 10XVcnh
---

#  VariableSizedGridView XAML Control
The **VariableSizedGridView Control** displays items that have different width and height values. 
You can control the number of rows, columns, orientation and aspect ratio. 

## Syntax
```xaml
<controls:VariableSizedGridView   
	Name="VariableSizedGridViewControl"
	Margin="0"
	ItemTemplate="{StaticResource PhotoTemplate}"
	Orientation="Horizontal"
	MaximumRowsOrColumns="4">
</controls:VariableSizedGridView>
```

## Example Image
![VariableSizedGridView animation](/resources/images/Controls-VariableSizedGridView.gif "VariableSizedGridView")

## Example Code
<p> **Note:** Refer to the following project for example code that must be used when creating a using this toolkit for Universal Windows application development.<p>

[VariableSizedGridView Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/VariableSizedGridView)

## Default Template 
[HamburgerMenu XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Controls/VariableSizedGridView/VariableSizedGridView.xaml) is the XAML template used in the toolkit for the default styling.

## Platforms 
Windows 10 SDK 10586 or higher

## API
* [VariableSizedGridView source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.UI.Controls/VariableSizedGridView)
* [VariableSizedGridView API Docs](../api/Microsoft_Toolkit_Uwp_UI_Controls_VariableSizedGridView.htm)
