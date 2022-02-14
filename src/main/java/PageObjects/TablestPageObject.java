package PageObjects;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import core.Base;

public class TablestPageObject extends Base {

	public void HomePageObject() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(linkText = "Tablets")
	private WebElement TabletsText;

	@FindBy(xpath = "(//*[@class='img-responsive'])[2]")
	private WebElement samsungGalaxyimg;

	@FindBy(xpath = "Samsung Galaxy Tab 10.1")
	private WebElement samsungGalaxyText;

	@FindBy(xpath = "//*[@class='price']")
	private WebElement samsungGalaxyPrice;

	@FindBy(xpath = "//*[contains(text(),'Ex Tax: $199.99')]")
	private WebElement samsungGalaxyPriceTax;

	@FindBy(xpath = "//*[contains(text(),'Add to Cart')]")
	private WebElement samsungGalaxyAddTocartIcon;

	@FindBy(xpath = "//span[contains(text(),'Add to Cart')]")
	private WebElement samsungGalaxyAddTocartText;

	@FindBy(xpath = "(//*[@class='fa fa-heart'])[2]")
	private WebElement samsungGalaxyAddtoWishList;

	@FindBy(xpath = "fa fa-exchange")
	private WebElement samsungGalaxyCompareThisProduct;

}
