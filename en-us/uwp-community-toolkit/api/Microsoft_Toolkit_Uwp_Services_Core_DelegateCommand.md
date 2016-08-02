
# DelegateCommand class

Represents a command that can perform a given action.

## Members

The **DelegateCommand** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [events](#events)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [DelegateCommand](Microsoft_Toolkit_Uwp_Services_Core_DelegateCommand.md) class.

##### parameters



| name | description | type |
| --- | --- | --- |
| execute | The action to execute when called. | System.Action |
| canExecute | The function to call to determine if the command can execute the action. | System.Func(System.Boolean) |

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

### events

#### CanExecuteChanged

Occurs when changes occur that affect whether or not the command should execute.

### fields

#### commandExecuteAction

Field for commandExecuteAction.

#### commandCanExecute

Field for whether the command can execute.
