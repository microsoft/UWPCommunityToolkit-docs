
# AdaptiveGroup class

Groups semantically identify that the content in the group must either be displayed as a whole, or not displayed if it cannot fit. Groups also allow creating multiple columns. Supported on Tiles since RTM. Supported on Toasts since Anniversary Update.

## Members

The **AdaptiveGroup** class has this types of members

* [properties](#properties)

### properties

#### Children

The only valid children of groups are [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.md). Each subgroup is displayed as a separate vertical column. Note that you must include at least one subgroup in your group, otherwise an [InvalidOperationException](https://msdn.microsoft.com/library/windows/apps/System.InvalidOperationException) will be thrown when you try to retrieve the XML for the notification.
