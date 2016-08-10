---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_ControlHelpers.htm
title: Microsoft.Toolkit.Uwp.ControlHelpers API 
description: API page for Microsoft.Toolkit.Uwp.ControlHelpers
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ControlHelpers class

Internal class used to provide helpers for controls

## Members

The **ControlHelpers** class has this types of members

* [methods](#methods)

### methods

#### GetVisual(Windows.UI.Xaml.UIElement element)

Get the visual associated with an UIElement

##### parameters



| name | description | type || --- | --- | --- || element | Source UIElement | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) || return |ContainerVisual associated with the element |


#### Mod(System.Int32 value,System.Int32 module)

Gets the positive modulo of an integer

##### parameters



| name | description | type || --- | --- | --- || value | Value to use | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || module | Module to use | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || return |Positive modulo |


#### IncMod(System.Int32 value,System.Int32 module)

Gets modulo of value + 1

##### parameters



| name | description | type || --- | --- | --- || value | Value to use | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || module | Module to use | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || return |Modulo of value + 1 |


#### DecMod(System.Int32 value,System.Int32 module)

Gets modulo of value - 1

##### parameters



| name | description | type || --- | --- | --- || value | Value to use | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || module | Module to use | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || return |Modulo of value - 1 |


#### Mod(System.Double value,System.Double module)

Gets the positive modulo of a double

##### parameters



| name | description | type || --- | --- | --- || value | Value to use | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || module | Module to use | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |Positive modulo |

