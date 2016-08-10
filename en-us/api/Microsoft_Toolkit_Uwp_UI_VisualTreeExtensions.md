---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_VisualTreeExtensions.htm
title: Microsoft.Toolkit.Uwp.UI.VisualTreeExtensions API 
description: API page for Microsoft.Toolkit.Uwp.UI.VisualTreeExtensions
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# VisualTreeExtensions class

Defines a collection of extensions methods for UI.

## Members

The **VisualTreeExtensions** class has this types of members

* [methods](#methods)

### methods

#### FindDescendantByName(Windows.UI.Xaml.FrameworkElement element,System.String name)

Find descendant control using its name.

##### parameters



| name | description | type || --- | --- | --- || element | Parent element. | [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement) || name | Name of the control to find | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Descendant control or null if not found. |


#### FindDescendant``1(Windows.UI.Xaml.DependencyObject element)

Find first descendant control of a specified type.

##### parameters



| name | description | type || --- | --- | --- || element | Parent element. | [DependencyObject](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.DependencyObject) || return |Descendant control or null if not found. |


#### FindAscendant``1(Windows.UI.Xaml.FrameworkElement element)

Find first ascendant control of a specified type.

##### parameters



| name | description | type || --- | --- | --- || element | Child element. | [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement) || return |Ascendant control or null if not found. |


#### FindVisualAscendant``1(Windows.UI.Xaml.FrameworkElement element)

Find first visual ascendant control of a specified type.

##### parameters



| name | description | type || --- | --- | --- || element | Child element. | [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement) || return |Ascendant control or null if not found. |

