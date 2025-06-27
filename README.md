https://github.com/AishuSundar/rca-fix-demo-java
This is a basic Employee Management Web App that exposes CRUD APIs (Create, Read, Update, Delete) using:

Java 17

Spring Boot

Spring Data JPA

H2 in-memory DB

Maven for build

GitHub Actions for CI/CD

1. 📂 List of All Simulated Issues in the Sample App
🔢	Category	Description	Where to Look
1️⃣	Test failure	assertEquals(1, 2)	EmployeeTests.java
2️⃣	Missing dependency version	Spring Boot starter missing version	pom.xml
3️⃣	Missing environment variable	DB_PASSWORD not defined	application.properties / pipeline logs
4️⃣	Missing application property	spring.datasource.driver-class-name not defined	Runtime logs
5️⃣	Hardcoded secret	String insecureKey = "12345-SECRET"	EmployeeController.java
6️⃣	Code style violation	Line > 120 characters	EmployeeController.java
7️⃣	Functional bug	PUT endpoint doesn't validate ID	EmployeeController.java
8️⃣	Old/bad JAR version	h2 dependency uses 2.0.202	pom.xml



Case 1 :
Misses the dependency on POM XML 
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
  <!-- ❌ version missing -->
</dependency>

My Agent must 
🤖 2. Auto-Fix Using Your Agentic AI
Here’s how your RCA agent can automatically detect and fix this:

🔍 Step 1: Pattern Match Build Log
Parse pipeline logs for Maven errors:

csharp
Copy
Edit
'dependencies.dependency.version' for org.springframework.boot:spring-boot-starter-web:jar is missing
🧠 Step 2: Analyze pom.xml and Check for Missing <parent> or version tag
Use XML parser or regex to identify <dependency> blocks missing <version>

Check if there’s no <parent> tag defined

✍️ Step 3: Auto-Patch Logic
If no <parent> block → insert this inside <project>:

xml
Copy
Edit
<parent>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-parent</artifactId>
  <version>3.2.5</version>
  <relativePath/>
</parent>
If <parent> exists → append version inline to missing dependencies:

diff
Copy
Edit
- <artifactId>spring-boot-starter-web</artifactId>
+ <artifactId>spring-boot-starter-web</artifactId>
+ <version>3.2.5</version>
✅ Step 4: Commit + PR
Your agent can:

Create a new branch: fix/missing-dependency-versions

Apply the XML patch

Open a PR with message:

“Fix: Added missing Spring Boot dependency versions to pom.xml”


🔄 How to Simulate Each Issue Again
🔢	Issue Type	How to Simulate Again
1️⃣	Test failure	Edit EmployeeTests.java to fail (assertEquals(1, 2))
2️⃣	Missing dependency version	Remove <version> or <parent> in pom.xml
3️⃣	Missing env var	Remove DB_PASSWORD from GitHub secrets
4️⃣	Missing property	Delete spring.datasource.driver-class-name
5️⃣	Hardcoded secret	Add String secret = "12345" in any file
6️⃣	Code style issue	Add a very long line in any class
7️⃣	Functional bug	Remove ID check from PUT endpoint
8️⃣	Dependency conflict	Downgrade h2 to 2.0.202


