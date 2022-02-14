package PageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class Mp3PlayersPageObject extends Base {

	public void Mp3PlayersPageObject() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(linkText = "MP3 Players")
	private WebElement mp3PlayersText;

	@FindBy(linkText = "Show All MP3 Players")
	private WebElement showallmp3PlayersText;

	@FindBy(xpath = "//*[@class='img-thumbnail']")
	private WebElement mp3PlayersImag;

	@FindBy(xpath = "//h3[contains(text(),'Refine Search')]")
	private WebElement refinSearchText;

	@FindBy(linkText = "test 11 (0)")
	private WebElement test11;

	@FindBy(linkText = "test 12 (0)")
	private WebElement test12;

	@FindBy(linkText = "test 15 (0)")
	private WebElement test15;

	@FindBy(linkText = "test 16 (0)")
	private WebElement test16;

	@FindBy(linkText = "test 17 (0)")
	private WebElement test17;

	@FindBy(linkText = "test 18 (0)")
	private WebElement test18;

	@FindBy(linkText = "test 19 (0)")
	private WebElement test19;

	@FindBy(linkText = "test 20 (0)")
	private WebElement test20;

	@FindBy(linkText = "test 21 (0)")
	private WebElement test21;

	@FindBy(linkText = "test 22 (0)")
	private WebElement test22;

	@FindBy(linkText = "test 23 (0)")
	private WebElement test23;

	@FindBy(linkText = "test 24 (0)")
	private WebElement test24;

	@FindBy(linkText = "test 4 (0)")
	private WebElement test4;

	@FindBy(linkText = "test 5 (0)")
	private WebElement test5;

	@FindBy(linkText = "test 7 (0)")
	private WebElement test7;

	@FindBy(linkText = "test 8 (0)")
	private WebElement test8;

	@FindBy(linkText = "test 9 (0)")
	private WebElement test9;

	@FindBy(linkText = "Product Compare (3)")
	private WebElement productCompare3;

	@FindBy(xpath = "(//img[@class='img-responsive'])[2]")
	private WebElement ipadClassicimag;

	@FindBy(linkText = "iPod Classic")
	private WebElement ipadClassictext;

	@FindBy(xpath = "//*[@class='price']")
	private WebElement ipadClassicPrice;

	@FindBy(xpath = "(//*[@class='price-tax'])[1]")
	private WebElement ipadClassicTaxPrice;

	@FindBy(xpath = "(//*[@class='fa fa-shopping-cart'])[4]")
	private WebElement ipadClassicaddToCartIcon;

	@FindBy(xpath = "(//*[contains(text(),'Add to Cart')])[1]")
	private WebElement ipadClassicaddToCartText;

	@FindBy(xpath = "(//*[@class='fa fa-heart'])[2]")
	private WebElement ipadClassicAddToWishList;

	@FindBy(xpath = "(//*[@class='fa fa-exchange'])[1]")
	private WebElement ipadClassiccompareThisProductText;

	@FindBy(xpath = "(//img[@class='img-responsive'])[3]")
	private WebElement ipadNanoimag;

	@FindBy(linkText = "iPod Classic")
	private WebElement iPodNano;

	@FindBy(linkText = "(//*[@class='price'])[2]")
	private WebElement ipadNanoPrice;

	@FindBy(xpath = "(//*[@class='price-tax'])[2]")
	private WebElement ipadNanoTaxPrice;

	@FindBy(xpath = "(//*[@class='fa fa-shopping-cart'])[5]")
	private WebElement ipadNanoaddToCartIcon;

	@FindBy(xpath = "(//*[contains(text(),'Add to Cart')])[2]")
	private WebElement ipadNanoAddToCartText;

	@FindBy(xpath = "(//*[@class='fa fa-heart'])[3]")
	private WebElement ipadNanoAddToWishList;

	@FindBy(xpath = "(//*[@class='fa fa-exchange'])[2]")
	private WebElement ipadNanoCompareThisProduct;

	@FindBy(xpath = "(//img[@class='img-responsive'])[4]")
	private WebElement ipodShuffle;

	@FindBy(linkText = "iPod Shuffle")
	private WebElement ipadshuffle;

	@FindBy(linkText = "(//*[@class='price'])[3]")
	private WebElement ipadshufflePrice;

	@FindBy(xpath = "(//*[@class='price-tax'])[3]")
	private WebElement ipadShuffleTaxPrice;

	@FindBy(xpath = "(//*[@class='fa fa-shopping-cart'])[6]")
	private WebElement ipadShuffleaddToCartIcon;

	@FindBy(xpath = "(//*[contains(text(),'Add to Cart')])[3]")
	private WebElement ipadShuffleAddToCartText;

	@FindBy(xpath = "(//*[@class='fa fa-heart'])[4]")
	private WebElement ipadShuffleAddToWishList;

	@FindBy(xpath = "(//*[@class='fa fa-exchange'])[3]")
	private WebElement ipadShuffleComparethisProduct;

	@FindBy(xpath = "(//img[@class='img-responsive'])[5]")
	private WebElement ipodTouch;

	@FindBy(linkText = "iPod Touch")
	private WebElement iPodTouch;

	@FindBy(linkText = "(//*[@class='price'])[4")
	private WebElement ipadTouchPrice;

	@FindBy(xpath = "(//*[@class='price-tax'])[4]")
	private WebElement ipadTouchTaxPrice;

	@FindBy(xpath = "(//*[@class='fa fa-shopping-cart'])[7]")
	private WebElement ipadTouchaddToCartIcon;

	@FindBy(xpath = "(//*[contains(text(),'Add to Cart')])[4]")
	private WebElement ipadTouchAddToCartText;

	@FindBy(xpath = "(//*[@class='fa fa-heart'])[5]")
	private WebElement ipadTouchAddToWishList;

	@FindBy(xpath = "(//*[@class='fa fa-exchange'])[4]")
	private WebElement compareThisProductText;

	@FindBy(xpath = "//*[@class='btn btn-inverse btn-block btn-lg dropdown-toggle']")
	private WebElement CartTotal;

}
