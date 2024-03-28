// import test, expect จาก playwright
const { test, expect } = require("@playwright/test");

test("1. Page has a title", async ({ page }) => {
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // ตรวจสอบว่า page title เป็นคำว่า "จอมอนิเตอร์" ไหม
  await expect(page).toHaveTitle("จอมอนิเตอร์");
});

test("2. Page has a URL", async ({ page }) => {
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // ตรวจสอบว่า page นั้นมี URL "https://www.ihavecpu.com/category/monitor" ถูกไหม
  await expect(page).toHaveURL("https://www.ihavecpu.com/category/monitor");
});

test("3. Element matches text", async ({ page }) => {
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // ตรวจสอบว่า element มีคำว่า "จอมอนิเตอร์" ไหม FYI : toHaveText element ต้องตรงทุกตัวอักษร
  await expect(
    page.getByRole("heading", { name: "จอมอนิเตอร์", exact: true })
  ).toHaveText("จอมอนิเตอร์");
});

test("4. Element contains text", async ({ page }) => {
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // ตรวจสอบว่า element มีคำว่า "จอ" ไหม
  await expect(
    page.getByRole("heading", { name: "จอมอนิเตอร์", exact: true })
  ).toContainText("จอ");
});

test("5. Element is disabled", async ({ page }) => {
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // ตรวจสอบว่าปุ่ม pagination ย้อนกลับเป็น disable
  await expect(
    page.locator(
      "//a[@aria-label='Previous page']//button[@aria-label='Toggle view']"
    )
  ).toBeDisabled();
});

test("6. Element is enabled", async ({ page }) => {
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // ตรวจสอบว่าปุ่ม login Enabled อยู่ไหม
  await expect(page.getByLabel("Toggle User Dialog")).toBeEnabled();
});

test("7. Input has a value", async ({ page }) => {
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // click ปุ่ม login
  await page.getByLabel("Toggle User Dialog").click();

  // สร้าง const email เก็บข้อมูล email ไว้
  const email = "contact.niphaporn@gmail.com";
  // getByRole คือ get element by Role Text box หรือ input ที่มีชื่อว่า "อีเมล"
  await page.getByRole("textbox", { name: "อีเมล" }).fill(email);

  // ตรวจสอบว่า Text box หรือ input กรอก email ถูกต้องไหม
  await expect(page.getByRole("textbox", { name: "อีเมล" })).toHaveValue(email);
});

test("8. Element has a DOM attribute", async ({ page }) => {
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // click ปุ่ม login
  await page.getByLabel("Toggle User Dialog").click();

  // ตรวจสอบว่า Text box หรือ input email มี attribute type="email" ใช่ไหม
  await expect(page.getByRole("textbox", { name: "อีเมล" })).toHaveAttribute(
    "type",
    "email"
  );
});

test("9. List has exact number of children", async ({ page }) => {
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // ตรวจสอบว่า product มี 32 ชิ้นในหน้าแรกหรือไม่ โดย get element "h3" เนื่องจากชื่อ product ใช้ css เป็น h3
  await expect(page.locator("h3")).toHaveCount(32);
});
