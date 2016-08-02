
# Microsoft.Toolkit.Uwp.Notifications namespace

## Classes

The **Microsoft.Toolkit.Uwp.Notifications** namespace has this types


| class | description |
| --- | --- |
| [AdaptiveGroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveGroup.md) | Groups semantically identify that the content in the group must either be displayed as a whole, or not displayed if it cannot fit. Groups also allow creating multiple columns. Supported on Tiles since RTM. Supported on Toasts since Anniversary Update. |
| [AdaptiveImage](Microsoft_Toolkit_Uwp_Notifications_AdaptiveImage.md) | An inline image. |
| [AdaptiveImageAlign](Microsoft_Toolkit_Uwp_Notifications_AdaptiveImageAlign.md) | Specifies the horizontal alignment for an image. |
| [AdaptiveImageCrop](Microsoft_Toolkit_Uwp_Notifications_AdaptiveImageCrop.md) | Specify the desired cropping of the image. |
| [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.md) | Subgroups are vertical columns that can contain text and images. Supported on Tiles since RTM. Supported on Toasts since Anniversary Update. |
| [AdaptiveSubgroupTextStacking](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroupTextStacking.md) | TextStacking specifies the vertical alignment of content. |
| [AdaptiveText](Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.md) | An adaptive text element. |
| [AdaptiveTextStyle](Microsoft_Toolkit_Uwp_Notifications_AdaptiveTextStyle.md) | Text style controls font size, weight, and opacity. |
| [AdaptiveTextAlign](Microsoft_Toolkit_Uwp_Notifications_AdaptiveTextAlign.md) | Controls the horizontal alignment of text. |
| [IAdaptiveSubgroupChild](Microsoft_Toolkit_Uwp_Notifications_IAdaptiveSubgroupChild.md) | Elements that can be direct children of an [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.md), including  ([AdaptiveText](Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.md) and [AdaptiveImage](Microsoft_Toolkit_Uwp_Notifications_AdaptiveImage.md)). |
| [IAdaptiveChild](Microsoft_Toolkit_Uwp_Notifications_IAdaptiveChild.md) | Elements that can be direct children of adaptive content, including ([AdaptiveText](Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.md), [AdaptiveImage](Microsoft_Toolkit_Uwp_Notifications_AdaptiveImage.md), and [AdaptiveGroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveGroup.md)). |
| [IBaseImage](Microsoft_Toolkit_Uwp_Notifications_IBaseImage.md) | Contains the base properties that an image needs. |
| [IBaseText](Microsoft_Toolkit_Uwp_Notifications_IBaseText.md) | Defines the basic properties of a text element. |
| [BadgeGlyphContent](Microsoft_Toolkit_Uwp_Notifications_BadgeGlyphContent.md) | Notification content object to display a glyph on a Tile's badge. |
| [BadgeGlyphValue](Microsoft_Toolkit_Uwp_Notifications_BadgeGlyphValue.md) | The types of glyphs that can be placed on a badge. |
| [BadgeNumericContent](Microsoft_Toolkit_Uwp_Notifications_BadgeNumericContent.md) | Notification content object to display a number on a Tile's badge. |
| [INotificationContent](Microsoft_Toolkit_Uwp_Notifications_INotificationContent.md) | Base notification content interface to retrieve notification Xml as a string. |
| [NotificationContentValidationException](Microsoft_Toolkit_Uwp_Notifications_NotificationContentValidationException.md) | Exception returned when invalid notification content is provided. |
| [NotificationXmlContentAttribute](Microsoft_Toolkit_Uwp_Notifications_NotificationXmlContentAttribute.md) | This attribute should be specified at most one time on an Element class. The property's value will be written as a string in the element's body. |
| [ITileBindingContentAdaptiveChild](Microsoft_Toolkit_Uwp_Notifications_ITileBindingContentAdaptiveChild.md) | Elements that can be direct children of [TileBindingContentAdaptive](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentAdaptive.md), including ([AdaptiveText](Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.md), [AdaptiveImage](Microsoft_Toolkit_Uwp_Notifications_AdaptiveImage.md), and [AdaptiveGroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveGroup.md)). |
| [TileBackgroundImage](Microsoft_Toolkit_Uwp_Notifications_TileBackgroundImage.md) | A full-bleed background image that appears beneath the Tile content. |
| [TileBasicImage](Microsoft_Toolkit_Uwp_Notifications_TileBasicImage.md) | An image used on various special templates for the Tile. |
| [TileBackgroundImageCrop](Microsoft_Toolkit_Uwp_Notifications_TileBackgroundImageCrop.md) | Specify the desired cropping of the image. |
| [TilePeekImageCrop](Microsoft_Toolkit_Uwp_Notifications_TilePeekImageCrop.md) | Specify the desired cropping of the image. |
| [TileBindingContentContact](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentContact.md) | Phone-only. Supported on Small, Medium, and Wide. |
| [TileBindingContentIconic](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentIconic.md) | Supported on Small and Medium. Enables an iconic Tile template, where you can have an icon and badge display next to each other on the Tile, in true classic Windows Phone style. The number next to the icon is achieved through a separate badge notification. |
| [TileBindingContentPeople](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentPeople.md) | New in 1511: Supported on Medium, Wide, and Large (Desktop and Mobile).            Previously for RTM: Phone-only. Supported on Medium and Wide. |
| [TileBindingContentPhotos](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentPhotos.md) | Animates through a slideshow of photos. Supported on all sizes. |
| [TileBasicText](Microsoft_Toolkit_Uwp_Notifications_TileBasicText.md) | A text element on the Tile. |
| [TileBinding](Microsoft_Toolkit_Uwp_Notifications_TileBinding.md) | The binding element contains the visual content for a specific Tile size. |
| [ITileBindingContent](Microsoft_Toolkit_Uwp_Notifications_ITileBindingContent.md) | Visual Tile content. One of [TileBindingContentAdaptive](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentAdaptive.md), [TileBindingContentIconic](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentIconic.md), [TileBindingContentPhotos](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentPhotos.md), [TileBindingContentPeople](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentPeople.md), or [TileBindingContentContact](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentContact.md). |
| [TileBindingContentAdaptive](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentAdaptive.md) | Supported on all sizes. This is the recommended way of specifying your Tile content. Adaptive Tile templates are the de-facto choice for Windows 10, and you can create a wide variety of custom Tiles through adaptive. |
| [TileBranding](Microsoft_Toolkit_Uwp_Notifications_TileBranding.md) | The form that the Tile should use to display the app's brand. |
| [TileContent](Microsoft_Toolkit_Uwp_Notifications_TileContent.md) | Base Tile element, which contains a single visual element. |
| [TilePeekImage](Microsoft_Toolkit_Uwp_Notifications_TilePeekImage.md) | A peek image that animates in from the top of the Tile. |
| [TileTextStacking](Microsoft_Toolkit_Uwp_Notifications_TileTextStacking.md) | TextStacking specifies the vertical alignment of content. |
| [TileVisual](Microsoft_Toolkit_Uwp_Notifications_TileVisual.md) | Contains multiple binding child elements, each of which defines a Tile. |
| [IToastBindingGenericChild](Microsoft_Toolkit_Uwp_Notifications_IToastBindingGenericChild.md) | Elements that can be direct children of [ToastBindingGeneric](Microsoft_Toolkit_Uwp_Notifications_ToastBindingGeneric.md), including ([AdaptiveText](Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.md), [AdaptiveImage](Microsoft_Toolkit_Uwp_Notifications_AdaptiveImage.md), and [AdaptiveGroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveGroup.md)). |
| [IToastButton](Microsoft_Toolkit_Uwp_Notifications_IToastButton.md) | One of [ToastButton](Microsoft_Toolkit_Uwp_Notifications_ToastButton.md), [ToastButtonSnooze](Microsoft_Toolkit_Uwp_Notifications_ToastButtonSnooze.md), or [ToastButtonDismiss](Microsoft_Toolkit_Uwp_Notifications_ToastButtonDismiss.md). |
| [IToastInput](Microsoft_Toolkit_Uwp_Notifications_IToastInput.md) | An input element on a Toast notification. One of [ToastTextBox](Microsoft_Toolkit_Uwp_Notifications_ToastTextBox.md) or [ToastSelectionBox](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBox.md). |
| [ToastActionsCustom](Microsoft_Toolkit_Uwp_Notifications_ToastActionsCustom.md) | Create your own custom actions, using controls like [ToastButton](Microsoft_Toolkit_Uwp_Notifications_ToastButton.md), [ToastTextBox](Microsoft_Toolkit_Uwp_Notifications_ToastTextBox.md), and [ToastSelectionBox](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBox.md). |
| [ToastActionsSnoozeAndDismiss](Microsoft_Toolkit_Uwp_Notifications_ToastActionsSnoozeAndDismiss.md) | Automatically constructs a selection box for snooze intervals, and snooze/dismiss buttons, all automatically localized, and snoozing logic is automatically handled by the system. |
| [ToastButtonDismiss](Microsoft_Toolkit_Uwp_Notifications_ToastButtonDismiss.md) | A button that, when clicked, is interpreted as a "dismiss" by the system, and the Toast is dismissed just like if the user swiped the Toast away. |
| [ToastButtonSnooze](Microsoft_Toolkit_Uwp_Notifications_ToastButtonSnooze.md) | A system-handled snooze button that automatically handles snoozing of a Toast notification. |
| [ToastActivationType](Microsoft_Toolkit_Uwp_Notifications_ToastActivationType.md) | Decides the type of activation that will be used when the user interacts with the Toast notification. |
| [ToastDuration](Microsoft_Toolkit_Uwp_Notifications_ToastDuration.md) | The amount of time the Toast should display. |
| [ToastScenario](Microsoft_Toolkit_Uwp_Notifications_ToastScenario.md) | Specifies the scenario, controlling behaviors about the Toast. |
| [ToastImageCrop](Microsoft_Toolkit_Uwp_Notifications_ToastImageCrop.md) | Specify the desired cropping of the image. |
| [IToastActions](Microsoft_Toolkit_Uwp_Notifications_IToastActions.md) | Actions to display on a Toast notification. One of [ToastActionsCustom](Microsoft_Toolkit_Uwp_Notifications_ToastActionsCustom.md) or [ToastActionsSnoozeAndDismiss](Microsoft_Toolkit_Uwp_Notifications_ToastActionsSnoozeAndDismiss.md). |
| [ToastAudio](Microsoft_Toolkit_Uwp_Notifications_ToastAudio.md) | Specify audio to be played when the Toast notification is received. |
| [ToastBindingGeneric](Microsoft_Toolkit_Uwp_Notifications_ToastBindingGeneric.md) | Generic Toast binding, where you provide text, images, and other visual elements for your Toast notification. |
| [ToastButton](Microsoft_Toolkit_Uwp_Notifications_ToastButton.md) | A button that the user can click on a Toast notification. |
| [ToastContent](Microsoft_Toolkit_Uwp_Notifications_ToastContent.md) | Base Toast element, which contains at least a visual element. |
| [ToastContextMenuItem](Microsoft_Toolkit_Uwp_Notifications_ToastContextMenuItem.md) | A Toast context menu item. |
| [ToastGenericAppLogo](Microsoft_Toolkit_Uwp_Notifications_ToastGenericAppLogo.md) | The logo that is displayed on your Toast notification. |
| [ToastGenericAppLogoCrop](Microsoft_Toolkit_Uwp_Notifications_ToastGenericAppLogoCrop.md) | Specify the desired cropping of the image. |
| [ToastGenericAttributionText](Microsoft_Toolkit_Uwp_Notifications_ToastGenericAttributionText.md) | Defines an attribution text element to be displayed on the Toast notification. |
| [ToastGenericHeroImage](Microsoft_Toolkit_Uwp_Notifications_ToastGenericHeroImage.md) | A hero image for the Toast notification. |
| [ToastSelectionBox](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBox.md) | A selection box control, which lets users pick from a dropdown list of options. |
| [ToastSelectionBoxItem](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBoxItem.md) | A selection box item (an item that the user can select from the drop down list). |
| [ToastTextBox](Microsoft_Toolkit_Uwp_Notifications_ToastTextBox.md) | A text box control on the Toast that a user can type text into. |
| [ToastVisual](Microsoft_Toolkit_Uwp_Notifications_ToastVisual.md) | Defines the visual aspects of a Toast notification. |
