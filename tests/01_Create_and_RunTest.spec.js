// import test, expect จาก playwright
const { test, expect } = require("@playwright/test");

test("Name of test case", async ({ page }) => {
  // ใช้ page.goto เพื่อเข้าไปยัง url ของ website ที่ต้องการ
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // เมื่อเข้าไปยังหน้า moniter แล้วให้ตรวจสอบว่า page title เป็นคำว่า "จอมอนิเตอร์" ไหม โดยใช้ expect ของ JS
  await expect(page).toHaveTitle("จอมอนิเตอร์");

  // เมื่อจบการทดสอบให้ปิด page ลง
  await page.close();
  /*
  
  *** ต้องใข้ await ทุกครั้งเพื่อรอให้แต่ละขั้นตอนทำสำเร็จก่อนค่อยไปขั้นตอนถัดไป ***

  คำสั่ง Run Script
  1. npx playwright test                คำสั่งนี้จะ Run Script ทุกไฟล์ที่เป็นไฟล์ test หรือไฟล์ .spec.js บน 3 browser ได้แก่ chromium, webkit, firefox
  2. npx playwright show-report         เมื่อการทดสอบเสร็จสิ้นสามารถดู report ได้โดยใช้คำสั่งนี้
  3. npx playwright test [ชื่อไฟล์]        ใช้ Run Script เฉพาะไฟล์ เช่น npx playwright test 01_Create_and_RunTest.spec.js
  4. npx playwright test [ชื่อไฟล์] --project=[ชื่อ browser]             ใช้ Run Script เฉพาะ browser ที่ต้องการ เช่น npx playwright test 01_Create_and_RunTest.spec.js --project=chromium
  5. npx playwright test [ชื่อไฟล์] --project=[ชื่อ browser] --headed    mode Run Script โดยเปิด browser จริงไปด้วย เช่น npx playwright test 01_Create_and_RunTest.spec.js --project=chromium --headed
  6. npx playwright test [ชื่อไฟล์] --project=[ชื่อ browser] --debug     mode debug npx playwright test 01_Create_and_RunTest.spec.js --project=chromium --debug
  7. npx playwright test [ชื่อไฟล์] --project=[ชื่อ browser] --ui        mode ui ของ playwright เอง npx playwright test 01_Create_and_RunTest.spec.js --project=chromium --ui
  
  */
});
