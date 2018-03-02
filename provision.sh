#!/usr/bin/env bash

# Add repositories for nodejs and yarn
printf "\n -- Adding repositories for nodejs and yarn\n\n"

curl -sL https://deb.nodesource.com/setup_8.x | bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" >> /etc/apt/sources.list.d/yarn.list

# Update package lists
printf "\n -- Running apt-get update\n\n"
apt-get update

# Install nodejs and yarn
printf "\n -- Installing nodejs and yarn\n\n"
apt-get install -y nodejs yarn

# Install dependencies
printf "\n -- Installing application dependencies\n\n"
yarn --prod

printf "\n -- Installing react-script globally\n\n"
yarn global add react-scripts

# Add yarn bin to Path and change directory to /vagrant on bash startup
printf "\n -- Adding auto-cd to /vagrant\n\n"
read -d '' profile <<EOF

# Start in /vagrant
cd /vagrant
EOF

echo "$profile" >> /home/vagrant/.profile

# Set up service
printf "\n -- Adding service for Reality Platform React server\n\n"
tee /etc/systemd/system/reality-platform-react.service <<EOF
[Unit]
Description=Server for Reality Platform React

[Service]
User=vagrant
WorkingDirectory=/vagrant
ExecStart=/usr/bin/yarn start
Restart=on-failure
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF

printf "\n -- Enabling React Platform Reality service\n\n"
systemctl enable reality-platform-react.service

printf "\n -- Starting React Platform Reality Service\n\n"
systemctl start reality-platform-react.service
