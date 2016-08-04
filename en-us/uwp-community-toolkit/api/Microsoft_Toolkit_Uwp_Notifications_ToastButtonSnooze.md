
# ToastButtonSnooze class

A system-handled snooze button that automatically handles snoozing of a Toast notification.

## Members

The **ToastButtonSnooze** class has this types of members

* [constructors](#constructors)

* [properties](#properties)

### constructors

#### contructor

Initializes a system-handled snooze button that displays localized "Snooze" text on the button and automatically handles snoozing.

#### contructor

Initializes a system-handled snooze button that displays your text on the button and automatically handles snoozing.

##### parameters



| name | description | type || --- | --- | --- || customContent | The text you want displayed on the button. | System.String |
### properties

#### CustomContent

Custom text displayed on the button that overrides the default localized "Snooze" text.

#### SelectionBoxId

Optionally specify the ID of an existing [ToastSelectionBox](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBox.md) in order to allow the user to pick a custom snooze time. The ID's of the [ToastSelectionBoxItem](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBoxItem.md)s inside the selection box must represent the snooze interval in minutes. For example, if the user selects an item that has an ID of "120", then the notification will be snoozed for 2 hours. When the user clicks this button, if you specified a SelectionBoxId, the system will parse the ID of the selected item and snooze by that amount of minutes. If you didn't specify a SelectionBoxId, the system will snooze by the default system snooze time.
