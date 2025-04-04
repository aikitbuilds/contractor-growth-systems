# VPS Setup Log - aininjas_server (159.198.65.230)

This log tracks the setup process for the VPS.

## Setup History

*   **Initial Connection:** Attempted SSH connection as `root` using password. Encountered initial failures (permission denied).
*   **Password Reset:** User reset the root password.
*   **Successful Password Login:** Successfully logged in as `root@159.198.65.230` using the new password (`79JGfTj1B44s3SLmwh`).
*   **SSH Key Setup:**
    *   Located local keys (`id_ed25519`, `id_ed25519.pub`) in `C:\Users\aikit\.ssh\`.
    *   Copied public key content.
    *   Troubleshooting: Identified that `~/.ssh/authorized_keys` was missing on the server.
    *   Ran commands (`mkdir`, `echo > authorized_keys`, `chmod`) via VNC terminal to correctly create `~/.ssh/authorized_keys` with the public key and set permissions (`700` for `~/.ssh`, `600` for `authorized_keys`).
    *   **Successful Key Login:** Confirmed SSH key authentication works from local machine without password.
*   **System Updates:** Ran `apt update && apt upgrade -y` successfully as `root` via SSH.
*   **User Creation:** Attempted to create `admin` user, but skipped setting password. Decided to proceed as `root` for now.

## Installation Steps

*   **Nginx:** Installed (`apt install nginx -y`). 

## Additional Steps

*   **Admin User Setup:**
    *   Log in as root: `ssh root@159.198.65.230` (using your key that's already working)
    *   Complete admin user setup with these commands:
       ```
       mkdir -p /home/admin/.ssh
       echo 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIExiGSRZrD5QQ+mH09ZLT/i1fJL4zd25uMLIM1813fmI aikit@aikitbuilds' > /home/admin/.ssh/authorized_keys
       chown -R admin:admin /home/admin/.ssh
       chmod 700 /home/admin/.ssh
       chmod 600 /home/admin/.ssh/authorized_keys
       usermod -aG sudo admin
       ```
    *   Test admin login: In a new terminal window, try `ssh admin@159.198.65.230`
    *   After confirming admin works, secure SSH (as admin):
       ```
       sudo nano /etc/ssh/sshd_config
       ```
       - Find and set `PermitRootLogin no`
       - Find and set `PasswordAuthentication no`
       - Save (Ctrl+O, Enter) and exit (Ctrl+X)
       - Apply changes: `sudo systemctl restart sshd`

Once you've completed these steps, we can continue with setting up the AI platform. 