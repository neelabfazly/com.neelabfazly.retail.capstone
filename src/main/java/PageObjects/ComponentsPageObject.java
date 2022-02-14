package PageObjects;

import java.awt.Desktop;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import core.Base;

public class ComponentsPageObject extends Base {

	public ComponentsPageObject() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(linkText = "Components")
	private WebElement componentsText;

	@FindBy(linkText = "Mice and Trackballs (0)")
	private WebElement miceAndTrackballs;

	@FindBy(linkText = "Monitors (2)")
	private WebElement monitors2;

	@FindBy(xpath = "//h2[contains(text(),'Monitors')]")
	private WebElement monitor2Text;

	@FindBy(linkText = "test 1 (0)")
	private WebElement test1Text;

	@FindBy(linkText = "test 2 (0)")
	private WebElement test2Text;

	@FindBy(xpath = "//i[@class='fa fa-th-list']")
	private WebElement listIcon;

	@FindBy(id = "grid-view")
	private WebElement gridTest;

	@FindBy(linkText = "Product Compare (2)")
	private WebElement ptoductCompare2Text;

	@FindBy(linkText = "Sort By:")
	private WebElement sortbyText;

	@FindBy(id = "input-sort")
	private WebElement inputSortText;

	@FindBy(xpath = "	(//*[@class='input-group-addon'])[2]")
	private WebElement showIon;

	@FindBy(id = "input-limit")
	private WebElement showsEarchIcon;

	@FindBy(linkText = "Printers (0)")
	private WebElement Printers0;

	@FindBy(linkText = "Scanners (0)")
	private WebElement Scanners0;

	@FindBy(linkText = "Web Cameras (0)")
	private WebElement camera0;

	@FindBy(linkText = "Show All Components")
	private WebElement showAllComponents;

	@FindBy(xpath = "//h2[contains(text(),'Monitors')]")
	private WebElement monitorsText;

	@FindBy(xpath = "h3[contains(text(),'Refine Search')]")
	private WebElement refinSearch;

	@FindBy(linkText = "test 1 (0)")
	private WebElement test1text;

	@FindBy(linkText = "test 2 (0)")
	private WebElement test2Test;

	@FindBy(id = "compare-total")
	private WebElement compareTotal;

	@FindBy(xpath = "(//*[@class='img-responsive'])[3]")
	private WebElement sumsangSyntEXT;

	@FindBy(xpath = "(//*[@class='price'])[2]")
	private WebElement sumSangSynPrice;

	@FindBy(xpath = "/*[contains(text(),'Ex Tax: $200.00')]")
	private WebElement sumSangSynPriceTax;

	@FindBy(xpath = "//*[@class='fa fa-shopping-cart'])[5]")
	private WebElement sumSangSynAddToCarticon;

	@FindBy(xpath = "//*[contains(text(),'Add to Cart')])[2]")
	private WebElement sumsangSynaddToCartText;

	@FindBy(xpath = "(//*[@class='fa fa-heart'])[3]")
	private WebElement sumSangSynWishList;

	@FindBy(xpath = "(//i[@class='fa fa-exchange'])[2]")
	private WebElement compareThisProduct;

}
