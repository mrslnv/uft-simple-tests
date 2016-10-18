Dim timeNow
'timeNow = Timer().Date().Now().Second()
timeNow = Timer
testVal = Rnd(-1*timeNow*100)
Print (" Test Conditions: ")
Print (testVal)
If testVal > 0.5 Then
	Reporter.ReportEvent micFail, "Test Failed", "Unexpected conditions"
    ''# if you also want to stop the test
    ExitTest
End If
