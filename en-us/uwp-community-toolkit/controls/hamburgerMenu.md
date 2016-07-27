---
permalink: /en-US/controls/hamburgermenu.html
title: HamburgerMenu XAML Control for UWP Community Toolkit
description:  The Hamburger Menu Control displays a sidebar that is displayed by the Hamburger button       
keywords: windows, app, toolkit, hamburger, menu, hamburgermenu, XAML, control, sidebar
layout: default
search.product: eADQiWindows 10XVcnh
---

# HamburgerMenu XAML Control  
The **Hamburger Menu Control** provides an easy-to-use, side-bar menu which users can show or hide by using a Hamburger button.


## Syntax
```xaml
<controls:HamburgerMenu PaneBackground="@[PaneBackground:Brush:Black]" x:Name="HamburgerMenuControl"
	Foreground="White"
	ItemTemplate="{StaticResource ButtonTemplate}"
	OptionsItemTemplate="{StaticResource OptionTemplate}"
	ItemClick="HamburgerMenu_OnItemClick"
	OptionsItemClick="HamburgerMenu_OnOptionsItemClick"
	OpenPaneLength="240"
	DisplayMode="CompactInline"
	CompactPaneLength="48"
	HamburgerHeight="48"
	IsPaneOpen="False"/>
</controls:HamburgerMenu>
```

## Example Image
![hamburger menu animation](/resources/images/hamburgermenu.gif "Hamburger menu")

## Example Code
[HamburgerMenu Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp/SamplePages/HamburgerMenu)

## Default Template 
[HamburgerMenu XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Windows.Toolkit.UI.Controls/HamburgerMenu/HamburgerMenu.xaml) is the XAML template used in the toolkit for the default styling.

## Platforms 

Windows 10 SDK 10240 or higher

## API
Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp) for the UWP Community Toolkit for samples of all the controls.
