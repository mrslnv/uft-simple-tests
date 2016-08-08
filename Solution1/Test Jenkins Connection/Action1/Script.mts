Browser("Dashboard [Jenkins]").Page("Dashboard [Jenkins]").Link("Manage Jenkins").Click @@ hightlight id_;_Browser("Dashboard [Jenkins]").Page("Dashboard [Jenkins]").Link("Manage Jenkins")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Dashboard [Jenkins]").Page("Manage Jenkins [Jenkins]").Sync @@ hightlight id_;_Browser("Dashboard [Jenkins]").Page("Manage Jenkins [Jenkins]")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Dashboard [Jenkins]").Page("Manage Jenkins [Jenkins]").Link("Configure System").Click @@ hightlight id_;_Browser("Dashboard [Jenkins]").Page("Manage Jenkins [Jenkins]").Link("Configure System")_;_script infofile_;_ZIP::ssf10.xml_;_

Browser("Dashboard [Jenkins]").Page("Configure System [Jenkins]").WebEdit("_.uiLocation").Set Parameter("ngaURL")
Browser("Dashboard [Jenkins]").Page("Configure System [Jenkins]").WebButton("Connect").Click @@ hightlight id_;_Browser("Dashboard [Jenkins]").Page("Configure System [Jenkins]").WebButton("Connect")_;_script infofile_;_ZIP::ssf11.xml_;_
'wait 10
'Browser("Dashboard [Jenkins]").Page("Configure System [Jenkins]").WebElement("tag:=div")
'Browser("Dashboard [Jenkins]").Page("Configure System [Jenkins]").WebElement("innertext:=.*Connection successful.*")
Browser("Dashboard [Jenkins]").Page("Configure System [Jenkins]").WebButton("Save").Click
