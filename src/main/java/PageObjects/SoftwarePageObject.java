package PageObjects;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import core.Base;

public class SoftwarePageObject extends Base {

	public void SoftwarePageObject() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(linkText = "Software")
	private WebElement SoftWareText;

	@FindBy(linkText = "Continue")
	private WebElement continueButton;

	@FindBy(xpath = "//*[contains(text(),'There are no products to list in this category.')]")
	private WebElement NoProductText;

}
