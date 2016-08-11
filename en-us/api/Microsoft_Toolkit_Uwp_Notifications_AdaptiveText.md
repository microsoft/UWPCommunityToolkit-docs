---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.htm
title: Microsoft.Toolkit.Uwp.Notifications.AdaptiveText API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.AdaptiveText
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# AdaptiveText class

An adaptive text element.

## Members

The **AdaptiveText** class has the following types of members:

### Methods

#### ToString()

Returns the value of the Text property.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |The value of the Text property. |


### Properties

#### Text

The text to display.



#### Language

The target locale of the XML payload, specified as a BCP-47 language tags such as "en-US" or "fr-FR". The locale specified here overrides any other specified locale, such as that in binding or visual. If this value is a literal string, this attribute defaults to the user's UI language. If this value is a string reference, this attribute defaults to the locale chosen by Windows Runtime in resolving the string.



#### HintStyle

The style controls the text's font size, weight, and opacity. Note that for Toast, the style will only take effect if the text is inside an [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.htm).



#### HintWrap

Set this to true to enable text wrapping. For Tiles, this is false by default. For Toasts, this is true on top-level text elements, and false inside an [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.htm). Note that for Toast, setting wrap will only take effect if the text is inside an [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.htm) (you can use HintMaxLines = 1 to prevent top-level text elements from wrapping).



#### HintMaxLines

The maximum number of lines the text element is allowed to display. For Tiles, this is infinity by default. For Toasts, top-level text elements will have varying max line amounts (and in the Anniversary Update you can change the max lines). Text on a Toast inside an [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.htm) will behave identically to Tiles (default to infinity).



#### HintMinLines

The minimum number of lines the text element must display. Note that for Toast, this property will only take effect if the text is inside an [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.htm).



#### HintAlign

The horizontal alignment of the text. Note that for Toast, this property will only take effect if the text is inside an [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.htm).


