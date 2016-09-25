---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_ListViewBaseExtensions.htm
title: Microsoft.Toolkit.Uwp.UI.ListViewBaseExtensions API 
description: API page for Microsoft.Toolkit.Uwp.UI.ListViewBaseExtensions
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ListViewBaseExtensions class

At present there is no way to use the [ItemClick](https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.xaml.controls.listviewbase.itemclick.aspx) event of ListViewBase with MVVM.
The ListViewBaseExtensions class provides an attached that allow binding a Command to handle ListViewBase Item interaction. This requires the ListViewBase [IsItemClickEnabled](https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.xaml.controls.listviewbase.isitemclickenabled.aspx) property to be set to true.

## Members

The **ListViewBaseExtensions** class has the following types of members:

### Properties

#### Command

Gets or sets ICommand instance. The command is executed when ListViewBase Item receives interaction provided ListViewBase IsItemClickEnabled property is set to true.
The ICommand is passed the Item that received the interaction.