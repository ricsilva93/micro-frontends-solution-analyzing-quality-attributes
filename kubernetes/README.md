## Kubernetes files


This repository contains deployment and services files do deploy every service on k8s and communicate between each other.<br>

<b>kubectl</b> is required.<br>

Kubernetes yaml files created from existing docker-compose file, using <b>kompose</b>.
To apply all the config at once, run bash script:
`./kube-apply.sh` <br>

example to delete deployments:
`./kube-delete.sh` <br>

to scale up to 3 replicas:<br>
`./kube-scaleup.sh`<br>

in case you need to push images to docker hub, edit to match your docker hub repository and then run:<br>
`./push-images.sh`<br>

to run k8s dashboard, folder /dashboard contains an example yaml file.<br> S`ome helpfull commands:<br>
`kubectl apply -f admin-user.yaml`<br>

kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"`<br>

`kubectl proxy`<br>

Proxy opens a port to run the dashboard on a browser. A tutorial detailing how to run the dashboard can be easily found online.<br>

If you need to run in windows, you can open each script using a code editor and use the commands separatedly.<br>

To perform the tests, kubernetes was run using k3d on linux and wsl(ubuntu).