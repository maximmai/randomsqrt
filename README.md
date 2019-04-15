# randomsqrt
A simple random square root API endpoint to generate CPU loads.

# Build
`npm install`

# Run
`npm start`

# Deploy
`kubectl apply -f deploy/`
or alternatively, make a HPA deployment
```
cd deploy
kubectl apply -f https://raw.githubusercontent.com/maximmai/randomsqrt/master/deploy/k8s-deployment.yaml
kubectl autoscale deployment randomsqrt-deployment --cpu-percent=50 --min=3 --max=12 --name=randomsqrt-hpa
```
Depending on the environment, expose the service with either `NodePort`:
`kubectl expose deployment randomsqrt-deployment --type=NodePort --name=randomsqrt-service`
Or `LoadBalancer`:
`kubectl expose deployment randomsqrt-deployment --type=LoadBalancer --name=randomsqrt-service`


# Hit the end-point
http://localhost:3000
