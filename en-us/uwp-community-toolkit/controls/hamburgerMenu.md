---
permalink: /en-US/controls/hamburgermenu.htm
title: HamburgerMenu XAML Control for UWP Community Toolkit
description:  The Hamburger Menu Control displays a sidebar that is displayed by the Hamburger button       
keywords: windows, app, toolkit, hamburger, menu, hamburgermenu, XAML, control, sidebar
layout: default
search.product: eADQiWindows 10XVcnh
---

# HamburgerMenu XAML Control  
The **Hamburger Menu Control** provides an easy-to-use, side-bar menu which users can show or hide by using a Hamburger button. By  tapping the icon, it opens up a side menu with a selection of options or additional pages.

### How it works
The 3-line menu icon, which resembles a Hamburger, allows developers to pack more features into their apps or navigation. The tiny icon takes up a minimal amount of screen real estate and creates a clean, minimalist look.

Developers can place menu specific content, navigation, images, text or custom controls. An example of the HamburgerMenu is the *MSN Money App* included in Windows 10. When tapped, it displays additional feature pages, and user settings.

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
![HamburgerMenu animation](/resources/images/Controls-HamburgerMenu.gif "HamburgerMmenu")

## Example Code
<p> **Note:** Refer to the following project for example code that must be used when creating a using this toolkit for Universal Windows application development.<p>

[HamburgerMenu Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/HamburgerMenu)

## Default Template 
[HamburgerMenu XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Controls/HamburgerMenu/HamburgerMenu.xaml) is the XAML template used in the toolkit for the default styling.

## Platforms 
Windows 10 SDK 10586 or higher

## API
[HamburgerMenu API Docs](../api/Microsoft_Toolkit_Uwp_UI_Controls_HamburgerMenu.htm)

