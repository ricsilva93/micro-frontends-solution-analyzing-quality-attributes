#! /bin/bash

kubectl scale --replicas=3 -f store-app-shell-mf-deployment.yaml

kubectl scale --replicas=3 -f store-cart-service-deployment.yaml

kubectl scale --replicas=3 -f store-cart-mfe-mf-deployment.yaml

kubectl scale --replicas=3 -f store-navbar-mfe-mf-deployment.yaml

kubectl scale --replicas=3 -f store-purchase-mfe-mf-deployment.yaml

kubectl scale --replicas=3 -f store-purchases-service-deployment.yaml

echo "done."