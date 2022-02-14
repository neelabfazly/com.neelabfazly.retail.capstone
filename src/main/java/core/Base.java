package core;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;

public class Base {

	public static WebDriver driver;
	public static Properties properties;
	public static Logger logger;
	private String projectPropertyFilePath = "./src/test/resources/InputData/projectProp.properties";
	private String log4JFilePath = "./src/test/resources/InputData/log4j.properties";

	public Base() {

		try {
			BufferedReader reader;
			reader = new BufferedReader(new FileReader(projectPropertyFilePath));
			properties = new Properties();
			properties.load(reader);
			reader.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		logger = logger.getLogger("logger_File");
		PropertyConfigurator.configure(log4JFilePath);

	}

	public static String getBrowserName() {
		String browserName = properties.getProperty("browser");
		return browserName;

	}

	public static String getURL() {
		String url = properties.getProperty("url");
		return url;
	}

	public static Long getImpWait() {
		String imptWait = properties.getProperty("implicitlyWait");
		return Long.parseLong(imptWait);
	}

	public static Long getPageLoadTimeOut() {
		String pageLTimeOut = properties.getProperty("pageLoadTimeOut");
		return Long.parseLong(pageLTimeOut);
	}

	public static void initializeDriver() {
		driver.get(getURL());
	}

	public static void tearDown() {
		driver.close();
		driver.quit();
	}

}
