
# PullToRefreshListView class

Extension of ListView that allows "Pull To Refresh" on touch devices

## Members

The **PullToRefreshListView** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [events](#events)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [PullToRefreshListView](Microsoft_Toolkit_Uwp_UI_Controls_PullToRefreshListView.md) class.

### methods

#### OnApplyTemplate()

Invoked whenever application code or internal processes (such as a rebuilding            layout pass) call OnApplyTemplate. In simplest terms, this means the method
            is called just before a UI element displays in an application. Override this
            method to influence the default post-template logic of a class.

#### RefreshableListView_SizeChanged()

Handler for SizeChanged event, handles cliping

### properties

#### PullThreshold

Gets or sets the PullThreshold in pixels for when Refresh should be Requested. Default is 100

#### OverscrollLimit

Gets or sets the Overscroll Limit. Value between 0 and 1 where 1 is the height of the control. Default is 0.3

#### RefreshIndicatorContent

Gets or sets the Content of the Refresh Indicator

#### RefreshCommand

Gets or sets the Command that will be invoked when Refresh is requested

### events

#### PullProgressChanged

Occurs when listview overscroll distance is changed

#### RefreshRequested

Occurs when the user has requested content to be refreshed

### fields

#### PullThresholdProperty

Identifies the PullThreshold property.

#### RefreshIndicatorContentProperty

Identifies the RefreshIndicatorContent property.

#### RefreshCommandProperty

Identifies the RefreshCommand property.

#### OverscrollLimitProperty

Identifies the OverscrollLimit property.
