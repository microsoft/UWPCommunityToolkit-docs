---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Rss_Rss2Parser.htm
title: Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser API 
description: API page for Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# Rss2Parser class

Rss reader implementation to parse Rss content.

## Members

The **Rss2Parser** class has the following types of members:

* [Methods](#Methods)

* [Fields](#Fields)

### Methods

#### LoadFeed(System.Xml.Linq.XDocument doc)

This override load and parses the document and return a list of RssSchema values.

##### Parameters



| Name | Description | Type || --- | --- | --- || doc | XDocument to be loaded. | [XDocument](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XDocument) || return |Strongly typed list of feeds. |




#### ParseItem(System.Xml.Linq.XElement item)

Parses XElement item into strong typed object.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item to parse. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || return |Strong typed object. |




#### ParseRDFItem(System.Xml.Linq.XElement item)

Parses RSS version 1.0 objects.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || return |Strong typed object. |




#### ParseRssItem(System.Xml.Linq.XElement item)

Parses RSS version 2.0 objects.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || return |Strong typed object. |




#### GetItemAuthor(System.Xml.Linq.XElement item)

Retrieve item author from item.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || return |String of item author. |




### Fields

#### NsRdfNamespaceUri

RDF Namespace Uri.





#### NsRdfElementsNamespaceUri

RDF Elements Namespace Uri.





#### NsRdfContentNamespaceUri

RDF Content Namespace Uri.




