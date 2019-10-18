# MerjMirror
Code that runs on the Raspberry Pi it will pull from the database and pull in all need data from apis to display the info on the mirror


## Widgets
Here is a list of all of the widgets that are currently a part of the MERJ Mirror. 

In each section is the configuration for the widgets which will go into the config section of each spot. 


### ***Clock***
This is your basic date time clock.

#### Configuration
|Name|Default|Description|
|-|-|-|
|timeFormat|12|Is the clock a 12 or 24 hour clock.|
|hourZero|false|Put a preceding 0 in front of the hour if it is under 10|
|minuteZero|false|Put a preceding 0 in front of the hour if it is under 10|
|secondZero|true|Put a preceding 0 in front of the hour if it is under 10|
|displaySeconds|true|Display the seconds in the Clock|
|showPeriod|true|Show AM or PM if the timeFormat is 12|
|showPeriodUpper|true|If showPeriod is true should the AM, PM be upper date or lowercase.|
|showDate|true|Do you want to show the Date on this widget|
