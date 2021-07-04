#! /bin/bash

docker tag microfrontends_store-app-shell-mf:latest ricsilva/mfe-store-app-shell:latest && docker push ricsilva/mfe-store-app-shell
docker tag microfrontends_store-cart-service:latest ricsilva/mfe-store-cart-service:latest && docker push ricsilva/mfe-store-cart-service
docker tag microfrontends_store-catalog-service:latest ricsilva/mfe-store-catalog-service:latest && docker push ricsilva/mfe-store-catalog-service
docker tag microfrontends_store-purchases-service:latest ricsilva/mfe-store-purchases-service:latest && docker push ricsilva/mfe-store-purchases-service
docker tag microfrontends_store-purchase-mfe-mf:latest ricsilva/mfe-store-purchase-mf:latest && docker push ricsilva/mfe-store-purchase-mf
docker tag microfrontends_store-cart-mfe-mf:latest ricsilva/mfe-store-cart-mf:latest && docker push ricsilva/mfe-store-cart-mf
docker tag microfrontends_store-catalog-mfe-mf:latest ricsilva/mfe-store-catalog-mf:latest && docker push ricsilva/mfe-store-catalog-mf
docker tag microfrontends_store-navbar-mfe-mf:latest ricsilva/mfe-store-navbar-mf:latest && docker push ricsilva/mfe-store-navbar-mf

echo "done."