<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>dataDrivenTest</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>3d04e073-3928-4cdc-9b36-0d312b4613a4</testSuiteGuid>
   <testCaseLink>
      <guid>03260f41-876f-4984-88c7-d977930ab49e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>8f663ffd-b3c6-47c7-b2a3-64677cbb2a98</id>
         <masked>false</masked>
         <name>job</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/createUserDatadriventest</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>fa87ecfc-0cc7-49c1-98dd-2e43f50a697d</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Test Data1</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>fa87ecfc-0cc7-49c1-98dd-2e43f50a697d</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>userName</value>
         <variableId>91266c75-ec97-4b26-b90c-837928888428</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>fa87ecfc-0cc7-49c1-98dd-2e43f50a697d</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>job</value>
         <variableId>8f663ffd-b3c6-47c7-b2a3-64677cbb2a98</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>db2fc189-3a93-456b-9dd3-eb97eae1ac18</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>8b8aecf3-a9b1-451d-81b3-f13deb6e501b</id>
         <masked>false</masked>
         <name>email</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/registerUser</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>2c377215-4429-44e9-9e1b-80ea1101fce6</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Test Data 2</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>2c377215-4429-44e9-9e1b-80ea1101fce6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>email</value>
         <variableId>8b8aecf3-a9b1-451d-81b3-f13deb6e501b</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>2c377215-4429-44e9-9e1b-80ea1101fce6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>pwd</value>
         <variableId>93c445b6-a260-4845-aeb5-4f2e092fd62b</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
