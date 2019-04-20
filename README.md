# Cryptocurrency Real Time Visualizations and InvestorData Storage on Multichain Blockchain

![image](https://user-images.githubusercontent.com/31117403/52914165-21f63e00-32eb-11e9-8af2-7c4ae87b4c4b.png)


## FEATURES
```
 Fetches the top cryptocurrencies and displays them in a grid 
 
 Allows selection of coins as favorites (5 favorites at a time) 
 
 Complete visualization of each coin statistics based on past day's trend, weekly trends as well as monthly trends
 allowing ICO and coin investors to observe those trends and then take decisions based on that 
 
 Uses Fuzzy Searching using fuzzy package. 
 
 Styling using Styled Components
 
 Adds user registration and entire profile data on the multichain based private blockchain by using the concept of general data storage  using Streams
```

## SETUP AND GETTING A COPY OF THE PROJECT RUNNING ON YOUR LOCAL MACHINE 

MultiChain setup

Follow the installation guide on https://www.multichain.com/download-install/

Afted installing the MultiChain server, it is necessary to add its directory into your PATH for the next steps.

Create a test chain to initialize its directory structure and run it (you can delete it afterwards)

multichain-util create testchain
multichaind testchain -daemon

Terminate the testchain instance and navigate into the MultiChain folder at C:\Users\%USERNAME%\AppData\Roaming\MultiChain. If not present create multichain.conf and add the line autosubscribe=streams. (Optionally delete the testchain folder)

Create our cryptochain multichain

multichain-util create cryptochain
multichaind cryptochain -daemon

You might notice that you get an output

Looking for genesis block...
Genesis block found

Other nodes can connect to this node using:
multichaind cryptochain@"ip.ad.dr.ess:PORT"

Listening for API requests on port "API-PORT" (local only - see rpcallowip setting)

Node ready.

The IP address will be set to the address of your machine, and the port number is set randomly. You have to set the port number in MultiChain/Backend/src/multichainOptions.js to the port number from your console output.

The password for the chain is also generated when creating the cryptochain multichain instance. Go to C:\Users\%USERNAME%\AppData\Roaming\MultiChain\cryptochain and copy the generated password from the multichain.conf file and set it in multichainOptions.js

Frontend & Backend setup
The repository has two main subdirectories client folder for the frontend of the application and backend in the main folder itself. Install npm packages in both of those directories.

Running the app
Run MongoDB -> open a console and execute mongod (or start it by running the .exe file)

Run npm run dev for concurrently starting the frontend and the backend of the application

For running the multichain node locally in the development machine 

multichaind cryptochain -daemon

The app should be now running with the frontend at localhost:3000 and backend at localhost:5000


## TECHSTACK 
```
React.js
React Context API 
Lodash 
Styled Components 
react-highcharts
Node.js
Express.js
MongoDB 
Multichain Blockchain 

```
### LICENSE 
MIT 
