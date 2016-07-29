
# Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser class

Rss reader implementation to parse Rss content.

## Members

The **Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser** namespace has these types of members

* [methods](#methods)

* [fields](#fields)

### methods

#### Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser.LoadFeed(System.Xml.Linq.XDocument)

This override load and parses the document and return a list of RssSchema values.

##### parameters




| name | description |

| --- | --- |

| doc | XDocument to be loaded. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser.ParseItem(System.Xml.Linq.XElement)

Parses XElement item into strong typed object.

##### parameters




| name | description |

| --- | --- |

| item | XElement item to parse. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser.ParseRDFItem(System.Xml.Linq.XElement)

Parses RSS version 1.0 objects.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser.ParseRssItem(System.Xml.Linq.XElement)

Parses RSS version 2.0 objects.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser.GetItemAuthor(System.Xml.Linq.XElement)

Retrieve item author from item.

##### parameters




| name | description |

| --- | --- |

| item | XElement item. |

| return |S |

### fields

#### Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser.NsRdfNamespaceUri

RDF Namespace Uri.

#### Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser.NsRdfElementsNamespaceUri

RDF Elements Namespace Uri.

#### Microsoft.Toolkit.Uwp.Services.Rss.Rss2Parser.NsRdfContentNamespaceUri

RDF Content Namespace Uri.
