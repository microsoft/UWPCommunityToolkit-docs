---
permalink: /en-US/helpers/visualtreeextensions.htm
title: VisualTreeExtensions utility
description: VisualTreeExtensions defines a collection of extensions methods for UI
keywords: windows, app, toolkit, UWP, helpers, visual tree
layout: default
search.product: eADQiWindows 10XVcnh
---

# VisualTreeExtensions
The **VisualTreeExtensions** provides a collection of extensions methods for UI.

## Example

```C#
	// Find descendant control using its name
	var control = uiElement.FindDescendantByName("mytextbox");

	// Find first descendant control of a specified type
	control = uiElement.FindDescendant<ListView>();

	// Find first ascendant control of a specified type
	control = uiElement.FindAscendant<ListView>();

	// Find first visual ascendant control of a specified type
	control = uiElement.FindVisualAscendant<ScrollViewer>();

```

## Platforms
Windows 10 SDK 10586 or higher

## API
* [VisualTreeExtensions source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI/Extensions/VisualTreeExtensions.cs)
* [VisualTreeExtensions API documentation]({{site.baseurl}}/api/Microsoft_Toolkit_Uwp_UI_VisualTreeExtensions.htm)

