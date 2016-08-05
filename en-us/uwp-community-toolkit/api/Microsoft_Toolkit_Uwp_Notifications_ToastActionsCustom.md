
# ToastActionsCustom class

Create your own custom actions, using controls like [ToastButton](Microsoft_Toolkit_Uwp_Notifications_ToastButton.md), [ToastTextBox](Microsoft_Toolkit_Uwp_Notifications_ToastTextBox.md), and [ToastSelectionBox](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBox.md).

## Members

The **ToastActionsCustom** class has this types of members

* [properties](#properties)

### properties

#### Inputs

Inputs like [ToastTextBox](Microsoft_Toolkit_Uwp_Notifications_ToastTextBox.md) and [ToastSelectionBox](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBox.md) can be added to the Toast. Only up to 5 inputs can be added; after that, an exception is thrown.

#### Buttons

Buttons are displayed after all the inputs (or adjacent to inputs if used as quick reply buttons). Only up to 5 buttons can be added (or fewer if you are also including context menu items). After that, an exception is thrown. You can add [ToastButton](Microsoft_Toolkit_Uwp_Notifications_ToastButton.md), [ToastButtonSnooze](Microsoft_Toolkit_Uwp_Notifications_ToastButtonSnooze.md), or [ToastButtonDismiss](Microsoft_Toolkit_Uwp_Notifications_ToastButtonDismiss.md)

#### ContextMenuItems

New in Anniversary Update: Custom context menu items, providing additional actions when the user right clicks the Toast notification. You can only have up to 5 buttons and context menu items *combined*. Thus, if you have one context menu item, you can only have four buttons, etc.
