
# Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand class

Represents a command that can perform a given action.

## Members

The **Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand** namespace has these types of members

* [constructors](#constructors)

* [methods](#methods)

* [events](#events)

* [fields](#fields)

### constructors

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand.#ctor(System.Action,System.Func{System.Boolean})

Initializes a new instance of the [DelegateCommand](T_Microsoft_Toolkit_Uwp_Services_Core_DelegateCommand) class.

##### parameters




| name | description |

| --- | --- |

| execute | The action to execute when called. |

| canExecute | The function to call to determine if the command can execute the action. |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

### methods

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand.CanExecute(System.Object)

Defines the method that determines whether the command can execute in its current state.

##### parameters




| name | description |

| --- | --- |

| parameter | The parameter used by the command. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand.Execute(System.Object)

Defines the method to be called when the command is invoked.

##### parameters




| name | description |

| --- | --- |

| parameter | The parameter used by the command. |

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand.RaiseCanExecuteChanged

Fires notification event when the CanExecute property has changed.

### events

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand.CanExecuteChanged

Occurs when changes occur that affect whether or not the command should execute.

### fields

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand.commandExecuteAction

Field for commandExecuteAction.

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand.commandCanExecute

Field for whether the command can execute.
