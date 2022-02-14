package PageObjects;

import java.awt.Desktop;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import core.Base;

public class PhonesPDAsPageObject extends Base {

	public void PhonesPDAsPageObject() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(linkText = "Phones & PDAs")
	private WebElement PhonesAndPDAs;

	@FindBy(xpath = "(//*[@class='img-responsive'])[2]")
	private WebElement Img;

	@FindBy(linkText = "HTC Touch HD")
	private WebElement htcTouchHdText;

	@FindBy(xpath = "(//*[@class='price'])[1]")
	private WebElement htcTouchHdTextPrice;

	@FindBy(xpath = "(//*[@class='fa fa-shopping-cart'])[1]")
	private WebElement htcTouchHdAddToCartIcon;

	@FindBy(xpath = "(//*[contains(text(),'Add to Cart')])[1]")
	private WebElement htcTouchHdAddToCart;

	@FindBy(xpath = "(//*[@class='fa fa-heart'])[2]")
	private WebElement HtcTouchWishList;

	@FindBy(xpath = "(//*[@class='fa fa-exchange'])[1]")
	private WebElement HtcTouchCompareThisProduct;

	@FindBy(xpath = "(//*[@class='img-responsive'])[3]")
	private WebElement iphoneImg;

	@FindBy(linkText = "iPhone")
	private WebElement iphoneText;

	@FindBy(xpath = "(//*[@class='price'])[2]")
	private WebElement iphoneTextPrice;

	@FindBy(xpath = "(//*[@class='fa fa-shopping-cart'])[2]")
	private WebElement iphoneAddToCartIcon;

	@FindBy(xpath = "(//*[contains(text(),'Add to Cart')])[2]")
	private WebElement iphoneAddToCart;

	@FindBy(xpath = "(//*[@class='fa fa-heart'])[3]")
	private WebElement iphoneWishList;

	@FindBy(xpath = "(//*[@class='fa fa-exchange'])[2]")
	private WebElement iphoneCompareThisProduct;

	@FindBy(xpath = "(//*[@class='img-responsive'])[4]")
	private WebElement palmTreoproImg;

	@FindBy(linkText = "Palm Treo Pro")
	private WebElement PalmTreoProText;

	@FindBy(xpath = "(//*[@class='price'])[3]")
	private WebElement palmTreoProPrice;

	@FindBy(xpath = "(//*[@class='fa fa-shopping-cart'])[3]")
	private WebElement palmTreoProAddToCartIcon;

	@FindBy(xpath = "(//*[contains(text(),'Add to Cart')])[3]")
	private WebElement palmTreoProAddToCart;

	@FindBy(xpath = "(//*[@class='fa fa-heart'])[4]")
	private WebElement palmTreoWishList;

	@FindBy(xpath = "(//*[@class='fa fa-exchange'])[3]")
	private WebElement palmTreoCompareThisProduct;

}
