
## Installation of World-Time-API
### Step 1: Install Dependencies
Run the following command:
```bash
npm i express cors
```
### Step 2: Start the Server
If you are not using Serverless Functions
```bash
node index.js
```
If you want to use it inside a Serverless Functions
```bash
node app.js
```
### Step 3: Access the Server
The server runs on port 3000.
Visit the following routes:
- `/24` → 24-hour clock format
- `/12` → 12-hour clock format
