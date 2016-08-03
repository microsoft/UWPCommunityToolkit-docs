
# Microsoft.Toolkit.Uwp.ColorHelper class

This class provides static helper methods for colors.

## Members

The **Microsoft.Toolkit.Uwp.ColorHelper** namespace has these types of members:

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.ColorHelper.ToColor(System.String)

Returns a color based on XAML color string.

##### parameters




| name | description |

| --- | --- |

| colorString | The color string. Any format used in XAML should work. |

| return |P |

#### Microsoft.Toolkit.Uwp.ColorHelper.ToHex(Windows.UI.Color)

Converts a color value to a string representation of the value in hexadecimal.

##### parameters




| name | description |

| --- | --- |

| color | The Color to convert. |

| return |R |

#### Microsoft.Toolkit.Uwp.ColorHelper.ToInt(Windows.UI.Color)

Returns the color value as a premultiplied Int32 - 4 byte ARGB structure.

##### parameters




| name | description |

| --- | --- |

| color | the color to convert |

| return |R |

#### Microsoft.Toolkit.Uwp.ColorHelper.ToHsl(Windows.UI.Color)

Converts an RGBA Color the HSL representation.

##### parameters




| name | description |

| --- | --- |

| color | The color to convert. |

| return |H |

#### Microsoft.Toolkit.Uwp.ColorHelper.ToHsv(Windows.UI.Color)

Converts an RGBA Color the HSV representation.

##### parameters




| name | description |

| --- | --- |

| color | The color to convert. |

| return |H |

#### Microsoft.Toolkit.Uwp.ColorHelper.FromHsl(System.Double,System.Double,System.Double,System.Double)

Returns a color struct based on HSL model.

##### parameters




| name | description |

| --- | --- |

| hue | 0..360 range hue |

| saturation | 0..1 range saturation |

| lightness | 0..1 range lightness |

| alpha | 0..1 alpha |

| return |A |

#### Microsoft.Toolkit.Uwp.ColorHelper.FromHsv(System.Double,System.Double,System.Double,System.Double)

Returns a color struct based on HSV model.

##### parameters




| name | description |

| --- | --- |

| hue | 0..360 range hue |

| saturation | 0..1 range saturation |

| value | 0..1 range value |

| alpha | 0..1 alpha |

| return |A |
