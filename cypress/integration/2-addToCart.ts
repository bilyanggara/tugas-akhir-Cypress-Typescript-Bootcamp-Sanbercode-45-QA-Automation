import { LoginPage } from "./pages/loginPages"
import { DashboardPage } from "./pages/dashboardPages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('Test Add Item to Cart', () => {
  loginPage.login(URL, 'standard_user', 'secret_sauce')
  loginPage.assertLogin()
  dashboardPage.sauceLabsBackpack()
  dashboardPage.addToCart()
})