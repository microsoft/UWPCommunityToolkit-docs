
# Microsoft.Toolkit.Uwp.UI.Controls.ImageEx class

The ImageEx control extends the default Image platform control improving the performance and responsiveness of your Apps.            Source images are downloaded asynchronously showing a load indicator while in progress.
            Once downloaded, the source image is stored in the App local cache to preserve resources and load time next time the image needs to be displayed.

## Members

The **Microsoft.Toolkit.Uwp.UI.Controls.ImageEx** namespace has these types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [events](#events)

* [fields](#fields)

### constructors

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.#ctor

Initializes a new instance of the [ImageEx](T_Microsoft_Toolkit_Uwp_UI_Controls_ImageEx) class.

### methods

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.GetAsCastingSource

Returns the image as a [CastingSource](T_Windows_Media_Casting_CastingSource).

##### parameters




| name | description |

| --- | --- |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.MeasureOverride(Windows.Foundation.Size)

Measures the size in layout required for child elements and determines a size for the control.

##### parameters




| name | description |

| --- | --- |

| availableSize | The available size that this element can give to child elements. Infinity can be specified as a value to indicate that the element will size to whatever content is available. |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.OnApplyTemplate

Update the visual state of the control when its template is changed.

### properties

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.Source

Gets or sets get or set the source used by the image

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.Stretch

Gets or sets the stretch of the image.

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.NineGrid

Gets or sets the nine-grid used by the image.

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.IsCacheEnabled

Gets or sets a value indicating whether gets or sets cache state

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.PlaceholderSource

Gets or sets the placeholder source.

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.PlaceholderStretch

Gets or sets the placeholder stretch.

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.PlaceholderAnimationDuration

Gets or sets the placeholder animation duration.

### events

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.ImageOpened

Event raised when the image is successfully loaded and opened.

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.ImageFailed

Event raised if the image failed loading.

### fields

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.PlaceholderAnimationDurationProperty

Identifies the [PlaceholderAnimationDuration](P_Microsoft_Toolkit_Uwp_UI_Controls_ImageEx_PlaceholderAnimationDuration) dependency property.

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.StretchProperty

Identifies the [Stretch](P_Microsoft_Toolkit_Uwp_UI_Controls_ImageEx_Stretch) dependency property.

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.NineGridProperty

Identifies the [NineGrid](P_Microsoft_Toolkit_Uwp_UI_Controls_ImageEx_NineGrid) dependency property.

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.PlaceholderStretchProperty

Identifies the [PlaceholderStretch](P_Microsoft_Toolkit_Uwp_UI_Controls_ImageEx_PlaceholderStretch) dependency property.

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.SourceProperty

Identifies the [Source](P_Microsoft_Toolkit_Uwp_UI_Controls_ImageEx_Source) dependency property.

#### Microsoft.Toolkit.Uwp.UI.Controls.ImageEx.PlaceholderSourceProperty

Identifies the [PlaceholderSource](P_Microsoft_Toolkit_Uwp_UI_Controls_ImageEx_PlaceholderSource) dependency property.
