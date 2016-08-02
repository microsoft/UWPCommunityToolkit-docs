
# TileBackgroundImage class

A full-bleed background image that appears beneath the Tile content.

## Members

The **TileBackgroundImage** class has this types of members

* [properties](#properties)

### properties

#### Source

The URI of the image. Can be from your application package, application data, or the internet. Internet images must be less than 200 KB in size.

#### AlternateText

A description of the image, for users of assistive technologies.

#### AddImageQuery

Set to true to allow Windows to append a query string to the image URI supplied in the Tile notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language.

#### HintOverlay

A black overlay on the background image. This value controls the opacity of the black overlay, with 0 being no overlay and 100 being completely black. Defaults to 20.

#### HintCrop

New in 1511: Control the desired cropping of the image.            Previously for RTM: Did not exist, value will be ignored and background image will be displayed without any cropping.
