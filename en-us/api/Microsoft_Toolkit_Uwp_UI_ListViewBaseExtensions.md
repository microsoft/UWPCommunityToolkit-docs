---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_ListViewBaseExtensions.htm
title: Microsoft.Toolkit.Uwp.UI.ListViewBaseExtensions API 
description: API page for Microsoft.Toolkit.Uwp.UI.ListViewBaseExtensions
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ListViewBaseExtensions class

At present there is no way to use ListViewBase's [ItemClick](https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.xaml.controls.listviewbase.itemclick.aspx) with MVVM.
ListViewBaseExtensions provides extension method that allow attaching ICommand to handle ListViewBase Item interaction using ICommand

## Members

The **ListViewBaseExtensions** class has the following types of members:

### Properties

#### Command

Gets or sets ICommand instance. The command is executed when ListViewBase Item receives interaction.

#### CommandParameter

Gets or sets the parameter to pass to the Command property.