
# ToastSelectionBox class

A selection box control, which lets users pick from a dropdown list of options.

## Members

The **ToastSelectionBox** class has this types of members

* [constructors](#constructors)

* [properties](#properties)

### constructors

#### contructor

Initializes a new Toast SelectionBox input control with the required elements.

##### parameters



| name | description | type || --- | --- | --- || id | Developer-provided ID that the developer uses later to retrieve input when the Toast is interacted with. | System.String |
### properties

#### Id

The ID property is required, and is used so that developers can retrieve user input once the app is activated.

#### Title

Title text to display above the SelectionBox.

#### DefaultSelectionBoxItemId

This controls which item is selected by default, and refers to the Id property of [ToastSelectionBoxItem](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBoxItem.md). If you do not provide this, the default selection will be empty (user sees nothing).

#### Items

The selection items that the user can pick from in this SelectionBox. Only 5 items can be added.
