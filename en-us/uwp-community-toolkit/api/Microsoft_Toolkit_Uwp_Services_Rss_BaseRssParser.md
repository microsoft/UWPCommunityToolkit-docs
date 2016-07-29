
# Microsoft.Toolkit.Uwp.Services.Rss.BaseRssParser class

Base class for Rss Parser(s).

## Members

The **Microsoft.Toolkit.Uwp.Services.Rss.BaseRssParser** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.Services.Rss.BaseRssParser.GetFeedType(System.Xml.Linq.XDocument)

Retrieve feed type from XDocument.

##### parameters




| name | description |

| --- | --- |

| doc | XDocument doc. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Rss.BaseRssParser.LoadFeed(System.Xml.Linq.XDocument)

Abstract method to be override by specific implementations of the reader.

##### parameters




| name | description |

| --- | --- |

| doc | XDocument doc. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Rss.BaseRssParser.ProcessHtmlContent(System.String)

Fix up the HTML content.

##### parameters




| name | description |

| --- | --- |

| htmlContent | Content to be fixed up. |

| return |F |

#### Microsoft.Toolkit.Uwp.Services.Rss.BaseRssParser.ProcessHtmlSummary(System.String)

Create a summary of the HTML content.

##### parameters




| name | description |

| --- | --- |

| htmlContent | Content to be processed. |

| return |S |
