# PostgreSQL SSH Tunnel Setup Guide

Based on the shared hosting provider's information, direct remote connections to PostgreSQL are disabled for security reasons. Instead, we need to set up an SSH tunnel to connect to the database.

## What is SSH Tunneling?

SSH tunneling creates a secure connection between your computer and the remote server, allowing you to connect to the PostgreSQL database as if it were running locally on your machine.

## Prerequisites

1. An SSH client (like PuTTY for Windows, or the built-in SSH client for macOS/Linux)
2. Database credentials:
   - Host: 162.0.209.106
   - Database: solaqmaj_bdc_main
   - Username: solaqmaj_admin
   - Password: :#o=U;ks1q-PJ
   - Port: 5432 (standard PostgreSQL port)
3. SSH access credentials for the shared hosting (provided by hosting)

## Step 1: Set Up SSH Tunnel

### For Windows (using PuTTY):

1. Download and install PuTTY if you don't have it already
2. Open PuTTY
3. In the Session category:
   - Enter the host name (Shared Hosting SSH server)
   - Enter the port (usually 22 for SSH)
4. In the Connection > SSH > Tunnels category:
   - Source port: 5432 (local port that you'll connect to)
   - Destination: localhost:5432 (remote server's PostgreSQL port)
   - Click Add
5. Return to Session, give your session a name, and save it
6. Click Open to start the SSH session
7. Enter your SSH username and password when prompted

### For macOS/Linux (command line):

```bash
ssh -L 5432:localhost:5432 your_ssh_username@your_ssh_server -p 22
```

Replace `your_ssh_username` and `your_ssh_server` with your actual SSH credentials.

## Step 2: Update Environment Variables

Now that you have the SSH tunnel set up, update your `.env` file to connect to the database through the tunnel:

```
# Database Configuration (PostgreSQL through SSH tunnel)
VITE_DB_HOST=localhost
VITE_DB_NAME=solaqmaj_bdc_main
VITE_DB_USER=solaqmaj_admin
VITE_DB_PASSWORD=:#o=U;ks1q-PJ
VITE_DB_PORT=5432
```

Note that we're now connecting to `localhost` since the SSH tunnel forwards your local port 5432 to the remote server's PostgreSQL port.

## Step 3: Test the Connection

Run the `test-postgres-connection.js` script to verify the connection:

```bash
node test-postgres-connection.js
```

## For Production Deployment

For the production environment on the server, you would connect directly to localhost since the application and database are on the same server. The `.env` file on the server would look like:

```
# Database Configuration (PostgreSQL on same server)
VITE_DB_HOST=localhost
VITE_DB_NAME=solaqmaj_bdc_main
VITE_DB_USER=solaqmaj_admin
VITE_DB_PASSWORD=:#o=U;ks1q-PJ
VITE_DB_PORT=5432
```

## Troubleshooting

1. **Port already in use**: If port 5432 is already in use on your local machine (e.g., you have PostgreSQL installed locally), choose a different local port like 5433.

2. **Connection timeouts**: Ensure your SSH credentials are correct and that your account has SSH access enabled.

3. **Authentication errors**: Verify your PostgreSQL username and password.

4. **SSH key authentication**: If your server uses SSH keys instead of passwords, you'll need to configure your SSH client to use your private key.

## Additional Resources

- [PuTTY Download](https://www.putty.org/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [SSH Tunneling Guide](https://www.ssh.com/academy/ssh/tunneling-example) 