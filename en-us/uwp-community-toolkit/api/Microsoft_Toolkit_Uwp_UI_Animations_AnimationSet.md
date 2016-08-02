
# AnimationSet class

Defines an object for storing and managing CompositionAnimations for an element

## Members

The **AnimationSet** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [events](#events)

### constructors

#### contructor

Initializes a new instance of the [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.md) class.

##### parameters



| name | description | type |
| --- | --- | --- |
| element | The associated element | Windows.UI.Xaml.UIElement |

### methods

#### Stop()

Stops all animations on the backing Visual.

#### AddEffectAnimation(Windows.UI.Composition.CompositionEffectBrush effectBrush,Windows.UI.Composition.CompositionAnimation animation,System.String propertyName)

Adds an effect animation to be run on StartAsync

##### parameters



| name | description | type |
| --- | --- | --- |
| effectBrush | The [CompositionEffectBrush](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionEffectBrush) that will have a property animated | Windows.UI.Composition.CompositionEffectBrush |
| animation | The animation to be applied | Windows.UI.Composition.CompositionAnimation |
| propertyName | The property of the effect to be animated | System.String |

#### RemoveAnimation(System.String propertyName)

Removes an animation from being run on StartAsync

##### parameters



| name | description | type |
| --- | --- | --- |
| propertyName | The property that no longer needs to be animated | System.String |

#### StartAsync()

Starts all animations on the backing Visual.

##### parameters



| name | description | type |
| --- | --- | --- |
| return |A [Task](https://msdn.microsoft.com/library/windows/apps/System.Threading.Tasks.Task) that can be awaited until all animations have completed |

#### AddAnimation(System.String propertyName,Windows.UI.Composition.CompositionAnimation animation)

Adds an animation to be run on StartAsync

##### parameters



| name | description | type |
| --- | --- | --- |
| propertyName | The property to be animated on the backing Visual | System.String |
| animation | The animation to be applied | Windows.UI.Composition.CompositionAnimation |

#### SetDurationForAll(System.Double duration)

Ovewrites the duration on all animations to the specified value

##### parameters



| name | description | type |
| --- | --- | --- |
| duration | The duration in seconds | System.Double |

#### SetDelayForAll(System.Double delayTime)

Ovewrites the delay time on all animations to the specified value

##### parameters



| name | description | type |
| --- | --- | --- |
| delayTime | The delay time in seconds | System.Double |

### properties

#### Element

Gets the [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement)

#### Visual

Gets the Visual object that backs the XAML element

### events

#### Completed

Occurs when all animations have completed
