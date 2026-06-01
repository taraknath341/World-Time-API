
## Installation of World-Time-API
### Step 1: Install Dependencies
Run the following command:
```bash
yarn install
```
### Step 2: Start the Server
If you are not using Serverless Functions
```bash
yarn start
```
If you want to use it inside a Serverless Functions
```bash
yarn run serverless
```
### Step 3: Access the Server
The server runs on port 3000.
Visit the following routes:
- `/24` → 24-hour clock format
- `/12` → 12-hour clock format
