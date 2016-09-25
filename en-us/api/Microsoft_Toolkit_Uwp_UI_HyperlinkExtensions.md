---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_HyperlinkExtensions.htm
title: Microsoft.Toolkit.Uwp.UI.HyperlinkExtensions API
description: API page for Microsoft.Toolkit.Uwp.UI.HyperlinkExtensions
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# HyperlinkExtensions class

Allows for a Hyperlink element to invoke a bound [ICommand](https://msdn.microsoft.com/en-us/library/system.windows.input.icommand.aspx) instance.

## Members

The **HyperlinkExtensions** class has the following types of members:

### Methods

#### GetCommand(Windows.UI.Xaml.DependencyObject obj)

Gets the [ICommand](https://msdn.microsoft.com/en-us/library/system.windows.input.icommand.aspx) instance associated with the specified [DependencyObject](https://msdn.microsoft.com/en-us/library/system.windows.dependencyobject.aspx)

##### Parameters

| Name | Description | Type |
| --- | --- | --- |
| obj | The object from which to get the command to invoke | [DependencyObject](https://msdn.microsoft.com/en-us/library/system.windows.dependencyobject.aspx) |
| return | Command instance | [ICommand](https://msdn.microsoft.com/en-us/library/system.windows.input.icommand.aspx) |


#### SetCommand(Windows.UI.Xaml.DependencyObject obj, System.Windows.Input.ICommand value)

Sets the [ICommand](https://msdn.microsoft.com/en-us/library/system.windows.input.icommand.aspx) instance associated with the specified [DependencyObject](https://msdn.microsoft.com/en-us/library/system.windows.dependencyobject.aspx)

##### Parameters

| Name | Description | Type |
| --- | --- | --- |
| obj | The object on which to set the command to invoke | [DependencyObject](https://msdn.microsoft.com/en-us/library/system.windows.dependencyobject.aspx) |
| value | The Command instance to assign to the DependencyObject | [ICommand](https://msdn.microsoft.com/en-us/library/system.windows.input.icommand.aspx) |


### Properties

#### Command

Gets or sets the [ICommand](https://msdn.microsoft.com/en-us/library/system.windows.input.icommand.aspx) instance on which to invoke the [Execute](https://msdn.microsoft.com/en-us/library/system.windows.input.icommand.execute.aspx) method when the hyperlink is clicked
