
# BadgeGlyphContent class

Notification content object to display a glyph on a Tile's badge.

## Members

The **BadgeGlyphContent** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

### constructors

#### contructor

Default constructor to create a glyph badge content object.

#### contructor

Constructor to create a glyph badge content object with a glyph.

##### parameters



| name | description | type || --- | --- | --- || glyph | The glyph to be displayed on the badge. | [BadgeGlyphValue](Microsoft_Toolkit_Uwp_Notifications_BadgeGlyphValue.md) |
### methods

#### GetContent()

Retrieves the notification Xml content as a string.

##### parameters



| name | description | type || --- | --- | --- || return |The notification Xml content as a string. |
#### ToString()

Retrieves the notification XML content as a string.

##### parameters



| name | description | type || --- | --- | --- || return |The notification XML content as a string. |
#### GetXml()

Retrieves the notification XML content as a WinRT Xml document.

##### parameters



| name | description | type || --- | --- | --- || return |The notification XML content as a WinRT Xml document. |
### properties

#### Glyph

The glyph to be displayed on the badge.
