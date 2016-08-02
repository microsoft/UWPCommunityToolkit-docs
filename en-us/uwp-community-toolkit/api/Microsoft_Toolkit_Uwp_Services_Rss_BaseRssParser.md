
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
| --- | --- | --- |
| doc | XDocument doc. | System.Xml.Linq.XDocument |
| return |Return feed type. |

#### LoadFeed(System.Xml.Linq.XDocument doc)

Abstract method to be override by specific implementations of the reader.

##### parameters



| name | description | type |
| --- | --- | --- |
| doc | XDocument doc. | System.Xml.Linq.XDocument |
| return |Returns list of strongly typed results. |

#### ProcessHtmlContent(System.String htmlContent)

Fix up the HTML content.

##### parameters



| name | description | type |
| --- | --- | --- |
| htmlContent | Content to be fixed up. | System.String |
| return |Fixed up content. |

#### ProcessHtmlSummary(System.String htmlContent)

Create a summary of the HTML content.

##### parameters



| name | description | type |
| --- | --- | --- |
| htmlContent | Content to be processed. | System.String |
| return |Summary of the content. |
