#! /bin/bash

kubectl apply -f store-app-shell-mf-deployment.yaml
kubectl apply -f store-app-shell-mf-service.yaml

kubectl apply -f store-cart-service-deployment.yaml
kubectl apply -f store-cart-service-service.yaml

kubectl apply -f store-cart-mfe-mf-deployment.yaml
kubectl apply -f store-cart-mfe-mf-service.yaml

kubectl apply -f store-catalog-mfe-mf-deployment.yaml
kubectl apply -f store-catalog-mfe-mf-service.yaml

kubectl apply -f store-catalog-service-deployment.yaml
kubectl apply -f store-catalog-service-service.yaml

kubectl apply -f store-navbar-mfe-mf-deployment.yaml
kubectl apply -f store-navbar-mfe-mf-service.yaml

kubectl apply -f store-purchase-mfe-mf-deployment.yaml
kubectl apply -f store-purchase-mfe-mf-service.yaml

kubectl apply -f store-purchases-service-deployment.yaml
kubectl apply -f store-purchases-service-service.yaml

echo "done."