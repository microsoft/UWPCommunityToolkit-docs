---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_HyperlinkExtensions.htm
title: Microsoft.Toolkit.Uwp.UI.HyperlinkExtensions API 
description: API page for Microsoft.Toolkit.Uwp.UI.HyperlinkExtensions
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# HyperlinkExtensions class

[Hyperlink](https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.xaml.documents.hyperlink.aspx) instances are used with Textblock or RichTextblock.
At present there is no way to bind Hyperlink to an ICommand defined in ViewModel. 
HyperlinkExtensions provides extension method that allows attaching command that is executed when [Click](https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.xaml.documents.hyperlink.click.aspx) event occurs.

## Members

The **HyperlinkExtensions** class has the following types of members:

### Properties

#### Command

Gets or sets ICommand instance. The command is executed when hyperlink is clicked.

#### CommandParameter

Gets or sets the parameter to pass to the Command property.