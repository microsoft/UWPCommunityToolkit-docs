
# Microsoft.Toolkit.Uwp.Services.Rss.AtomParser class

Parser for Atom endpoints.

## Members

The **Microsoft.Toolkit.Uwp.Services.Rss.AtomParser** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.Services.Rss.AtomParser.LoadFeed(System.Xml.Linq.XDocument)

Atom reader implementation to parse Atom content.

##### parameters




| name | description |

| --- | --- |

| doc | XDocument to parse. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.AtomParser.GetRssSchema(System.Xml.Linq.XElement)

Retieves strong type for passed item.

##### parameters




| name | description |

| --- | --- |

| item | XElement to parse. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.AtomParser.GetItemAuthor(System.Xml.Linq.XElement)

Retrieves item author from XElement.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.AtomParser.GetItemImage(System.Xml.Linq.XElement)

Returns item image from XElement item.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.AtomParser.GetItemContent(System.Xml.Linq.XElement)

Returns item content from XElement item.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| return |S |
