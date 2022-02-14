package PageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class LoginPageObj extends Base {

	public LoginPageObj() {

		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'My Account')]")
	private WebElement myAccount;

	@FindBy(how = How.XPATH, using = "//a[contains(text(),'Login')]")
	private WebElement login;

	@FindBy(how = How.ID, using = "input-email")
	private WebElement emailField;

	@FindBy(id = "input-password")
	private WebElement passwordField;

	@FindBy(xpath = "//input[@class='btn btn-primary']")
	private WebElement loginButton;

	public void clickOnMyAccount() {
		myAccount.click();
	}

	public void clickonLogin() {
		login.click();
	}

	public void enterEmailAddress(String emailAddress) {
		emailField.sendKeys(emailAddress);
	}

	public void enterPassword(String password) {
		passwordField.sendKeys(password);
	}

	public void clickOnLoginButton() {
		loginButton.click();
	}

	public String getPageTitle() {
		String pageTitle = driver.getTitle();
		return pageTitle;
	}

}
