dim testVal
testVal = Rnd()
Print (" Test Conditions: ")
Print (testVal)
If testVal > 0.5 Then
	Reporter.ReportEvent micFail, "Test Failed", "Unexpected conditions"
    ''# if you also want to stop the test
    ExitTest
End If
