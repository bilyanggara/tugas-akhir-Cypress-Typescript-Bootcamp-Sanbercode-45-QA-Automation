import { LoginPage } from "./pages/loginPages"
import { DashboardPage } from "./pages/dashboardPages"
import { CheckoutPage } from "./pages/checkoutPages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

it('Test Checkout Process', () => {
  loginPage.login(URL, 'standard_user', 'secret_sauce')
  loginPage.assertLogin()
  dashboardPage.sauceLabsBackpack()
  dashboardPage.addToCart()
  checkoutPage.goToCart()
  checkoutPage.verifyCartPage()
  checkoutPage.clickCheckout()
  checkoutPage.fillFirstName('First')
  checkoutPage.fillLastName('Last')
  checkoutPage.fillPostalCode('2000')
  checkoutPage.clickContinue()
  checkoutPage.verifyCheckoutOverview()
  checkoutPage.clickFinish()
  checkoutPage.verifyOrderConfirmation()
})