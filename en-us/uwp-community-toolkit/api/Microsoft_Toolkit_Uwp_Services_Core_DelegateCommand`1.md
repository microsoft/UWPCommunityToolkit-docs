
# DelegateCommand<T1> class

Represents a generic command that can perform a given action.

## Members

The **DelegateCommand<T1>** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [events](#events)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [DelegateCommand<T1>](Microsoft_Toolkit_Uwp_Services_Core_DelegateCommand`1.md) class.

##### parameters



| name | description | type |
| --- | --- | --- |
| executeAction | The action to execute when called. | System.Action(T0) |
| canExecute | The function to call to determine if the command can execute the action. | System.Func(T0,System.Boolean) |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

### methods

#### CanExecute(System.Object parameter)

Defines the method that determines whether the command can execute in its current state.

##### parameters



| name | description | type |
| --- | --- | --- |
| parameter | The parameter used by the command. | System.Object |
| return |Returns a value indicating whether this command can be executed. |

#### Execute(System.Object parameter)

Defines the method to be called when the command is invoked.

##### parameters



| name | description | type |
| --- | --- | --- |
| parameter | The parameter used by the command. | System.Object |

#### RaiseCanExecuteChanged()

Fires notification event when the CanExecute property has changed.

#### ConvertParameterValue(System.Object parameter)

Converts a paramter value to given type.

##### parameters



| name | description | type |
| --- | --- | --- |
| parameter | Value of the command parameter. | System.Object |
| return |Strong typed parameter value. |

### events

#### CanExecuteChanged

Occurs when changes occur that affect whether or not the command should execute.

### fields

#### commandExecuteAction

Field for commandExecuteAction.

#### commandCanExecute

Field for whether the command can execute.
