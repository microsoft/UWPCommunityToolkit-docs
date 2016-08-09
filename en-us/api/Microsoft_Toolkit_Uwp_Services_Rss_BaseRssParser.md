---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Rss_BaseRssParser.htm
title: Microsoft.Toolkit.Uwp.Services.Rss.BaseRssParser API 
description: API page for Microsoft.Toolkit.Uwp.Services.Rss.BaseRssParser
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# BaseRssParser class

Base class for Rss Parser(s).

## Members

The **BaseRssParser** class has this types of members

* [methods](#methods)

### methods

#### GetFeedType(System.Xml.Linq.XDocument doc)

Retrieve feed type from XDocument.

##### parameters



| name | description | type |


#### LoadFeed(System.Xml.Linq.XDocument doc)

Abstract method to be override by specific implementations of the reader.

##### parameters



| name | description | type |


#### ProcessHtmlContent(System.String htmlContent)

Fix up the HTML content.

##### parameters



| name | description | type |


#### ProcessHtmlSummary(System.String htmlContent)

Create a summary of the HTML content.

##### parameters



| name | description | type |
