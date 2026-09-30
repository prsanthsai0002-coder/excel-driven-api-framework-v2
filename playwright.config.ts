import { defineConfig }
from "@playwright/test";

export default defineConfig({

    testDir: "./root/tests",

    testMatch: "*.spec.ts",

    reporter: [

        ["list"],

        ["allure-playwright"]
    ],

    
    globalTeardown: "./root/global-teardown.ts",
});