#! /bin/bash

kubectl delete -n default deployment store-catalog-mfe-mf
kubectl delete -n default deployment store-catalog-service
kubectl delete -n default deployment store-cart-service
kubectl delete -n default deployment store-cart-mfe-mf



echo "done."