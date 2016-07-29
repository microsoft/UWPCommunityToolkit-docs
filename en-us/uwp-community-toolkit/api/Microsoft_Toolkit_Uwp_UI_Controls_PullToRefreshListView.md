
# Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView class

Extension of ListView that allows "Pull To Refresh" on touch devices

## Members

The **Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView** namespace has these types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [events](#events)

* [fields](#fields)

### constructors

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.#ctor

Initializes a new instance of the [PullToRefreshListView](T_Microsoft_Toolkit_Uwp_UI_Controls_PullToRefreshListView) class.

### methods

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.OnApplyTemplate

Invoked whenever application code or internal processes (such as a rebuilding            layout pass) call [OnApplyTemplate](M_Microsoft_Toolkit_Uwp_UI_Controls_PullToRefreshListView_OnApplyTemplate). In simplest terms, this means the method
            is called just before a UI element displays in an application. Override this
            method to influence the default post-template logic of a class.

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.RefreshableListView_SizeChanged(System.Object,Windows.UI.Xaml.SizeChangedEventArgs)

Handler for SizeChanged event, handles cliping

### properties

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.PullThreshold

Gets or sets the PullThreshold in pixels for when Refresh should be Requested. Default is 100

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.OverscrollLimit

Gets or sets the Overscroll Limit. Value between 0 and 1 where 1 is the height of the control. Default is 0.3

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.RefreshIndicatorContent

Gets or sets the Content of the Refresh Indicator

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.RefreshCommand

Gets or sets the Command that will be invoked when Refresh is requested

### events

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.PullProgressChanged

Occurs when listview overscroll distance is changed

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.RefreshRequested

Occurs when the user has requested content to be refreshed

### fields

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.PullThresholdProperty

Identifies the [PullThreshold](P_Microsoft_Toolkit_Uwp_UI_Controls_PullToRefreshListView_PullThreshold) property.

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.RefreshIndicatorContentProperty

Identifies the [RefreshIndicatorContent](P_Microsoft_Toolkit_Uwp_UI_Controls_PullToRefreshListView_RefreshIndicatorContent) property.

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.RefreshCommandProperty

Identifies the [RefreshCommand](P_Microsoft_Toolkit_Uwp_UI_Controls_PullToRefreshListView_RefreshCommand) property.

#### Microsoft.Toolkit.Uwp.UI.Controls.PullToRefreshListView.OverscrollLimitProperty

Identifies the [OverscrollLimit](P_Microsoft_Toolkit_Uwp_UI_Controls_PullToRefreshListView_OverscrollLimit) property.
