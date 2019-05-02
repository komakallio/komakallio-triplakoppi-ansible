#!/bin/sh

ansible-playbook -i hosts raspi-software.yaml --vault-password-file=~/.vault_password

