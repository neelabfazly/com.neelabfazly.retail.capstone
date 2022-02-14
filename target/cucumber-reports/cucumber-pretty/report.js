$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Laptop\u0026NoteBooksFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Laptop And NoteBooks Features",
  "description": "",
  "id": "laptop-and-notebooks-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LaptopAndNoteBooksTest"
    }
  ]
});
formatter.before({
  "duration": 2972236159,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2861504173,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 121141762,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 632491188,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Add and Remove a Mac Book from Cart",
  "description": "",
  "id": "laptop-and-notebooks-features;add-and-remove-a-mac-book-from-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User click on MacBook item",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clickadd to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should see a message ‘Success: You have added MacBook to your shopping cart!’",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should see ‘1tem(s)-602.00’showed to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on cart option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on red X button to remove the item from cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "item should be removed and cartshould show ‘0 item(s)’",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_MacBook_item()"
});
formatter.result({
  "duration": 1356657241,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_clickadd_to_Cart_button()"
});
formatter.result({
  "duration": 99685416,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_should_see_a_message_Success_You_have_added_MacBook_to_your_shopping_cart()"
});
formatter.result({
  "duration": 780013635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    },
    {
      "val": "602",
      "offset": 25
    },
    {
      "val": "00",
      "offset": 29
    }
  ],
  "location": "LaptopAndNoteBooksStepDefinition.user_should_see_tem_s_showed_to_the_cart(int,int,int)"
});
formatter.result({
  "duration": 699199916,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_cart_option()"
});
formatter.result({
  "duration": 46939533,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_red_X_button_to_remove_the_item_from_cart()"
});
formatter.result({
  "duration": 49840794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "LaptopAndNoteBooksStepDefinition.item_should_be_removed_and_cartshould_show_item_s(int)"
});
formatter.result({
  "duration": 711774605,
  "status": "passed"
});
formatter.after({
  "duration": 266240630,
  "status": "passed"
});
formatter.before({
  "duration": 2039044653,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 4027551822,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 79024319,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 520420542,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Product Comparison",
  "description": "",
  "id": "laptop-and-notebooks-features;product-comparison",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User click on product comparison icon on ‘MacBook’",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on product comparison icon on ‘MacBook Air",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should see a message ‘Success: You have added MacBook Air to your product comparison!’",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click on Product comparison link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see Product Comparison Chart",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_product_comparison_icon_on_MacBook()"
});
formatter.result({
  "duration": 115869793,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_product_comparison_icon_on_MacBook_Air()"
});
formatter.result({
  "duration": 121246721,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_should_see_a_message_Success_You_have_added_MacBook_Air_to_your_product_comparison()"
});
formatter.result({
  "duration": 923203296,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_Product_comparison_link()"
});
formatter.result({
  "duration": 304608444,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_should_see_Product_Comparison_Chart()"
});
formatter.result({
  "duration": 705679453,
  "status": "passed"
});
formatter.after({
  "duration": 131057091,
  "status": "passed"
});
formatter.before({
  "duration": 1792084897,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2464742510,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 60706656,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 1317800385,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Adding and item to Wish list",
  "description": "",
  "id": "laptop-and-notebooks-features;adding-and-item-to-wish-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User click on heart icon to add ‘Sony VaIO’laptop to wish list",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should get a message ‘You must login or create an account to save Sony VAIO to your wish list!’",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_heart_icon_to_add_Sony_VaIO_laptop_to_wish_list()"
});
formatter.result({
  "duration": 88283619,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_should_get_a_message_You_must_login_or_create_an_account_to_save_Sony_VAIO_to_your_wish_list()"
});
formatter.result({
  "duration": 779854228,
  "status": "passed"
});
formatter.after({
  "duration": 177637938,
  "status": "passed"
});
formatter.before({
  "duration": 1928957427,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2319506853,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 67843795,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 398945558,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validate the price of MacBook Pro is 2000",
  "description": "",
  "id": "laptop-and-notebooks-features;validate-the-price-of-macbook-pro-is-2000",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User click on ‘MacBook Pro’item",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should see ‘$2,000.00’price tag is present on UI.",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBooksStepDefinition.user_click_on_MacBook_Pro_item()"
});
formatter.result({
  "duration": 1345587111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "000",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "LaptopAndNoteBooksStepDefinition.user_should_see_$_price_tag_is_present_on_UI(int,int,int)"
});
formatter.result({
  "duration": 792612120,
  "status": "passed"
});
formatter.after({
  "duration": 331615330,
  "status": "passed"
});
formatter.uri("Features/RetailPageLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Retail Page Login testing features",
  "description": "",
  "id": "retail-page-login-testing-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RetailPageLoginTest"
    }
  ]
});
formatter.before({
  "duration": 1795132596,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027neelab.fazly786@gmail.com\u0027 and password \u0027FakePass123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2250954526,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 70436813,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3925872876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neelab.fazly786@gmail.com",
      "offset": 21
    },
    {
      "val": "FakePass123",
      "offset": 62
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 1087115503,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 479000688,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3552495735,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Register as an Affiliate userwith Cheque Payment Method",
  "description": "",
  "id": "retail-page-login-testing-features;register-as-an-affiliate-userwith-cheque-payment-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User click on‘Register for an Affiliate Account’link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User fill affiliate form with below information",
  "rows": [
    {
      "cells": [
        "company",
        "website",
        "taxID",
        "paymentMethod"
      ],
      "line": 15
    },
    {
      "cells": [
        "Fazly Group",
        "www.fazlygroup.com",
        "12345",
        "Fazly Group"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User check on About us check box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Register_for_an_Affiliate_Account_link()"
});
formatter.result({
  "duration": 301968567,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_fill_affiliate_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 1336646114,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_check_on_About_us_check_box()"
});
formatter.result({
  "duration": 600789545,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinition.user_click_on_Continue_button()"
});
formatter.result({
  "duration": 389298549,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_see_a_success_message()"
});
formatter.result({
  "duration": 634916574,
  "status": "passed"
});
formatter.after({
  "duration": 143106142,
  "status": "passed"
});
formatter.before({
  "duration": 1860170546,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027neelab.fazly786@gmail.com\u0027 and password \u0027FakePass123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2389616978,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 62773812,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3874634332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neelab.fazly786@gmail.com",
      "offset": 21
    },
    {
      "val": "FakePass123",
      "offset": 62
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 939841313,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 419393535,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3537234439,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Edit your affiliate information from Cheque payment method to Bank Transfer",
  "description": "",
  "id": "retail-page-login-testing-features;edit-your-affiliate-information-from-cheque-payment-method-to-bank-transfer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User click on‘Edit your affiliate informationlink",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user click on Bank Transfer radio button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User fill Bank information with below information",
  "rows": [
    {
      "cells": [
        "bankName",
        "abaNumber",
        "swiftCode",
        "accountName",
        "accountNumber"
      ],
      "line": 25
    },
    {
      "cells": [
        "BOA",
        "123456789",
        "9876543210",
        "neelabfazly",
        "1234598760"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on Continue AffiliateButton",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Edit_your_affiliate_informationlink()"
});
formatter.result({
  "duration": 280021174,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Bank_Transfer_radio_button()"
});
formatter.result({
  "duration": 103968561,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_fill_Bank_information_with_below_information(DataTable)"
});
formatter.result({
  "duration": 514657005,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_continue_affiliatebutton()"
});
formatter.result({
  "duration": 380525657,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_see_a_success_message()"
});
formatter.result({
  "duration": 626679589,
  "status": "passed"
});
formatter.after({
  "duration": 156002824,
  "status": "passed"
});
formatter.before({
  "duration": 1870127116,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027neelab.fazly786@gmail.com\u0027 and password \u0027FakePass123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2358154637,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 55566667,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3819849806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neelab.fazly786@gmail.com",
      "offset": 21
    },
    {
      "val": "FakePass123",
      "offset": 62
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 1063485875,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 408611824,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3522082188,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Edit your account Information",
  "description": "",
  "id": "retail-page-login-testing-features;edit-your-account-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User click on‘Edit your account information’ link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User modify below information",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastName",
        "email",
        "telephone"
      ],
      "line": 33
    },
    {
      "cells": [
        "Neelab",
        "Fazly",
        "neelab.fazly786@gmail.com",
        "7652157988"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User should seea message ‘Success: Your account has been successfully updated.’",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Edit_your_account_information_link()"
});
formatter.result({
  "duration": 773603019,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_modify_below_information(DataTable)"
});
formatter.result({
  "duration": 504222497,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_continue_button()"
});
formatter.result({
  "duration": 390032049,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_seea_message_Success_Your_account_has_been_successfully_updated()"
});
formatter.result({
  "duration": 632679738,
  "status": "passed"
});
formatter.after({
  "duration": 136533645,
  "status": "passed"
});
});