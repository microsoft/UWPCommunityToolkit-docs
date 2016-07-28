---
permalink: /en-US/controls/hamburgermenu.html
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

Developers can create Menu-specific content, such as add video, graphics, images, text or even a Carousel. An example of the HamburgerMenu is the *Money tile* in Windows 10. When tapped, it displays various market stats and currencies, which lets users configure settings to tailor their monetary interests.

<p> **Note:** Refer to the following content for required code that must be used when creating a HamburgerMenu for Windows application development.<p> 

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
