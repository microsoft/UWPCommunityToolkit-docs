---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Rss_BaseRssParser.htm
title: Microsoft.Toolkit.Uwp.Services.Rss.BaseRssParser API 
description: API page for Microsoft.Toolkit.Uwp.Services.Rss.BaseRssParser
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# BaseRssParser class

Base class for Rss Parser(s).

## Members

The **BaseRssParser** class has the following types of members:

* [Methods](#Methods)

### Methods

#### GetFeedType(System.Xml.Linq.XDocument doc)

Retrieve feed type from XDocument.

##### Parameters



| Name | Description | Type || --- | --- | --- || doc | XDocument doc. | [XDocument](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XDocument) || return |Return feed type. |


#### LoadFeed(System.Xml.Linq.XDocument doc)

Abstract method to be override by specific implementations of the reader.

##### Parameters



| Name | Description | Type || --- | --- | --- || doc | XDocument doc. | [XDocument](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XDocument) || return |Returns list of strongly typed results. |


#### ProcessHtmlContent(System.String htmlContent)

Fix up the HTML content.

##### Parameters



| Name | Description | Type || --- | --- | --- || htmlContent | Content to be fixed up. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Fixed up content. |


#### ProcessHtmlSummary(System.String htmlContent)

Create a summary of the HTML content.

##### Parameters



| Name | Description | Type || --- | --- | --- || htmlContent | Content to be processed. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Summary of the content. |

