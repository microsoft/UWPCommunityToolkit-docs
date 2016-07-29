
# Microsoft.Toolkit.Uwp.Services.Rss.RssHelper class

Class with utilities for Rss related works.

## Members

The **Microsoft.Toolkit.Uwp.Services.Rss.RssHelper** namespace has these types of members

* [methods](#methods)

* [fields](#fields)

### methods

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.GetLink(System.Xml.Linq.XElement,System.String)

Get feed url to see full original information.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| rel | rel attribute value. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.GetSafeElementDate(System.Xml.Linq.XElement,System.String,System.Xml.Linq.XNamespace)

Get item date from xelement, element name and namespace.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| elementName | Name of element. |

| xNamespace | XNamespace namespace. |

| return |I |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.GetSafeElementDate(System.Xml.Linq.XElement,System.String)

Get item date from xelement and element name.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| elementName | Name of element. |

| return |I |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.GetSafeElementString(System.Xml.Linq.XElement,System.String)

Get item string value for xelement and element name.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| elementName | Name of eleement. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.GetSafeElementString(System.Xml.Linq.XElement,System.String,System.Xml.Linq.XNamespace)

Get item string value for xelement, element name and namespace.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| elementName | Name of element. |

| xNamespace | XNamespace namespace. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.SanitizeString(System.String)

Removes \t characters in the string and trim additional space and carriage returns.

##### parameters




| name | description |

| --- | --- |

| text | Text string. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.GetImage(System.Xml.Linq.XElement)

Get feed image.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| return |F |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.GetImageFromEnclosure(System.Xml.Linq.XElement)

Get the item image from the enclosure element http://www.w3schools.com/rss/rss_tag_enclosure.asp

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| return |F |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.TryParseDateTime(System.String,System.DateTime@)

Tries to parse the original string to a datetime format.

##### parameters




| name | description |

| --- | --- |

| s | Input string. |

| result | Parsed datetime. |

| return |T |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.TimeZoneToOffset(System.String)

Calculate and return timezone.

##### parameters




| name | description |

| --- | --- |

| tz | Input string. |

| return |P |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.GetImagesInHTMLString(System.String)

Retrieve images from HTML string.

##### parameters




| name | description |

| --- | --- |

| htmlString | String of HTML. |

| return |L |

### fields

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.WidthPattern

String for regular expression for width pattern.

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.RegexImages

Regular expression for image pattern.

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.RegexLinks

Regular expression for hyperlink pattern.

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.RegexHeight

Regular expression for height pattern.

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.RegexWidth

Regular expression for width pattern.

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.ImagePattern

String for regular expression for image pattern.

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.HeightPattern

String for regular expression for height pattern.

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.HiperlinkPattern

String for regular xpression for hyperlink pattern.

#### Microsoft.Toolkit.Uwp.Services.Rss.RssHelper.timeZones

Dictionary of timezones.
