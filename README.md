# Playwright-with-Javascript-Tutorial

## Installation

ก่อนจะ clone project ต้องติดตั้ง git และ node.js หรือ yarn ก่อน เมื่อติดตั้งเสร็จให้ clone project โดยใช้ cmd

```bash
git clone https://github.com/mypakamnd/Playwright-with-Javascript-Tutorial.git
```

จากนั้นทำการติดตั้ง package ของ Playwright

```bash
npm install
```

## Run

คำสั่ง Run Script
| Script | Description |example |
| ------------- | ------------- | ------------- |
| **npx playwright test** | คำสั่งนี้จะ Run Script ทุกไฟล์ที่เป็นไฟล์ test หรือไฟล์ .spec.js บน 3 browser ได้แก่ c hromium, webkit, firefox | npx playwright test |
| **npx playwright show-report** | เมื่อการทดสอบเสร็จสิ้นสามารถดู report ได้โดยใช้คำสั่งนี้ |npx playwright show-report|
| **npx playwright test [ชื่อไฟล์]** | ใช้ Run Script เฉพาะไฟล์| npx playwright test 01_Create_and_RunTest.spec.js |
| **npx playwright test [ชื่อไฟล์] --project=[ชื่อ browser]** | ใช้ Run Script เฉพาะ browser ที่ต้องการ |npx playwright test 01_Create_and_RunTest.spec.js --project=chromium
| **npx playwright test [ชื่อไฟล์] --project=[ชื่อ browser] --headed** | mode Run Script โดยเปิด browser จริงไปด้วย | npx playwright test 01_Create_and_RunTest.spec.js --project=chromium --headed
| **npx playwright test [ชื่อไฟล์] --project=[ชื่อ browser] --debug ** | mode debug | npx playwright test 01_Create_and_RunTest.spec.js --project=chromium --debug
| ** npx playwright test [ชื่อไฟล์] --project=[ชื่อ browser] --ui ** | mode ui ของ playwright |npx playwright test 01_Create_and_RunTest.spec.js --project=chromium --ui
