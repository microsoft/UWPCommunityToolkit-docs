
# AtomParser class

Parser for Atom endpoints.

## Members

The **AtomParser** class has this types of members

* [methods](#methods)

### methods

#### LoadFeed(System.Xml.Linq.XDocument doc)

Atom reader implementation to parse Atom content.

##### parameters



| name | description | type || --- | --- | --- || doc | XDocument to parse. | System.Xml.Linq.XDocument || return |Strong typed response. |
#### GetRssSchema(System.Xml.Linq.XElement item)

Retieves strong type for passed item.

##### parameters



| name | description | type || --- | --- | --- || item | XElement to parse. | System.Xml.Linq.XElement || return |Strong typed object. |
#### GetItemAuthor(System.Xml.Linq.XElement item)

Retrieves item author from XElement.

##### parameters



| name | description | type || --- | --- | --- || item | XElement item. | System.Xml.Linq.XElement || return |String of Item Author. |
#### GetItemImage(System.Xml.Linq.XElement item)

Returns item image from XElement item.

##### parameters



| name | description | type || --- | --- | --- || item | XElement item. | System.Xml.Linq.XElement || return |String pointing to item image. |
#### GetItemContent(System.Xml.Linq.XElement item)

Returns item content from XElement item.

##### parameters



| name | description | type || --- | --- | --- || item | XElement item. | System.Xml.Linq.XElement || return |String of item content. |