# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial64"
  config.vm.network "private_network",  ip: "192.168.144.100"
  config.vm.network "forwarded_port",   guest: 8080, host: 8080

  config.vm.provider "virtualbox" do |vb|
    vb.customize [ "modifyvm", :id, "--uartmode1", "disconnected" ]
  end

  config.vm.provision "ansible" do |ansible|
    ansible.inventory_path  = "./ansible/hosts"
    ansible.limit           = "all"
    ansible.playbook        = "./ansible/site.yml"

    # Debugging
    ansible.verbose         = "vvvv"
  end
end
