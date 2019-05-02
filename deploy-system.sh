#!/bin/sh

ansible-playbook -i hosts raspi-system.yaml --vault-password-file=~/.vault_password

