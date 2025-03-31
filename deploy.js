const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
const readline = require("readline");

// Get password from command line or prompt for it
async function getPassword() {
  if (process.argv.length > 2) {
    return process.argv[2]; // Use password from command line argument
  }
  
  // If no password is provided as argument, prompt for it
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question("Please enter your FTP password: ", (password) => {
      rl.close();
      resolve(password);
    });
  });
}

async function deploy() {
  const password = await getPassword();
  
  const config = {
    user: "bdc-ftp-admin@solarsales.pro",
    password: password,
    host: "solarsales.pro",
    port: 21,
    localRoot: __dirname + "/dist/",
    remoteRoot: "/",
    include: ["*", "**/*"],
    exclude: [],
    deleteRemote: false,
    forcePasv: true,
    sftp: false
  };

  console.log("Starting FTP deployment...");
  try {
    const result = await ftpDeploy.deploy(config);
    console.log("Deployment complete!", result);
  } catch (err) {
    console.error("Deployment error:", err);
  }
}

deploy(); 