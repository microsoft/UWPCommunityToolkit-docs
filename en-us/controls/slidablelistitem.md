---
permalink: /en-US/controls/slidablelistitem.htm
title: SlidableListItem XAML Control
description: The SlidableListItem Control is a UI that triggers actions by sliding content left or right
keywords: windows, app, toolkit, SlidableListItem, custom list item, List View, XAML, UWP, Slideable
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# SlidableListItem XAML Control

The **SlideableListItem Control** is a UI control that enables actions to be triggered by sliding the content left or right. This effect can be forced to ignore the mouse if only touch screen interaction is desired.

This control can be used as a ListView Data Template root to create effects similar to those common in mobile email apps like Outlook.  

## Syntax

{% highlight xml %}

<controls:SlidableListItem
	LeftIcon="Favorite" 
	RightIcon="Delete" 
	LeftLabel="Set Favorite" 
	RightLabel="Delete"
	LeftBackground="Green" 
	RightBackground="Red"
	LeftForeground="White" 
	RightForeground="Black"
	ActivationWidth="100"
	MouseSlidingEnabled="True"
	LeftCommand="ToggleFavorite"
	RightCommandRequested="SlidableListItem_RightCommandActivated">
	
	<StackPanel Column="1" Margin="10">
		<CheckBox IsChecked="False"></CheckBox>
		<TextBlock Text="My Great Text" TextWrapping="NoWrap"/>            
	</StackPanel>
</controls:SlidableListItem> 

{% endhighlight %}

## Example Image

![SlidableListItem animation]({{site.baseurl}}/resources/images/Controls-SlidableListItem.gif "SlidableListItem")

## Example Code

[SlideableListItem Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/SlideableListItem)

## Default Template 

[SlideableListItem XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Controls/SlideableListItem/SlideableListItem.xaml) is the XAML template used in the toolkit for the default styling.

## Platforms 

Windows 10 SDK 10586 or higher

## API

* [SlidableListItem source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.UI.Controls/SlidableListItem)
* [SlidableListItem API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Controls_SlidableListItem.htm)

