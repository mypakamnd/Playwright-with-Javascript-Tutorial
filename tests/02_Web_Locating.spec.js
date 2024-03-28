// import test, expect จาก playwright
const { test, expect } = require("@playwright/test");

test("Web Locators", async ({ page }) => {
  // ใช้ page.goto เพื่อเข้าไปยัง url ของ website ที่ต้องการ
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // getByLabel คือ get ปุ่ม login โดย label ของปุ่ม login == Toggle User Dialog
  await page.getByLabel("Toggle User Dialog").click();

  // getByRole คือ get element by Role Text box หรือ input ที่มีชื่อว่า "อีเมล"
  await page
    .getByRole("textbox", { name: "อีเมล" })
    .fill("contact.niphaporn@gmail.com");

  // getByRole คือ get element by Role Text box หรือ input ที่มีชื่อว่า "รหัสผ่าน"
  await page.getByRole("textbox", { name: "รหัสผ่าน" }).fill("May092420");

  // รอ Time out 3000 ms
  await page.waitForTimeout(3000);

  // เมื่อจบการทดสอบให้ปิด page ลง
  await page.close();

  /*
  
    *** ทางลัดให้ run script "npx playwright codegen" แล้วคลิก UI ตาม flow ที่ต้องการ ***
    Role ทั้งหมด playwright : https://playwright.dev/docs/api/class-framelocator#frame-locator-get-by-role
    
  */
});

test("Multiple Elements", async ({ page }) => {
  // ใช้ page.goto เพื่อเข้าไปยัง url ของ website ที่ต้องการ
  await page.goto("https://www.ihavecpu.com/category/monitor");

  // สร้าง const productList ไว้เก็บ element ของ List product โดยคำสั่ง page.$$(locator)
  const productList = await page.$$("h3");

  //  เขียน for loop เพื่อแสดง product แต่ละอัน
  for (const product of productList) {
    // สร้าง const txtProduct เพื่อเก็บชื่อของแต่ละ product
    const txtProduct = await product.textContent();

    // สร้างเงื่อนไข เมื่อ loop txtProduct จนถึง product ที่ชื่อ "MONITOR (จอมอนิเตอร์) PHILIPS 241V8B/67 - 23.8 IPS FHD 100Hz"
    if (
      txtProduct ===
      "MONITOR (จอมอนิเตอร์) PHILIPS 241V8B/67 - 23.8 IPS FHD 100Hz"
    ) {
      // เมื่อเจอ product ที่ชื่อ "MONITOR (จอมอนิเตอร์) PHILIPS 241V8B/67 - 23.8 IPS FHD 100Hz" แสดงข้อความ "selected product success" ตามด้วยชื่อ product
      console.log("selected product success :", txtProduct);

      // จากนั้นให้ get element ด้วย getByRole heading เนื่องจากชื่อของ product เป็น tag h3 (heading 3) แล้ว click product
      await page.getByRole("heading", { name: txtProduct }).click();
    }
  }

  // รอ Time out 3000 ms
  await page.waitForTimeout(3000);

  // เมื่อจบการทดสอบให้ปิด page ลง
  await page.close();
});
