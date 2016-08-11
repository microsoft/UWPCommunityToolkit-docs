---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Rss_AtomParser.htm
title: Microsoft.Toolkit.Uwp.Services.Rss.AtomParser API 
description: API page for Microsoft.Toolkit.Uwp.Services.Rss.AtomParser
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# AtomParser class

Parser for Atom endpoints.

## Members

The **AtomParser** class has the following types of members:

### Methods

#### LoadFeed(System.Xml.Linq.XDocument doc)

Atom reader implementation to parse Atom content.

##### Parameters



| Name | Description | Type || --- | --- | --- || doc | XDocument to parse. | [XDocument](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XDocument) || return |Strong typed response. |


#### GetRssSchema(System.Xml.Linq.XElement item)

Retieves strong type for passed item.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement to parse. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || return |Strong typed object. |


#### GetItemAuthor(System.Xml.Linq.XElement item)

Retrieves item author from XElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || return |String of Item Author. |


#### GetItemImage(System.Xml.Linq.XElement item)

Returns item image from XElement item.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || return |String pointing to item image. |


#### GetItemContent(System.Xml.Linq.XElement item)

Returns item content from XElement item.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || return |String of item content. |

