---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Rss_RssHelper.htm
title: Microsoft.Toolkit.Uwp.Services.Rss.RssHelper API 
description: API page for Microsoft.Toolkit.Uwp.Services.Rss.RssHelper
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# RssHelper class

Class with utilities for Rss related works.

## Members

The **RssHelper** class has the following types of members:

* [Methods](#Methods)

* [Fields](#Fields)

### Methods

#### GetLink(System.Xml.Linq.XElement item,System.String rel)

Get feed url to see full original information.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || rel | rel attribute value. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |String link. |


#### GetSafeElementDate(System.Xml.Linq.XElement item,System.String elementName,System.Xml.Linq.XNamespace xNamespace)

Get item date from xelement, element name and namespace.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || elementName | Name of element. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || xNamespace | XNamespace namespace. | [XNamespace](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XNamespace) || return |Item date. |


#### GetSafeElementDate(System.Xml.Linq.XElement item,System.String elementName)

Get item date from xelement and element name.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || elementName | Name of element. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Item date. |


#### GetSafeElementString(System.Xml.Linq.XElement item,System.String elementName)

Get item string value for xelement and element name.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || elementName | Name of eleement. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Safe string. |


#### GetSafeElementString(System.Xml.Linq.XElement item,System.String elementName,System.Xml.Linq.XNamespace xNamespace)

Get item string value for xelement, element name and namespace.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || elementName | Name of element. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || xNamespace | XNamespace namespace. | [XNamespace](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XNamespace) || return |Safe string. |


#### SanitizeString(System.String text)

Removes \t characters in the string and trim additional space and carriage returns.

##### Parameters



| Name | Description | Type || --- | --- | --- || text | Text string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Sanitized string. |


#### GetImage(System.Xml.Linq.XElement item)

Get feed image.

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || return |Feed data image. |


#### GetImageFromEnclosure(System.Xml.Linq.XElement item)

Get the item image from the enclosure element http://www.w3schools.com/rss/rss_tag_enclosure.asp

##### Parameters



| Name | Description | Type || --- | --- | --- || item | XElement item. | [XElement](https://msdn.microsoft.com/library/windows/apps/System.Xml.Linq.XElement) || return |Feed data image. |


#### TryParseDateTime(System.String s,System.DateTime@ result)

Tries to parse the original string to a datetime format.

##### Parameters



| Name | Description | Type || --- | --- | --- || s | Input string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || result | Parsed datetime. | [out DateTime](https://msdn.microsoft.com/library/windows/apps/System.DateTime) || return |True if success |


#### TimeZoneToOffset(System.String tz)

Calculate and return timezone.

##### Parameters



| Name | Description | Type || --- | --- | --- || tz | Input string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Parsed timezone. |


#### GetImagesInHTMLString(System.String htmlString)

Retrieve images from HTML string.

##### Parameters



| Name | Description | Type || --- | --- | --- || htmlString | String of HTML. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |List of images. |


### Fields

#### WidthPattern

String for regular expression for width pattern.



#### RegexImages

Regular expression for image pattern.



#### RegexLinks

Regular expression for hyperlink pattern.



#### RegexHeight

Regular expression for height pattern.



#### RegexWidth

Regular expression for width pattern.



#### ImagePattern

String for regular expression for image pattern.



#### HeightPattern

String for regular expression for height pattern.



#### HiperlinkPattern

String for regular xpression for hyperlink pattern.



#### timeZones

Dictionary of timezones.


