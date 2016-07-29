
# Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase class

A base class for all behaviors using composition.It contains some of the common propeties to set on a visual.

## Members

The **Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase** namespace has these types of members

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### methods

#### Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase.OnAttached

Called after the behavior is attached to the [AssociatedObject](P_Microsoft_Xaml_Interactivity_Behavior_AssociatedObject).

#### Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase.StartAnimation

Starts the animation.

#### Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase.PropertyChangedCallback(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyPropertyChangedEventArgs)

If any of the properties are changed then the animation is automatically started depending on the AutomaticallyStart property.

##### parameters




| name | description |

| --- | --- |

| dependencyObject | The dependency object. |

| dependencyPropertyChangedEventArgs | The [DependencyPropertyChangedEventArgs](T_Windows_UI_Xaml_DependencyPropertyChangedEventArgs) instance containing the event data. |

### properties

#### Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase.AutomaticallyStart

Gets or sets a value indicating whether [automatically start] on the animation is set.

#### Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase.Delay

Gets or sets the delay.

#### Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase.Duration

Gets or sets the duration.

### fields

#### Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase.DurationProperty

The duration of the animation.

#### Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase.DelayProperty

The delay of the animation.

#### Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase.AutomaticallyStartProperty

The property sets if the animation should automatically start.
