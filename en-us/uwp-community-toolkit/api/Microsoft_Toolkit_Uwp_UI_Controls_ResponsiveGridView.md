
# ResponsiveGridView class

The ResponsiveGridView control allows to present information within a Grid View perfectly adjusting the            total display available space. It reacts to changes in the layout as well as the content so it can adapt
            to different form factors automatically.

## Members

The **ResponsiveGridView** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [events](#events)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [ResponsiveGridView](Microsoft_Toolkit_Uwp_UI_Controls_ResponsiveGridView.md) class.

### methods

#### OnApplyTemplate()

Invoked whenever application code or internal processes (such as a rebuilding layout pass) call            ApplyTemplate. In simplest terms, this means the method is called just before a UI element displays
            in your app. Override this method to influence the default post-template logic of a class.

### properties

#### DesiredWidth

Gets or sets the desired width of each item

#### OneRowModeEnabled

Gets or sets a value indicating whether only one row should be displayed.

#### ItemTemplate

Gets or sets the DataTemplate used to display each item.

#### ItemsSource

Gets or sets an object source used to generate the content of the grid.

#### ItemHeight

Gets or sets the height of each item in the grid.

#### ItemClickCommand

Gets or sets the command to execute when an item is clicked.

### events

#### ItemClick

Event raised when an item is clicked

### fields

#### ItemsSourceProperty

Identifies the ItemsSource dependency property.

#### DesiredWidthProperty

Identifies the DesiredWidth dependency property.

#### ItemWidthProperty

Identifies the ItemWidth dependency property.

#### VerticalScrollProperty

Identifies the VerticalScroll dependency property.

#### OneRowModeEnabledProperty

Identifies the OneRowModeEnabled dependency property.

#### ItemHeightProperty

Identifies the ItemHeight dependency property.

#### ItemTemplateProperty

Identifies the ItemTemplate dependency property.

#### ItemClickCommandProperty

Identifies the ItemClickCommand dependency property.
